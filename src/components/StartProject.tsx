import { useState, type FormEvent } from "react";
import { defaultStartProject } from "../data";
import { navigate } from "../App";
import { useSEO } from "../hooks/useSEO";

type ClientType = "pj" | "pf";
type SubmitState = "idle" | "sending" | "sent" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as
  | string
  | undefined;

interface FormState {
  name: string;
  clientType: ClientType;
  company: string;
  cnpj: string;
  repName: string;
  repContact: string;
  nickname: string;
  email: string;
  phone: string;
  socials: string;
  serviceArea: string;
  description: string;
  projectSize: string;
  timeline: string;
  referral: string;
}

const INITIAL: FormState = {
  name: "",
  clientType: "pj",
  company: "",
  cnpj: "",
  repName: "",
  repContact: "",
  nickname: "",
  email: "",
  phone: "",
  socials: "",
  serviceArea: "",
  description: "",
  projectSize: "",
  timeline: "",
  referral: "",
};

export function StartProject() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [files, setFiles] = useState<File[]>([]);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const data = defaultStartProject;

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list)]);
  };

  const removeFile = (index: number) =>
    setFiles((prev) => prev.filter((_, i) => i !== index));

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  useSEO({
    title:
      "Iniciar Projeto — ConectCore | Orçamento de Software, IA e Automação",
    description:
      "Solicite um orçamento para desenvolvimento de software, IA especialista, automação industrial, sistemas embarcados ou consultoria em TI. Resposta em até 24 horas.",
    path: "/iniciar-projeto",
  });

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const buildServiceLabel = () =>
    data.serviceAreas.find((s) => s.value === form.serviceArea)?.title ??
    form.serviceArea;

  const buildSizeLabel = () =>
    data.projectSizes.find((p) => p.value === form.projectSize)?.label ??
    form.projectSize;

  const buildTimelineLabel = () =>
    data.timelines.find((t) => t.value === form.timeline)?.label ??
    form.timeline;

  const buildReferralLabel = () =>
    data.referralSources.find((r) => r.value === form.referral)?.label ??
    form.referral;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      console.error(
        "VITE_WEB3FORMS_ACCESS_KEY não configurada. Veja .env.example.",
      );
      setSubmitState("error");
      return;
    }

    setSubmitState("sending");

    const payload = new FormData();
    payload.append("access_key", WEB3FORMS_ACCESS_KEY);
    payload.append("subject", `Nova solicitação de projeto — ${form.name}`);
    payload.append("from_name", form.name);
    payload.append("replyto", form.email);

    payload.append("Nome completo", form.name);
    payload.append("Como te chamar", form.nickname || "—");
    payload.append(
      "Tipo",
      form.clientType === "pj" ? "Pessoa Jurídica" : "Pessoa Física",
    );
    if (form.clientType === "pj") {
      payload.append("Empresa", form.company);
      payload.append("CNPJ", form.cnpj);
      payload.append("Representante", form.repName || "—");
      payload.append("Contato do representante", form.repContact || "—");
    }
    payload.append("E-mail", form.email);
    payload.append("Telefone", form.phone);
    payload.append("Redes sociais", form.socials || "—");
    payload.append("Área de serviço", buildServiceLabel());
    payload.append("Descrição do projeto", form.description);
    payload.append("Tamanho do projeto", buildSizeLabel());
    payload.append("Prazo", buildTimelineLabel());
    payload.append("Como nos encontrou", buildReferralLabel() || "—");

    files
      .slice(0, 5)
      .forEach((file) => payload.append("attachments", file, file.name));

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: payload,
      });
      const json = await res.json();
      if (!res.ok || !json.success)
        throw new Error(json.message || "Falha no envio");

      setSubmitState("sent");
      setTimeout(() => {
        setSubmitState("idle");
        setForm(INITIAL);
        setFiles([]);
      }, 5000);
    } catch (err) {
      console.error("[StartProject] erro ao enviar:", err);
      setSubmitState("error");
    }
  };

  const submitLabel =
    submitState === "sending"
      ? "Enviando..."
      : submitState === "sent"
        ? "✓ Solicitação enviada"
        : submitState === "error"
          ? "Tentar novamente"
          : "Enviar solicitação";

  return (
    <div className="start-project">
      <header className="start-project__topbar">
        <button
          type="button"
          className="start-project__back"
          onClick={() => navigate("/")}
          aria-label="Voltar para a home"
        >
          ← Voltar
        </button>
        <span className="start-project__brand">ConectCore</span>
      </header>

      <main className="start-project__main">
        <div className="start-project__inner">
          <div className="start-project__hero">
            <span className="section-tag">{data.hero.tag}</span>
            <h1 className="start-project__title">
              {data.hero.title} <em>{data.hero.titleEm}</em>
            </h1>
            <p className="start-project__subtitle">{data.hero.subtitle}</p>
          </div>

          <form className="start-project__form" onSubmit={handleSubmit}>
            {/* Seção 1 — Sobre você */}
            <section className="start-project__section">
              <div className="start-project__section-head">
                <span className="start-project__section-number">
                  {data.sections[0].number}
                </span>
                <div>
                  <h2>{data.sections[0].title}</h2>
                  <p>{data.sections[0].description}</p>
                </div>
              </div>

              <div className="start-project__grid">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                  <label htmlFor="name">Nome completo</label>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="nickname"
                    placeholder=" "
                    value={form.nickname}
                    onChange={(e) => update("nickname", e.target.value)}
                  />
                  <label htmlFor="nickname">Como podemos te chamar?</label>
                </div>
              </div>

              <div
                className="start-project__client-type"
                role="radiogroup"
                aria-label="Tipo de cliente"
              >
                <label
                  className={`start-project__chip${form.clientType === "pj" ? " is-active" : ""}`}
                >
                  <input
                    type="radio"
                    name="clientType"
                    value="pj"
                    checked={form.clientType === "pj"}
                    onChange={() => update("clientType", "pj")}
                  />
                  Pessoa Jurídica
                </label>
                <label
                  className={`start-project__chip${form.clientType === "pf" ? " is-active" : ""}`}
                >
                  <input
                    type="radio"
                    name="clientType"
                    value="pf"
                    checked={form.clientType === "pf"}
                    onChange={() => update("clientType", "pf")}
                  />
                  Pessoa Física
                </label>
              </div>

              {form.clientType === "pj" && (
                <>
                  <div className="start-project__grid">
                    <div className="form-group">
                      <input
                        type="text"
                        id="company"
                        placeholder=" "
                        required
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                      />
                      <label htmlFor="company">Nome da empresa</label>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        id="cnpj"
                        placeholder=" "
                        required
                        value={form.cnpj}
                        onChange={(e) => update("cnpj", e.target.value)}
                      />
                      <label htmlFor="cnpj">CNPJ</label>
                    </div>
                  </div>

                  <div className="start-project__grid">
                    <div className="form-group">
                      <input
                        type="text"
                        id="repName"
                        placeholder=" "
                        value={form.repName}
                        onChange={(e) => update("repName", e.target.value)}
                      />
                      <label htmlFor="repName">
                        Nome do representante (opcional)
                      </label>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        id="repContact"
                        placeholder=" "
                        value={form.repContact}
                        onChange={(e) => update("repContact", e.target.value)}
                      />
                      <label htmlFor="repContact">
                        Contato do representante (opcional)
                      </label>
                    </div>
                  </div>
                </>
              )}

              <div className="start-project__grid">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                  <label htmlFor="email">E-mail</label>
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    placeholder=" "
                    required
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                  <label htmlFor="phone">Telefone / WhatsApp</label>
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="socials"
                  placeholder=" "
                  value={form.socials}
                  onChange={(e) => update("socials", e.target.value)}
                />
                <label htmlFor="socials">Redes sociais (opcional)</label>
              </div>
            </section>

            {/* Seção 2 — Seu projeto */}
            <section className="start-project__section">
              <div className="start-project__section-head">
                <span className="start-project__section-number">
                  {data.sections[1].number}
                </span>
                <div>
                  <h2>{data.sections[1].title}</h2>
                  <p>{data.sections[1].description}</p>
                </div>
              </div>

              <div className="start-project__service-grid">
                {data.serviceAreas.map((area) => (
                  <label
                    key={area.value}
                    className={`start-project__service${form.serviceArea === area.value ? " is-active" : ""}`}
                  >
                    <input
                      type="radio"
                      name="serviceArea"
                      value={area.value}
                      checked={form.serviceArea === area.value}
                      onChange={() => update("serviceArea", area.value)}
                      required
                    />
                    <strong>{area.title}</strong>
                    <span>{area.description}</span>
                  </label>
                ))}
              </div>

              <div className="form-group">
                <textarea
                  id="description"
                  rows={8}
                  placeholder=" "
                  required
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                />
                <label htmlFor="description">
                  Descreva seu projeto com o máximo de detalhes
                </label>
              </div>

              <div className="start-project__upload">
                <label
                  htmlFor="attachments"
                  className="start-project__upload-drop"
                  aria-label="Anexar arquivos"
                >
                  <div
                    className="start-project__upload-icon"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </svg>
                  </div>
                  <div className="start-project__upload-text">
                    <strong>Anexar arquivos</strong>
                    <span>
                      Briefings, mockups, referências ou documentos — PDF,
                      imagens, docs (opcional)
                    </span>
                  </div>
                  <input
                    type="file"
                    id="attachments"
                    multiple
                    onChange={(e) => addFiles(e.target.files)}
                  />
                </label>

                {files.length > 0 && (
                  <ul className="start-project__file-list">
                    {files.map((file, i) => (
                      <li
                        key={`${file.name}-${i}`}
                        className="start-project__file"
                      >
                        <span className="start-project__file-name">
                          {file.name}
                        </span>
                        <span className="start-project__file-size">
                          {formatSize(file.size)}
                        </span>
                        <button
                          type="button"
                          className="start-project__file-remove"
                          onClick={() => removeFile(i)}
                          aria-label={`Remover ${file.name}`}
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>

            {/* Seção 3 — Orçamento e prazo */}
            <section className="start-project__section">
              <div className="start-project__section-head">
                <span className="start-project__section-number">
                  {data.sections[2].number}
                </span>
                <div>
                  <h2>{data.sections[2].title}</h2>
                  <p>{data.sections[2].description}</p>
                </div>
              </div>

              <div className="start-project__grid">
                <div className="form-group">
                  <select
                    id="projectSize"
                    required
                    value={form.projectSize}
                    onChange={(e) => update("projectSize", e.target.value)}
                  >
                    <option value="" disabled>
                      Tamanho do projeto
                    </option>
                    {data.projectSizes.map((b) => (
                      <option key={b.value} value={b.value}>
                        {b.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <select
                    id="timeline"
                    required
                    value={form.timeline}
                    onChange={(e) => update("timeline", e.target.value)}
                  >
                    <option value="" disabled>
                      Prazo desejado
                    </option>
                    {data.timelines.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* Seção 4 — Como nos encontrou */}
            <section className="start-project__section">
              <div className="start-project__section-head">
                <span className="start-project__section-number">
                  {data.sections[3].number}
                </span>
                <div>
                  <h2>{data.sections[3].title}</h2>
                  <p>{data.sections[3].description}</p>
                </div>
              </div>

              <div className="start-project__referral-grid">
                {data.referralSources.map((r) => (
                  <label
                    key={r.value}
                    className={`start-project__chip${form.referral === r.value ? " is-active" : ""}`}
                  >
                    <input
                      type="radio"
                      name="referral"
                      value={r.value}
                      checked={form.referral === r.value}
                      onChange={() => update("referral", r.value)}
                    />
                    {r.label}
                  </label>
                ))}
              </div>
            </section>

            {/* Submit */}
            <div className="start-project__submit">
              <button
                type="submit"
                className="btn btn--primary"
                disabled={submitState === "sending" || submitState === "sent"}
                style={
                  submitState === "sent" ? { background: "#25D366" } : undefined
                }
              >
                {submitLabel}
              </button>
              {submitState === "error" && (
                <p className="start-project__submit-error">
                  Não foi possível enviar agora. Tente novamente ou escreva
                  direto para <strong>contato@conectcore.com</strong>.
                </p>
              )}
              <p className="start-project__submit-note">
                Responderemos em até 24 horas úteis no e-mail informado.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

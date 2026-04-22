import { useState, useEffect, type FormEvent } from "react";
import { defaultStartProject } from "../data";
import { navigate } from "../App";

type ClientType = "pj" | "pf";
type SubmitState = "idle" | "sending" | "sent";

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
  budget: string;
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
  budget: "",
  timeline: "",
  referral: "",
};

export function StartProject() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const data = defaultStartProject;

  useEffect(() => {
    document.title = "Iniciar Projeto — ConectCore";
  }, []);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitState("sending");
    setTimeout(() => {
      setSubmitState("sent");
      setTimeout(() => {
        setSubmitState("idle");
        setForm(INITIAL);
      }, 4000);
    }, 1200);
  };

  const submitLabel =
    submitState === "sending"
      ? "Enviando..."
      : submitState === "sent"
        ? "✓ Solicitação enviada"
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
                <span className="start-project__section-number">{data.sections[0].number}</span>
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

              <div className="start-project__client-type" role="radiogroup" aria-label="Tipo de cliente">
                <label className={`start-project__chip${form.clientType === "pj" ? " is-active" : ""}`}>
                  <input
                    type="radio"
                    name="clientType"
                    value="pj"
                    checked={form.clientType === "pj"}
                    onChange={() => update("clientType", "pj")}
                  />
                  Pessoa Jurídica
                </label>
                <label className={`start-project__chip${form.clientType === "pf" ? " is-active" : ""}`}>
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
                      <label htmlFor="repName">Nome do representante (opcional)</label>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        id="repContact"
                        placeholder=" "
                        value={form.repContact}
                        onChange={(e) => update("repContact", e.target.value)}
                      />
                      <label htmlFor="repContact">Contato do representante (opcional)</label>
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
                <span className="start-project__section-number">{data.sections[1].number}</span>
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
                <label htmlFor="description">Descreva seu projeto com o máximo de detalhes</label>
              </div>
            </section>

            {/* Seção 3 — Orçamento e prazo */}
            <section className="start-project__section">
              <div className="start-project__section-head">
                <span className="start-project__section-number">{data.sections[2].number}</span>
                <div>
                  <h2>{data.sections[2].title}</h2>
                  <p>{data.sections[2].description}</p>
                </div>
              </div>

              <div className="start-project__grid">
                <div className="form-group">
                  <select
                    id="budget"
                    required
                    value={form.budget}
                    onChange={(e) => update("budget", e.target.value)}
                  >
                    <option value="" disabled>Faixa de orçamento</option>
                    {data.budgetRanges.map((b) => (
                      <option key={b.value} value={b.value}>{b.label}</option>
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
                    <option value="" disabled>Prazo desejado</option>
                    {data.timelines.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* Seção 4 — Como nos encontrou */}
            <section className="start-project__section">
              <div className="start-project__section-head">
                <span className="start-project__section-number">{data.sections[3].number}</span>
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
                disabled={submitState !== "idle"}
                style={submitState === "sent" ? { background: "#25D366" } : undefined}
              >
                {submitLabel}
              </button>
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

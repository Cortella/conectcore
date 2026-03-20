import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "sent">(
    "idle",
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitState("sending");

    setTimeout(() => {
      setSubmitState("sent");
      setTimeout(() => {
        setSubmitState("idle");
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  const buttonText =
    submitState === "sending"
      ? "Enviando..."
      : submitState === "sent"
        ? "✓ Mensagem Enviada!"
        : "Enviar Mensagem";

  const buttonStyle =
    submitState === "sent"
      ? { background: "#25D366", opacity: 1 }
      : submitState === "sending"
        ? { opacity: 0.7 }
        : {};

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__grid">
          <Reveal className="contact__info">
            <span className="section-tag">Contato</span>
            <h2 className="section-title">
              Vamos
              <br />
              <em>conversar.</em>
            </h2>
            <p>
              Tem um projeto em mente? Queremos ouvir sua ideia e mostrar como
              podemos transformá-la em realidade.
            </p>
            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-icon">✉</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:contato@conectcore.com.br">
                    contato@conectcore.com.br
                  </a>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">📱</span>
                <div>
                  <strong>WhatsApp</strong>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener"
                  >
                    +55 (11) 99999-9999
                  </a>
                </div>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-icon">📍</span>
                <div>
                  <strong>Localização</strong>
                  <span>Belo Horizonte, MG — Brasil</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, name: e.target.value }))
                  }
                />
                <label htmlFor="name">Seu nome</label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, email: e.target.value }))
                  }
                />
                <label htmlFor="email">Seu email</label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder=" "
                  value={formData.company}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, company: e.target.value }))
                  }
                />
                <label htmlFor="company">Empresa</label>
              </div>
              <div className="form-group">
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, subject: e.target.value }))
                  }
                >
                  <option value="" disabled>
                    Selecione o assunto
                  </option>
                  <option value="software">Engenharia de Software</option>
                  <option value="product">Produto Digital / App</option>
                  <option value="infra">Infraestrutura &amp; Cloud</option>
                  <option value="optimization">Otimização</option>
                  <option value="consulting">Consultoria</option>
                  <option value="other">Outro</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder=" "
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((d) => ({ ...d, message: e.target.value }))
                  }
                ></textarea>
                <label htmlFor="message">Sua mensagem</label>
              </div>
              <button
                type="submit"
                className="btn btn--primary btn--full"
                disabled={submitState !== "idle"}
                style={buttonStyle}
              >
                {buttonText}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

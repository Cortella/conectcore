import { defaultBlog } from "../data";
import { useDataStore } from "../hooks/useDataStore";
import { navigate } from "../App";
import { useSEO } from "../hooks/useSEO";

const SITE_URL = "https://conectcore.com";

export function BlogPost() {
  const slug = window.location.pathname.replace("/blog/", "");
  const { items: articles } = useDataStore("blog", defaultBlog);
  const article = articles.find((a) => a.slug === slug);

  const articleTitle = article?.title ?? "Artigo não encontrado";
  const articleDesc =
    article?.desc ?? "O artigo que você procura não existe ou foi removido.";

  const jsonLd = article
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.desc,
        articleSection: article.category,
        inLanguage: "pt-BR",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/blog/${article.slug}`,
        },
        author: { "@type": "Organization", name: "ConectCore" },
        publisher: {
          "@type": "Organization",
          name: "ConectCore",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/assets/conectcore_logo01.png`,
          },
        },
      }
    : undefined;

  useSEO({
    title: `${articleTitle} — Blog ConectCore`,
    description: articleDesc,
    path: `/blog/${slug}`,
    ogType: "article",
    jsonLd,
  });

  if (!article) {
    return (
      <div className="blogpost">
        <nav className="blogpost__nav">
          <div className="container">
            <a
              href="/"
              className="nav__logo"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img
                src="/assets/conectcore_logo02.png"
                alt="Conectcore"
                className="nav__logo-img"
              />
            </a>
            <a
              href="/#blog"
              className="blogpost__back"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setTimeout(
                  () =>
                    document
                      .getElementById("blog")
                      ?.scrollIntoView({ behavior: "smooth" }),
                  100,
                );
              }}
            >
              ← Voltar ao blog
            </a>
          </div>
        </nav>
        <main className="blogpost__content">
          <div className="container container--narrow">
            <h1 className="blogpost__title">Artigo não encontrado</h1>
            <p style={{ color: "var(--gray-500)", marginTop: 16 }}>
              O artigo que você procura não existe ou foi removido.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="blogpost">
      <nav className="blogpost__nav">
        <div className="container">
          <a
            href="/"
            className="nav__logo"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <img
              src="/assets/conectcore_logo02.png"
              alt="Conectcore"
              className="nav__logo-img"
            />
          </a>
          <a
            href="/#blog"
            className="blogpost__back"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              setTimeout(
                () =>
                  document
                    .getElementById("blog")
                    ?.scrollIntoView({ behavior: "smooth" }),
                100,
              );
            }}
          >
            ← Voltar ao blog
          </a>
        </div>
      </nav>

      <main className="blogpost__content">
        <div className="container container--narrow">
          <div className="blogpost__meta">
            <span className="blogpost__category">{article.category}</span>
            <span className="blogpost__date">
              {article.day} {article.month}
            </span>
            {article.readTime && (
              <span className="blogpost__readtime">
                {article.readTime} de leitura
              </span>
            )}
          </div>

          <h1 className="blogpost__title">{article.title}</h1>
          <p className="blogpost__lead">{article.desc}</p>

          {article.sections?.map((section, i) => (
            <section className="blogpost__section" key={i}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph, j) => (
                <p key={j}>{paragraph}</p>
              ))}
            </section>
          ))}

          <div className="blogpost__footer-cta">
            <p>
              Quer saber como aplicar essas práticas no seu projeto?{" "}
              <a href="/#contact">Fale com a gente.</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

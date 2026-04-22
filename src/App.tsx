import { useState, useEffect, useCallback } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Cases } from "./components/Cases";
import { Research } from "./components/Research";
import { Blog } from "./components/Blog";
import { CtaSection } from "./components/CtaSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { BlogPost } from "./components/BlogPost";
import { StartProject } from "./components/StartProject";
import { useSEO } from "./hooks/useSEO";

export function navigate(to: string) {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function Home() {
  useSEO({
    title: "ConectCore — Engenharia de Software, IA Especialista e Automação Industrial",
    description: "Construímos IAs especialistas treinadas para contextos empresariais, software de alta performance, automação industrial e sistemas embarcados. Belo Horizonte, MG.",
    path: "/",
  });

  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Projects />
      <Services />
      <Cases />
      <Research />
      <Blog />
      <CtaSection />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  const [path, setPath] = useState(window.location.pathname);

  const onRouteChange = useCallback(() => {
    setPath(window.location.pathname);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", onRouteChange);
    return () => window.removeEventListener("popstate", onRouteChange);
  }, [onRouteChange]);

  if (path === "/privacidade") return <PrivacyPolicy />;
  if (path === "/iniciar-projeto") return <StartProject />;
  if (path.startsWith("/blog/")) return <BlogPost />;

  return <Home />;
}

export default App;

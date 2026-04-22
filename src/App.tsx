import { useState, useEffect, useCallback } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { Partners } from "./components/Partners";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Cases } from "./components/Cases";
import { Research } from "./components/Research";
import { Blog } from "./components/Blog";
import { CtaSection } from "./components/CtaSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { BlogPost } from "./components/BlogPost";

export function navigate(to: string) {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
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

  if (path === "/privacidade") {
    return <PrivacyPolicy />;
  }

  if (path.startsWith("/blog/")) {
    return <BlogPost />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <About />
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

export default App;

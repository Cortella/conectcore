import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Cases } from "./components/Cases";
import { Certificates } from "./components/Certificates";
import { Blog } from "./components/Blog";
import { CtaSection } from "./components/CtaSection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Metrics />
      <About />
      <Services />
      <Cases />
      <Certificates />
      <Blog />
      <CtaSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

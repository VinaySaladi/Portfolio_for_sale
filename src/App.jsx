import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useActiveSection from "./hooks/useActiveSection";

const sectionIds = ["home", "gallery", "about", "contact"];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

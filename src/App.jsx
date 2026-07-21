import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import CustomCursor from "./components/ui/CustomCursor";
import Background from "./components/ui/Background";
import { useEffect, useState } from "react";
import Loader from "./components/ui/Loader";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {

  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1800);

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return <Loader />;
}

  return (
    <>
      <Background />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />

      <ScrollToTop />
    </>
  );
}

export default App;
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loading from "@/components/Loading";
import GradientOrbs from "@/components/GradientOrbs";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // If user opens the website freshly, ensure it always starts at top (#home)
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (loading) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loading key="loading" />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen">
          {/* Global Background Image Layer */}
          <div
            className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-fixed pointer-events-none"
            style={{ backgroundImage: `url('/portfolio-bg.jpg')` }}
          />
          {/* Subtle overlay to ensure high readability and contrast in dark/light themes */}
          <div className="fixed inset-0 -z-10 bg-background/85 dark:bg-background/90 pointer-events-none backdrop-blur-[1px]" />

          <CustomCursor />
          <GradientOrbs />
          <Navbar />
          <ScrollToTop />
          <main>
            <Hero />
            <MarqueeStrip />
            <Experience />
            <Skills />
            <Education />
            <Projects />
            <Achievements />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}

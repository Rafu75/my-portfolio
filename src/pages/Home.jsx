
import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  const portraitStartRef = useRef(null);
  const portraitTargetRef = useRef(null);

  const [positions, setPositions] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  useLayoutEffect(() => {
  const updatePositions = () => {
    if (!portraitStartRef.current || !portraitTargetRef.current) return;

    const startRect = portraitStartRef.current.getBoundingClientRect();
    const targetRect = portraitTargetRef.current.getBoundingClientRect();

    if (!startRect.width || !targetRect.width) return;

    const scrollTop = window.scrollY;
    const imageSize = startRect.width;

    const start = {
      x: startRect.left + scrollTop,
      y: startRect.top + scrollTop,
    };

    const target = {
      x: targetRect.left + (targetRect.width - imageSize) / 2,
      y: targetRect.top + scrollTop - imageSize + 12,
    };

    const endScroll = Math.max(
      1,
      target.y - window.innerHeight * 0.55
    );

    setPositions({
      start,
      target,
      endScroll,
      size: imageSize,
    });
  };

  updatePositions();

  window.addEventListener("resize", updatePositions);

  return () => {
    window.removeEventListener("resize", updatePositions);
  };
}, []);

  const imageX = useTransform(
    scrollY,
    [0, positions?.endScroll || 1],
    [positions?.start.x || 0, positions?.target.x || 0]
  );

  const imageY = useTransform(
    scrollY,
    [0, positions?.endScroll || 1],
    [positions?.start.y || 0, positions?.target.y || 0]
  );

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <ThemeToggle />
      <StarBackground />
      <Navbar onMenuToggle={setIsMenuOpen}/>

      <main>
        <HeroSection portraitStartRef={portraitStartRef} />

        <AboutSection portraitTargetRef={portraitTargetRef} />

        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {positions && (
        <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{
          opacity: isMenuOpen ? 0 : 1,
          scale: 1,
        }}
        transition={{
          duration: 0.3,
          delay: isMenuOpen ? 0 : 0.3,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute left-0 top-0 z-50 overflow-hidden rounded-full border-2 border-primary/50 shadow-[0_0_30px_rgba(139,92,246,0.25)]"
        style={{
            width: positions.size,
            height: positions.size,
            x: imageX,
            y: imageY,
        }}
        >
        <img
            src="/rafi-portrait.png"
            alt="Rafi Mahmudul"
            className="block h-full w-full rounded-full object-cover object-top"
        />
        </motion.div>
        )}

      <Footer />
    </div>
  );
};

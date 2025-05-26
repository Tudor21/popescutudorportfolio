import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Navbar from '../../components/NavBar';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import About from '../../components/Home/About';
import Contact from '../../components/Home/Contact';
import Hero from '../../components/Home/Hero';
import Projects from '../../components/Home/Projects';
import { BackgroundMusicPlayer } from '../../components/BackgroundMusicPlayer';
import type { BackgroundMusicPlayerHandle } from '../../components/BackgroundMusicPlayer/BackgroundMusicPlayer';
import { BaseLayout } from '../../components/BaseLayout';
import Skills from '../../components/Home/Skills';

const SECTIONS = {
  home: Hero,
  about: About,
  skills: Skills,
  projects: Projects,
  contact: Contact,
};

const Home: React.FC = () => {
  const [volume] = useState(0.2);
  const [isPlaying, setIsPlaying] = useState(false);
  const musicPlayerRef = useRef<BackgroundMusicPlayerHandle | null>(null);
  const [activeSection, setActiveSection] = useState<keyof typeof SECTIONS>('home');
  const [prevSection, setPrevSection] = useState<keyof typeof SECTIONS | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Enable background music after first user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      setIsPlaying(true);
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);
    document.addEventListener("scroll", handleUserInteraction);

    return () => {
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("scroll", handleUserInteraction);
    };
  }, []);

  // Section switching logic
  const handleSectionChange = (section: keyof typeof SECTIONS) => {
    if (section === activeSection || isTransitioning) return;
    setIsTransitioning(true);

    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setPrevSection(activeSection);
          setActiveSection(section);
          setTimeout(() => setIsTransitioning(false), 10);
        }
      });
    } else {
      setPrevSection(activeSection);
      setActiveSection(section);
      setTimeout(() => setIsTransitioning(false), 10);
    }
  };

  useEffect(() => {
    if (prevSection !== null && sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      );
      setPrevSection(null);
    }
  }, [activeSection]);

  const SectionComponent = SECTIONS[activeSection];

  return (
    <BaseLayout>
      <Navbar
        activeSection={activeSection}
        onSectionChange={section => handleSectionChange(section as keyof typeof SECTIONS)}
      />
      <BackgroundMusicPlayer
        ref={musicPlayerRef}
        volume={volume}
        isPlaying={isPlaying}
        togglePlayPause={() => setIsPlaying((prev) => !prev)}
      />
      <LanguageSwitcher />
      <div style={{
        minHeight: "70vh",
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div
          ref={sectionRef}
          key={activeSection}
          style={{
            width: "100%",
            opacity: 1,
            willChange: "opacity, transform"
          }}
        >
          <SectionComponent />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;

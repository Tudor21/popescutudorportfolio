import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import * as S from "./Skills.styled";
import skillsData from "./SkillsData.json";

const Skills: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Animate modal panel in
  useEffect(() => {
    if (activeIdx !== null && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 0.38, ease: "power2.out" }
      );
    }
  }, [activeIdx]);

  // Fade out title and grid when modal is open, fade back in on close
  useEffect(() => {
    if (activeIdx !== null) {
      gsap.to(titleRef.current, {
        opacity: 0,
        y: -32,
        duration: 0.32,
        ease: "power2.out",
        pointerEvents: "none"
      });
      gsap.to(gridRef.current, {
        opacity: 0,
        y: 32,
        duration: 0.36,
        ease: "power2.out",
        pointerEvents: "none"
      });
    } else {
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.36,
        delay: 0.15,
        ease: "power2.out",
        pointerEvents: "auto"
      });
      gsap.to(gridRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.38,
        delay: 0.09,
        ease: "power2.out",
        pointerEvents: "auto"
      });
    }
  }, [activeIdx]);

  // Animate grid buttons in and out with stagger
  useEffect(() => {
    if (activeIdx === null) {
      // Show all buttons with entrance animation
      gsap.fromTo(
        btnRefs.current,
        { opacity: 0, y: 50, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.08
        }
      );
    } else {
      // Hide all buttons (except the selected one) with exit animation
      btnRefs.current.forEach((el, i) => {
        if (!el) return;
        if (i === activeIdx) {
          gsap.to(el, {
            opacity: 0,
            scale: 0.93,
            duration: 0.27,
            ease: "power2.in"
          });
        } else {
          gsap.to(el, {
            opacity: 0,
            y: 40,
            scale: 0.8,
            duration: 0.33,
            delay: 0.06 + i * 0.045,
            pointerEvents: "none",
            ease: "power2.in"
          });
        }
      });
    }
    // Cleanup to reset all
    return () => {
      btnRefs.current.forEach((el) => {
        if (el) gsap.set(el, { clearProps: "all" });
      });
    };
  }, [activeIdx]);

  // Handle ESC key to close modal
  useEffect(() => {
    if (activeIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIdx(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIdx]);

  return (
    <S.Wrapper>
      <S.Title ref={titleRef}>Skills</S.Title>
      <S.Grid ref={gridRef}>
        {skillsData.skills.map((skill, idx) => (
          <S.IconButton
            key={skill.title + idx}
            ref={el => { btnRefs.current[idx] = el; }}
            onClick={() => setActiveIdx(idx)}
            tabIndex={0}
            aria-label={skill.title}
          >
            <S.Logo>
              <img src={skill.logoPath} alt={skill.title + " logo"} />
            </S.Logo>
          </S.IconButton>
        ))}
      </S.Grid>

      {/* Modal Panel */}
      {activeIdx !== null && (
        <S.ModalOverlay>
          <S.ModalPanel
            ref={modalRef}
            tabIndex={0}
            aria-modal="true"
            aria-label={skillsData.skills[activeIdx].title + " details"}
          >
            <S.CloseButton
              onClick={() => setActiveIdx(null)}
              aria-label="Close"
            >
              &times;
            </S.CloseButton>
            <S.IconButton tabIndex={0}>
              <S.Logo>
                <img
                  src={skillsData.skills[activeIdx].logoPath}
                  alt={skillsData.skills[activeIdx].title + " logo"}
                />
              </S.Logo>
            </S.IconButton>
            <S.ExpandedTitle>
              {skillsData.skills[activeIdx].title}
            </S.ExpandedTitle>
            <S.ExpandedDescription>
              {skillsData.skills[activeIdx].description}
            </S.ExpandedDescription>
          </S.ModalPanel>
        </S.ModalOverlay>
      )}
    </S.Wrapper>
  );
};

export default Skills;

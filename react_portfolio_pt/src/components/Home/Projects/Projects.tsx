import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
import * as S from "./Projects.styled";
// import projectsData from "./ProjectsData.json";
import { useLanguage } from "../../../contexts/LanguageContext";
gsap.registerPlugin(ScrollTrigger);

// interface Project {
//   title: string;
//   shortDescription: string;
//   fullDescription: string;
//   video: string;
//   mainImage: string;
//   compatibilityIcons: string[];
//   tags: string[];
// }

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const comingSoonRef = useRef<HTMLDivElement>(null);

  // const projects: Project[] = projectsData.projects;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.set(titleRef.current, { opacity: 0, y: 50 });
    gsap.set(comingSoonRef.current, { opacity: 0, scale: 0.8, y: 30 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    })
    .to(comingSoonRef.current, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
    }, "-=0.3");

    // Continuous animation for the coming soon text
    gsap.to(comingSoonRef.current, {
      scale: 1.05,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <S.Wrapper ref={sectionRef} id="projects">
      <S.Container>
        <S.Title ref={titleRef}>{t("projects.title")}</S.Title>
        
        {/* Coming Soon Section */}
        <div 
          ref={comingSoonRef}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '300px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '3rem',
              fontWeight: 900,
              background: 'linear-gradient(90deg, #ffd600 14%, #ffc107 68%, #fffbe7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 20px rgba(255, 214, 0, 0.3)',
              letterSpacing: '2px',
            }}
          >
            Coming Soon
          </div>
        </div>

        {/* Commented out Swiper section */}
        {/*
        <S.SwiperWrapper>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            centeredSlides={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              500: { slidesPerView: 1, spaceBetween: 14 },
              700: { slidesPerView: 2, spaceBetween: 18 },
              1100: { slidesPerView: 3, spaceBetween: 28 },
              1400: { slidesPerView: 3, spaceBetween: 32 },
              2000: { slidesPerView: 3, spaceBetween: 38 },
              70000: { slidesPerView: 3, spaceBetween: 38 },
            }}
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx}>
                <S.Card>
                  <S.Image>
                    <img
                      src={project.mainImage}
                      alt={`${project.title} preview`}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        display: "flex",
                        gap: 6,
                      }}
                    >
                      {project.compatibilityIcons.map((icon, iconIdx) => (
                        <img
                          key={iconIdx}
                          src={icon}
                          alt="Compatibility"
                          style={{
                            width: 22,
                            height: 22,
                            filter: "drop-shadow(0 1px 5px #ffd60088)",
                          }}
                        />
                      ))}
                    </div>
                  </S.Image>
                  <S.Content>
                    <S.CardTitle>{project.title}</S.CardTitle>
                    <S.Tech>
                      {project.tags.map((tag, tagIdx) => (
                        <S.TechItem key={tagIdx}>{tag}</S.TechItem>
                      ))}
                    </S.Tech>
                    <S.Description>{project.shortDescription}</S.Description>
                  </S.Content>
                </S.Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </S.SwiperWrapper>
        */}
      </S.Container>
    </S.Wrapper>
  );
};

export default Projects;
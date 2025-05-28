import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useLanguage } from "../../../contexts/LanguageContext";
import * as S from "./About.styled";

const About: React.FC = () => {
  const { t } = useLanguage();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    gsap.set([titleRef.current, descriptionRef.current, imageRef.current], {
      opacity: 0,
      y: 40,
    });

    tl.to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 })
      .to(imageRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
      .to(descriptionRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <S.Wrapper id="about">
      <S.Container>
        <div style={{ width: "100%" }}>
          <S.Content>
            <S.Title ref={titleRef}> {t("about.title")}</S.Title>
            <S.Description ref={descriptionRef}>
              {t("about.description")}
            </S.Description>
          </S.Content>
        </div>
        <S.Image>
          <S.ImagePlaceholder ref={imageRef}>
            <S.ProfileImage
              src="/profile-picture.jpeg"
              alt={t("about.title") + " - profile"}
              draggable={false}
            />
          </S.ImagePlaceholder>
        </S.Image>
      </S.Container>
    </S.Wrapper>
  );
};

export default About;

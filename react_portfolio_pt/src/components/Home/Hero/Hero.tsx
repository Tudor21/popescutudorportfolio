import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '../../../contexts/LanguageContext';
import * as S from './Hero.styled';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const wrapperRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.fromTo(wrapperRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7 });

    tl.fromTo(
      [nameRef.current, titleRef.current, subtitleRef.current],
      { y: 64, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.18,
        duration: 0.8,
        ease: "power3.out"
      },
      "-=0.3"
    );
  }, []);

  return (
    <S.Wrapper id="hero" ref={wrapperRef}>
      <S.Content>
        <S.Name ref={nameRef}>{t('hero.name')}</S.Name>
        <S.Title ref={titleRef}>{t('hero.title')}</S.Title>
        <S.Subtitle ref={subtitleRef}>{t('hero.subtitle')}</S.Subtitle>
      </S.Content>
    </S.Wrapper>
  );
};

export default Hero;

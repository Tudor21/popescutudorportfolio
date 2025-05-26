import styled from 'styled-components';

export const HeroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 5rem;
  color: white;
  position: relative;
  overflow: hidden;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 2rem 2rem;
  }

  @media (max-width: 768px) {
    min-height: 80vh;
    padding: 2rem 1.1rem;
  }
`;

export const HeroContent = styled.div`
  max-width: 820px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroName = styled.h1`
  font-size: 5.2rem;
  font-weight: 700;
  margin: 0 0 1.4rem 0;
  color: #fffbe7;
  letter-spacing: 2px;
  line-height: 1.06;
  background: #fff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 4.6rem;
  }

  @media (max-width: 480px) {
    font-size: 4rem;
  }
`;

export const HeroTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 0 1.4rem 0;
  color: #fff;
  background: linear-gradient(90deg, #FFD600, #FFC107 60%, #FFEB3B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.42rem;
  margin-bottom: 0.6rem;
  opacity: 0.95;
  line-height: 1.58;
  max-width: 680px;
  background: linear-gradient(90deg, #fffbe7, #fffde7 70%, #ffe082 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export {
  HeroWrapper as Wrapper,
  HeroContent as Content,
  HeroName as Name,
  HeroTitle as Title,
  HeroSubtitle as Subtitle,
};

import styled from 'styled-components';

export const AboutWrapper = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    min-height: unset;
    padding: 4rem 1rem 0rem 1rem;
  }

  @media (max-height: 740px) {
    max-height: 100vh;
    overflow-y: hidden;

    &::after {
      content: '';
      display: block;
      position: sticky;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 46px;
      pointer-events: none;
      z-index: 10;
    }
  }
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    max-height: calc(100vh - 360px);
    min-height: 220px;
    overflow-y: hidden;
    position: relative;
  }
`;

export const AboutTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #fffbe7;
  margin: 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 70px;
    height: 5px;
    background: linear-gradient(90deg, #FFD600 0%, #FFC107 80%, #FFEB3B 100%);
    border-radius: 2px;
  }
  
  @media (max-width: 968px) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const AboutDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ffe082;
  font-weight: bold;
  margin: 0;
  background: linear-gradient(90deg, #fffde7, #FFEB3B 80%, #FFD600 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 380px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const AboutImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 968px) {
    order: -1;
  }
`;

export const AboutImagePlaceholder = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fffde7;
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: 0 20px 40px rgba(255, 215, 64, 0.21);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 215, 64, 0.14);
    backdrop-filter: blur(4px);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 140%;
    height: 140%;
    top: -20%;
    left: -20%;
    background: linear-gradient(
      120deg,
      rgba(255, 230, 80, 0.14),
      transparent,
      rgba(255, 193, 7, 0.14)
    );
    transform: rotate(35deg);
    animation: shimmer 7s infinite linear;
    pointer-events: none;
  }
  
  @keyframes shimmer {
    0% { transform: translateY(-90%) rotate(35deg); }
    100% { transform: translateY(90%) rotate(35deg); }
  }
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  
  @media (max-width: 480px) {
    width: 230px;
    height: 230px;
    font-size: 1rem;
  }

  @media (max-width: 380px) {
    width: 150px;
    height: 150px;
    font-size: 1rem;
  }
`;

const AboutProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  z-index: 1;
  position: relative;
  user-select: none;
  pointer-events: none;
`;


export {
  AboutWrapper as Wrapper,
  AboutContainer as Container,
  AboutContent as Content,
  AboutTitle as Title,
  AboutDescription as Description,
  AboutImage as Image,
  AboutImagePlaceholder as ImagePlaceholder,
  AboutProfileImage as ProfileImage
};

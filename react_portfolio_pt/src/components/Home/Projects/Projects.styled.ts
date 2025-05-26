import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  background: none;
  padding: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 80vh;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: visible;

  @media (max-width: 380px) {
    margin-bottom: 5rem;
  }
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 1.4px;
  text-align: center;
  background: linear-gradient(90deg, #ffd600 14%, #ffc107 68%, #fffbe7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 auto 2.6rem auto;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, #ffd600 25%, #ffc107 82%, #fffbe7 100%);
    margin: 1.1rem auto 0 auto;
    box-shadow: 0 2px 16px #ffd6002a;
  }

  @media (max-width: 700px) {
    font-size: 1.7rem;
    &::after { margin-top: 0.5rem; }
  }
`;

export const SwiperWrapper = styled.div`
  width: 100%;
  padding: 0 36px;
  overflow: visible;
  @media (max-width: 900px) { padding: 0 10px; }
  @media (max-width: 700px) { padding: 0 2px; }

  overflow: visible;

  .swiper {
    width: 100%;
    height: 100%;
    min-height: 370px;
    padding-bottom: 2.3rem;
    overflow: visible;

    @media (max-width: 700px) {
      min-height: 260px;
    }
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: stretch;
    height: 100%;
    min-height: 0;
    overflow: visible;
  }
  .swiper-pagination-bullets {
    bottom: 0 !important;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: #ffd600 !important;
    filter: drop-shadow(0 2px 7px #ffd60088);
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: 700px) {
      scale: 0.7;
    }
  }
  .swiper-pagination-bullet {
    background: #ffd600 !important;
    opacity: 0.55;
    &.swiper-pagination-bullet-active {
      opacity: 1;
      background: #ffc107 !important;
    }
  }
`;


// Card must always fill slide, never overflow, always shrink on mobile
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  max-width: 370px;
  min-width: 0;
  height: 390px;
  background: rgba(22, 20, 18, 0.93);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 18px 0 #ffd60019, 0 2px 18px #ffc10724;
  border: 1px solid #ffd60022;
  backdrop-filter: blur(2px);
  transition: box-shadow 0.27s, border-color 0.22s, transform 0.17s;
  margin: 0 auto;
  cursor: pointer;
  flex: 1 1 auto;

  &:hover {
    box-shadow: 0 0 2px 4px #ffe066cc, 0 0 6px 6px #ffd60077,
    0 4px 16px 0 rgba(0, 0, 0, 0.32), 0 2px 8px 2px #ffe06666 inset;
    border-color: #ffd60088;
    transform: translateY(-8px) scale(1.03);
  }

  @media (max-width: 900px) {
    max-width: 95vw;
    height: 330px;
    border-radius: 13px;
  }
  @media (max-width: 700px) {
    max-width: 99vw;
    height: 355px;
    border-radius: 8px;
  }
`;

// Image always fills top, never overflows
export const Image = styled.div`
  width: 100%;
  height: 44%;
  min-height: 85px;
  max-height: 150px;
  background: linear-gradient(120deg, #ffd600 0%, #ffc107 65%, #fffbe7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #332e16;
  font-size: 1.18rem;
  font-weight: 700;
  position: relative;
  overflow: hidden;
  text-shadow: 0 2px 10px #fffde7cc;
  border-bottom: 1px solid #ffd60018;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0; left: -50%;
    width: 200%; height: 100%;
    background: linear-gradient(90deg, transparent, #fff9e488 42%, transparent 80%);
    transform: skewX(-16deg);
    animation: shine 7s infinite;
    opacity: 0.18;
  }
  @keyframes shine {
    0% { left: -100%; }
    45% { left: 110%; }
    100% { left: 110%; }
  }
  > * { position: relative; z-index: 2; }
`;

export const Content = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.1rem 1.2rem 1rem 1.2rem;
  overflow: hidden;

  @media (max-width: 700px) {
    padding: 0.65rem 0.45rem 0.45rem 0.45rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.08rem;
  font-weight: 700;
  color: #fffbe7;
  margin: 0 0 0.4rem 0;
  background: linear-gradient(90deg, #ffd600 32%, #ffc107 72%, #fffbe7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Description = styled.p`
  color: #ffe082;
  font-size: 0.93rem;
  line-height: 1.45;
  opacity: 0.96;
  margin: 0 0 0.69rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

export const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.33rem 0.5rem;
  margin-bottom: 0.62rem;
`;

export const TechItem = styled.span`
  background: rgba(255, 253, 231, 0.12);
  color: #ffd600;
  padding: 0.13rem 0.52rem;
  border-radius: 5px;
  font-size: 0.81rem;
  font-weight: 600;
  border: 1px solid #ffd60033;
  letter-spacing: 0.04em;
`;

export const Links = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.47rem 1.05rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.92rem;
  letter-spacing: 0.06em;
  transition: all 0.18s;
  cursor: pointer;

  &.primary {
    background: linear-gradient(90deg, #ffd600 42%, #ffc107 100%);
    color: #151305;
    border: none;
    box-shadow: 0 2px 16px #ffd60018;
    &:hover {
      background: linear-gradient(90deg, #fffde7 16%, #ffd600 82%, #ffc107 100%);
      color: #1a1908;
      transform: translateY(-2px) scale(1.04);
      box-shadow: 0 2px 24px #ffd60033;
    }
  }

  &.secondary {
    background: transparent;
    color: #ffd600;
    border: 1.5px solid #ffd60066;
    &:hover {
      background: rgba(255, 253, 231, 0.14);
      color: #fffbe7;
      transform: translateY(-2px) scale(1.04);
      border-color: #ffd600;
    }
  }

  @media (max-width: 480px) {
    padding: 0.38rem 0.79rem;
    font-size: 0.86rem;
    border-radius: 6px;
  }
`;

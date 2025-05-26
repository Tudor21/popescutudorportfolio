import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  padding: 4rem 1.5rem 2rem;
  position: relative;

  @media (max-width: 768px) {
    min-height: unset;
    padding: 2.4rem 0.5rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  color: #fffbe7;
  text-align: center;
  margin-bottom: 2.8rem;
  letter-spacing: 1.6px;
  background: linear-gradient(90deg, #ffd600 12%, #ffc107 60%, #fffbe7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 380px) {
  font-size: 2.5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  gap: 2.2rem 2.1rem;
  width: 100%;
  max-width: 740px;
  position: relative;
  justify-items: center;
  @media (max-width: 600px) {
    gap: 1.2rem 1.1rem;
    max-width: 90vw;
  }

  @media (max-width: 380px) {
    gap: 0.9rem;
    max-width: 90vw;
  }
`;

export const IconButton = styled.button`
  width: 90px;
  height: 90px;
  background: rgba(20, 20, 20, 0.98);
  border: none;
  border-radius: 20px;
  box-shadow: 0 2px 14px #ffd60018, 0 4px 18px 0 #ffe08210;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.42s cubic-bezier(0.67, 0.19, 0.56, 0.86),
    transform 0.21s;
  cursor: pointer;
  position: relative;
  overflow: visible;

  &:hover,
  &:focus {
    box-shadow: 0 0 8px 4px #ffe066cc, 0 0 16px 16px #ffd60077,
      0 4px 16px 0 rgba(0, 0, 0, 0.32), 0 2px 8px 2px #ffe06666 inset;
    outline: none;
    transform: scale(1.1);
    z-index: 2;
  }

  @media (max-width: 900px) {
    width: 72px;
    height: 72px;
    border-radius: 16px;
  }

  @media (max-width: 380px) {
    width: 56px;
    height: 56px;
    border-radius: 12px;
  }
`;

export const Logo = styled.div<{ modal?: boolean }>`
  width: ${({ modal }) => (modal ? "80px" : "80%")};
  height: ${({ modal }) => (modal ? "80px" : "80%")};
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 1px 8px #ffd60055);
    user-drag: none;
    user-select: none;
    pointer-events: none;
  }
  @media (max-width: 500px) {
    width: ${({ modal }) => (modal ? "56px" : "80%")};
    height: ${({ modal }) => (modal ? "56px" : "80%")};
  }
`;

export const ExpandedTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #fffde7;
  letter-spacing: 1px;
  text-align: center;
  margin: 1.2rem 0 0.6rem 0;
  background: linear-gradient(90deg, #ffd600 12%, #ffc107 70%, #fffbe7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const ExpandedDescription = styled.p`
  font-size: 1.14rem;
  color: #ffe082;
  opacity: 0.92;
  margin: 0.25rem 0 1.2rem 0;
  text-align: center;
  background: linear-gradient(90deg, #fffbe7, #ffd600 60%, #ffc107 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  display: flex;
  align-items: end;
  justify-content: center;
  backdrop-filter: blur(6px);
`;

export const ModalPanel = styled.div`
  background: rgba(20, 20, 20, 0.98);
  box-shadow: 0 0 58px 4px #ffe066cc, 0 0 6px 6px #ffd60077,
    0 4px 16px 0 rgba(0, 0, 0, 0.32), 0 2px 8px 2px #ffe06666 inset;
  border-radius: 28px;
  max-width: 98vw;
  width: 50vw;
  max-height: 60vh;
  padding: 2.2rem 1.4rem 1.2rem 1.4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  outline: none;
  scroll-behavior: smooth;
  @media (max-width: 900px) {
    width: 92vw;
    padding: 1.6rem 0.9rem 1rem 0.9rem;
    border-radius: 18px;
  }
  @media (max-width: 500px) {
    width: 80vw;
    max-width: 99vw;
    padding: 2.2rem 1.4rem 1.2rem 1.4rem;
    border-radius: 11px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.7rem;
  right: 1.2rem;
  background: transparent;
  color: #ffd600;
  font-size: 2.3rem;
  border: none;
  cursor: pointer;
  z-index: 12;
  opacity: 0.86;
  transition: color 0.16s, opacity 0.18s;
  &:hover,
  &:focus {
    color: #fffde7;
    opacity: 1;
    outline: none;
  }
`;

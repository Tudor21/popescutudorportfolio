import styled from 'styled-components';

export const LanguageSwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
  }
`;

export const LanguageSwitcherButton = styled.button<{ $isActive: boolean }>`
  background: ${({ $isActive }) =>
    $isActive
      ? 'linear-gradient(90deg, rgba(255, 193, 7, 0.20), rgba(255, 235, 59, 0.14))'
      : 'rgba(0, 0, 0, 0.80)'};
  color: ${({ $isActive }) => ($isActive ? '#FFC107' : '#e2e2e2')};
  border: 1.5px solid ${({ $isActive }) => ($isActive ? 'rgba(255, 193, 7, 0.4)' : 'rgba(255, 193, 7, 0.24)')};
  border-radius: 18px;
  padding: 0.48rem 1.12rem;
  font-size: 0.93rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow:
    0 2px 8px rgba(0,0,0,0.13),
    0 0 0 1px rgba(255, 193, 7, 0.10) inset;
  transition: 
    background 0.21s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.18s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.18s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.19s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.17s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.6px;
  backdrop-filter: blur(8px);

  &:hover, &:focus {
    background: linear-gradient(90deg, rgba(255, 193, 7, 0.27), rgba(255, 235, 59, 0.19));
    color: #FFC107;
    border-color: #FFC107;
    transform: translateY(-1.5px) scale(1.04);
    box-shadow:
      0 4px 18px rgba(255, 193, 7, 0.13),
      0 0 0 1px rgba(255, 193, 7, 0.16) inset;
    box-shadow: 0 0 0 2px #ffd60055;
    outline: none;
    box-shadow: none;
  }

  &:active {
    background: linear-gradient(90deg, rgba(255, 193, 7, 0.34), rgba(255, 235, 59, 0.22));
    color: #FFEB3B;
    transform: translateY(0) scale(1);
    border-color: #FFEB3B;
  }

  @media (max-width: 768px) {
    padding: 0.36rem 0.92rem;
    font-size: 0.78rem;
  }
`;

export { LanguageSwitcherWrapper as Wrapper, LanguageSwitcherButton as Button };

import styled, { css } from "styled-components";
import { BreakPoint } from "../../constants/BreakPoint";

const NavbarWrapper = styled.nav`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 998;
  user-select: none;
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 12px 28px;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 193, 7, 0.3);
  border-radius: 50px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 193, 7, 0.1) inset,
    0 2px 4px rgba(255, 193, 7, 0.15) inset;
  min-width: fit-content;
  white-space: nowrap;

  @media (max-width: ${BreakPoint.Tablet}) {
    gap: 12px;
    padding: 10px 18px;
  }

  @media (max-width: ${BreakPoint.Mobile}) {
    gap: 7px;
    padding: 7px 10px;
    bottom: 20px;
  }
`;

const NavbarButton = styled.button<{ $isActive: boolean }>`
  ${({ $isActive }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 9px 18px;
    background: ${$isActive
      ? "linear-gradient(135deg, rgba(255, 193, 7, 0.2), rgba(255, 235, 59, 0.15))"
      : "transparent"};
    border: none;
    border-radius: 25px;
    color: ${$isActive ? "#FFC107" : "#cccccc"};
    font-size: 1.05rem;
    font-weight: ${$isActive ? "600" : "500"};
    font-family: "Inter", sans-serif;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;

    &:focus {
    outline: none;
    box-shadow: none;
  }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(255, 193, 7, 0.1),
        rgba(255, 235, 59, 0.08)
      );
      border-radius: 25px;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: -1;
    }

    &:hover {
      color: #ffc107;
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(255, 193, 7, 0.4),
        0 0 0 1px rgba(255, 193, 7, 0.2);

      &::before {
        opacity: 1;
      }
    }

    &:active {
      transform: translateY(0);
    }

    @media (max-width: ${BreakPoint.Tablet}) {
      padding: 8px 14px;
      font-size: 1rem;
    }

    @media (max-width: ${BreakPoint.Mobile}) {
      padding: 6px 10px;
      font-size: 0.97rem;
    }
  `}
`;

const ButtonText = styled.span`
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
`;

const ActiveIndicator = styled.div<{ $isActive: boolean }>`
  ${({ $isActive }) => css`
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: ${$isActive ? "80%" : "0%"};
    height: 2px;
    background: linear-gradient(90deg, #ffc107, #ffeb3b);
    border-radius: 1px;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: ${$isActive ? 1 : 0};
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  `}
`;

const FabButton = styled.button<{ $open: boolean }>`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 60% 40%,
    #fff500 48%,
    #ffd600 78%,
    #ffaa00 100%
  );
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  overflow: visible;
  animation: fab-scale-glow 3.4s ease-in-out infinite alternate;

  /* Tighter, smaller glow area */
  box-shadow: 0 0 28px 4px #ffe066cc, 0 0 56px 16px #ffd60077,
    0 4px 16px 0 rgba(0, 0, 0, 0.32), 0 2px 8px 2px #ffe06666 inset;

  filter: blur(0px);

  /* Small glowing animated halo using :before */
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    pointer-events: none;
    background: radial-gradient(
      circle,
      rgba(255, 223, 77, 0.29) 0%,
      rgba(255, 193, 7, 0.11) 65%,
      rgba(255, 221, 51, 0.04) 90%,
      rgba(255, 221, 51, 0) 100%
    );

    &:focus {
    outline: none;
    box-shadow: none;
  }
  
    z-index: 0;
    filter: blur(6px);
    opacity: 0.75;
    animation: fab-orb-halo 2.2s ease-in-out infinite alternate;
    transition: opacity 0.4s, filter 0.4s;
  }

  /* Glassy reflection shimmer */
  &::after {
    content: "";
    position: absolute;
    top: 14px;
    left: 18px;
    width: 30px;
    height: 10px;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.13),
      rgba(255, 255, 255, 0)
    );
    border-radius: 8px;
    filter: blur(1.5px);
    opacity: 0.54;
    z-index: 2;
    pointer-events: none;
    animation: fab-reflection-move 3.6s infinite alternate;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 0 10px #ffe06655, 0 8px 20px 0 #ffd60077,
      0 12px 30px 0 #ffb30033, 0 10px 24px 0 rgba(0, 0, 0, 0.31),
      0 2px 12px 3px #ffe06699 inset;
    filter: blur(0.7px);
    &::before {
      filter: blur(10px);
      opacity: 0.93;
    }
    &::after {
      opacity: 0.85;
    }
  }

  &:active {
    background: radial-gradient(
      circle at 58% 42%,
      #fffde7 55%,
      #ffd600 70%,
      #ffb300 100%
    );
    box-shadow: 0 0 0 14px #ffd60044, 0 10px 26px 0 #ffd60055,
      0 18px 40px 0 #ffb30033, 0 12px 28px 0 rgba(0, 0, 0, 0.28),
      0 3px 18px 4px #ffe066bb inset;
    filter: blur(1.3px);
    &::before {
      filter: blur(12px);
      opacity: 1;
    }
  }

  @keyframes fab-scale-glow {
    0% {
      transform: translateX(-50%) scale(1);
      box-shadow: 0 0 15px 4px #ffe066cc, 0 0 6px 6px #ffd60077,
        0 4px 16px 0 rgba(0, 0, 0, 0.32), 0 2px 8px 2px #ffe06666 inset;
      filter: blur(0px);
    }
    100% {
      transform: translateX(-50%) scale(1.07);
      box-shadow: 0 0 24px 8px #fffde7aa, 0 0 56px 26px #ffd600bb,
        0 8px 24px 0 rgba(0, 0, 0, 0.35), 0 4px 16px 4px #fffde7aa inset;
      filter: blur(0.5px);
    }
  }

  @keyframes fab-orb-halo {
    0% {
      filter: blur(6px);
      opacity: 0.7;
    }
    100% {
      filter: blur(12px);
      opacity: 0.92;
    }
  }

  @keyframes fab-reflection-move {
    0% {
      left: 18px;
      top: 14px;
      opacity: 0.54;
    }
    100% {
      left: 22px;
      top: 18px;
      opacity: 0.82;
    }
  }
`;

const MobileMenuOverlay = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "block" : "none")};
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(10, 10, 10, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  position: fixed;
  bottom: ${({ $open }) => ($open ? "25vh" : "-100%")};
  left: 50%;
  transform: translateX(-50%);
  width: 92vw;
  max-width: 340px;
  padding: 22px 0 12px 0;
  background: rgba(0, 0, 0, 0.92);
  border-radius: 24px;
  border: 1px solid rgba(255, 193, 7, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 193, 7, 0.1) inset,
    0 2px 4px rgba(255, 193, 7, 0.15) inset;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: bottom 0.36s cubic-bezier(0.83, -0.12, 0.38, 1.06),
    opacity 0.22s cubic-bezier(0.83, -0.12, 0.38, 1.06);
  z-index: 101;
  @media (min-width: ${BreakPoint.Tablet}) {
    display: none;
  }
`;

const MobileNavButton = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${({ $isActive }) =>
    $isActive
      ? "linear-gradient(90deg, rgba(255, 193, 7, 0.23), rgba(255, 235, 59, 0.13))"
      : "transparent"};
  color: ${({ $isActive }) => ($isActive ? "#FFC107" : "#f5f5f5")};
  font-size: 1.07rem;
  font-weight: 600;
  padding: 13px 24px;
  border: none;
  border-radius: 12px;
  margin: 3px 12px;
  cursor: pointer;
  transition: background 0.17s, color 0.17s, transform 0.18s;
  position: relative;

  &:hover,
  &:focus {
    color: #ffc107;
    background: linear-gradient(
      90deg,
      rgba(255, 193, 7, 0.34),
      rgba(255, 235, 59, 0.17)
    );
    transform: translateY(-1.5px) scale(1.02);
  }
`;

export {
  NavbarWrapper as Wrapper,
  NavbarContainer as Container,
  NavbarButton as NavButton,
  ButtonText,
  ActiveIndicator,
  FabButton,
  MobileMenuOverlay,
  MobileMenu,
  MobileNavButton,
};

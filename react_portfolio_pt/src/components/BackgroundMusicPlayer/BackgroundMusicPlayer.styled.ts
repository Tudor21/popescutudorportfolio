import styled, { keyframes, css } from "styled-components";

const barPulse = keyframes`
  0% { height: 45%; }
  16% { height: 100%; }
  40% { height: 50%; }
  56% { height: 90%; }
  80% { height: 35%; }
  100% { height: 45%; }
`;

const dotBounce = keyframes`
  0%, 100% { transform: scaleY(1); }
  35% { transform: scaleY(0.72);}
  70% { transform: scaleY(1.13);}
`;

const AudioButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: 48px;
  height: 48px;
  position: fixed;
  bottom: 30px;
  right: 40px;
  z-index: 999;
  transition: filter 0.25s;
  outline: none;

  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
    &::before {
      width: 52px;
      height: 52px;
    }
  }
`;

const Waves = styled.div<{ $isPlaying: boolean }>`
  display: flex;
  align-items: flex-end;
  height: 68%;
  width: 68%;
  gap: 3px;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const WaveBar = styled.div<{ $isPlaying: boolean; $delay: number }>`
  width: 6px;
  margin: 0 2px;
  background: linear-gradient(120deg, #FFD600 65%, #FFC107 100%, #fffde7 100%);
  border-radius: 7px;
  box-shadow: 0 0 7px 2px #2B2A2A44;
  transition:
    height 0.9s cubic-bezier(.66,.07,.76,1.05),
    border-radius 0.23s cubic-bezier(.66,.07,.76,1.05),
    box-shadow 0.21s cubic-bezier(.66,.07,.76,1.05),
    background 0.19s cubic-bezier(.66,.07,.76,1.05);

  ${({ $isPlaying, $delay }) =>
    $isPlaying
      ? css`
          height: 84%;
          animation: ${barPulse} 4.22s cubic-bezier(.65,.09,.31,1.03) infinite;
          animation-delay: ${$delay * 0.18}s;
          border-radius: 7px;
          box-shadow: 0 0 3px 1.5px #FFD600;
        `
      : css`
          height: 16%;
          animation: ${dotBounce} 1.08s cubic-bezier(.41,.12,.65,1.12) infinite;
          animation-delay: ${$delay * 0.14}s;
          border-radius: 50%;
          box-shadow: 0 0 3px 1.5px #FFD600;
        `}
`;

export { AudioButton, Waves, WaveBar };

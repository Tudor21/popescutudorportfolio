import styled from "styled-components";

const LayoutWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* No scrolling - desktop app behavior */
  background: #0a0a1a;
  z-index: 0;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  transform: translate(-50%, -50%);
  pointer-events: none;
  object-fit: cover;
  opacity: 0.5;
  z-index: -1;
  user-select: none;
  
  /* Ensure video doesn't interfere with interactions */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

const VideoSource = styled.source``;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Section = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  pointer-events: auto;
  

  opacity: 1;
  transform: translateX(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &.hidden {
    opacity: 0;
    transform: translateX(100%);
    pointer-events: none;
  }
  
  &.slide-left {
    transform: translateX(-100%);
    opacity: 0;
    pointer-events: none;
  }
`;

export { 
  LayoutWrapper as Wrapper,
  VideoBackground,
  VideoSource,
  ContentContainer,
  Section
};
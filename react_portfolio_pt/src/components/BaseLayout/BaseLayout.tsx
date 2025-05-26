import React, { useEffect, useRef } from "react";
import * as S from "./BaseLayout.styled";

import BlobVideo from "./assets/amazingBlob.mp4";

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slightly slower for more elegant feel
    }
  }, []);

  return (
    <S.Wrapper ref={layoutRef}>
      <S.VideoBackground autoPlay loop muted playsInline ref={videoRef}>
        <S.VideoSource src={BlobVideo} type="video/mp4"/>
      </S.VideoBackground>
      <S.ContentContainer>
        {children}
      </S.ContentContainer>
    </S.Wrapper>
  );
};

export default BaseLayout;
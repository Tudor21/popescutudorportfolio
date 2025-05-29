import React, { useEffect, useRef, useState } from "react";
import * as S from "./Loading.styled";
import gsap from "gsap";

type LoadingProps = {
  show: boolean;
  onExited?: () => void;
};

const Loading: React.FC<LoadingProps> = ({ show, onExited }) => {
  const barsRef = useRef<Array<HTMLDivElement | null>>([]);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(show);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  // Initialize bars animation when component mounts or becomes visible
  useEffect(() => {
    if (show && barsRef.current.length) {
      // Kill any existing animation
      if (animationRef.current) {
        animationRef.current.kill();
      }

      // Create new animation
      animationRef.current = gsap.timeline({ repeat: -1 });
      animationRef.current.fromTo(
        barsRef.current,
        { scaleY: 0.3 },
        {
          scaleY: 1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: { each: 0.13, yoyo: true, repeat: -1 },
          duration: 0.8,
        }
      );
    }
  }, [show]);

  // Handle exit animation
  useEffect(() => {
    if (!show && isVisible) {
      // Kill the bars animation
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }

      // Animate exit
      if (wrapperRef.current) {
        gsap.to(wrapperRef.current, {
          y: "-100%",
          duration: 0.85,
          ease: "power3.in",
          onComplete: () => {
            setIsVisible(false);
            onExited?.();
          },
        });
      } else {
        // Fallback if ref is not available
        setIsVisible(false);
        onExited?.();
      }
    } else if (show && !isVisible) {
      // Reset position and make visible when showing again
      setIsVisible(true);
      if (wrapperRef.current) {
        gsap.set(wrapperRef.current, { y: "0%" });
      }
    }
  }, [show, isVisible, onExited]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.BarWrapper>
        {Array.from({ length: 5 }).map((_, i) => (
          <S.Bar key={i} ref={el => { barsRef.current[i] = el; }} />
        ))}
      </S.BarWrapper>
      <S.Text>Loading portfolio…</S.Text>
    </S.Wrapper>
  );
};

export default Loading;
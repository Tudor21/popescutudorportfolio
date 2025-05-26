import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import * as S from "./BackgroundMusicPlayer.styled";

interface BackgroundMusicPlayerProps {
  volume: number;
  isPlaying: boolean;
  togglePlayPause: () => void;
}

export interface BackgroundMusicPlayerHandle {
  play: () => void;
  pause: () => void;
}

const NUM_BARS = 5;

const BackgroundMusicPlayer = forwardRef<
  BackgroundMusicPlayerHandle,
  BackgroundMusicPlayerProps
>(({ volume, isPlaying, togglePlayPause }, ref) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useImperativeHandle(ref, () => ({
    play() {
      if (audioRef.current) {
        audioRef.current.play().catch(console.error);
      }
    },
    pause() {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    },
  }));

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} loop>
        <source
          src="/audio/space-cosmic-interstellar-ambient-sci-fi-universe-179624.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
      <S.AudioButton onClick={togglePlayPause} aria-label={isPlaying ? "Mute" : "Unmute"}>
        <S.Waves $isPlaying={isPlaying}>
          {Array.from({ length: NUM_BARS }).map((_, i) => (
            <S.WaveBar key={i} $isPlaying={isPlaying} $delay={i} />
          ))}
        </S.Waves>
      </S.AudioButton>
    </>
  );
});

export default BackgroundMusicPlayer;

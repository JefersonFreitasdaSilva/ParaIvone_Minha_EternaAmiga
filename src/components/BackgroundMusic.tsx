import { useEffect, useRef } from "react";

interface BackgroundMusicProps {
  src?: string;
}

export const BackgroundMusic = ({ src = "/music.mp3" }: BackgroundMusicProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Setar volume inicial em 50%
    audio.volume = 0.5;

    // Tocar automaticamente
    audio.autoplay = true;
    audio.loop = true;

    // Bloquear pause
    const handlePause = () => {
      audio.play();
    };

    // Bloquear volume zerado
    const handleVolumeChange = () => {
      if (audio.volume === 0) {
        audio.volume = 0.5;
      }
    };

    audio.addEventListener("pause", handlePause);
    audio.addEventListener("volumechange", handleVolumeChange);

    // Tentar tocar (alguns navegadores precisam de interação)
    audio.play().catch((error) => {
      console.log("Autoplay bloqueado pelo navegador:", error);
    });

    return () => {
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("volumechange", handleVolumeChange);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      autoPlay
      loop
      style={{ display: "none" }}
      controlsList="nodownload"
      onContextMenu={(e) => e.preventDefault()}
    >
      <source src={src} type="audio/mpeg" />
    </audio>
  );
};

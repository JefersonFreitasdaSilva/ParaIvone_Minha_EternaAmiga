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
    audio.loop = true;

    // Bloquear pause
    const handlePause = () => {
      audio.play().catch(() => {
        // Silenciosamente falha se não conseguir tocar
      });
    };

    // Bloquear volume zerado
    const handleVolumeChange = () => {
      if (audio.volume === 0) {
        audio.volume = 0.5;
      }
    };

    audio.addEventListener("pause", handlePause);
    audio.addEventListener("volumechange", handleVolumeChange);

    // Tentar tocar com suporte a navegadores mais restritivos
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("Música tocando");
        })
        .catch((error) => {
          console.log("Autoplay bloqueado pelo navegador - é necessário click do usuário:", error);
        });
    }

    return () => {
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("volumechange", handleVolumeChange);
    };
  }, [src]);

  return (
    <audio
      ref={audioRef}
      src={src}
      loop
      style={{ display: "none" }}
      controlsList="nodownload"
      onContextMenu={(e) => e.preventDefault()}
    >
      <source src={src} type="audio/mpeg" />
    </audio>
  );
};

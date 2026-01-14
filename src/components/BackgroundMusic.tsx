import { useEffect, useRef } from "react";

interface BackgroundMusicProps {
  src?: string;
}

export const BackgroundMusic = ({ src = "/music.mp3" }: BackgroundMusicProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;
    audio.loop = true;

    // Bloquear pause
    const handlePause = (e: Event) => {
      e.preventDefault();
      audio.play().catch(() => {});
    };

    // Bloquear volume zerado
    const handleVolumeChange = () => {
      if (audio.volume === 0) {
        audio.volume = 0.5;
      }
    };

    audio.addEventListener("pause", handlePause);
    audio.addEventListener("volumechange", handleVolumeChange);

    // Fazer autoplay funcionar
    const playAudio = () => {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("✅ Música tocando!");
          })
          .catch(() => {
            console.log("Tentando iniciar com interação do usuário...");
            document.addEventListener("click", attemptPlay, { once: true });
            document.addEventListener("touchstart", attemptPlay, { once: true });
          });
      }
    };

    const attemptPlay = () => {
      audio.play().catch(() => {});
    };

    // Tentar tocar assim que carregar
    if (audio.readyState >= 2) {
      playAudio();
    } else {
      audio.addEventListener("canplay", playAudio, { once: true });
    }

    return () => {
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("volumechange", handleVolumeChange);
      audio.removeEventListener("canplay", playAudio);
      document.removeEventListener("click", attemptPlay);
      document.removeEventListener("touchstart", attemptPlay);
    };
  }, [src]);

  return (
    <audio
      ref={audioRef}
      src={src}
      loop
      autoPlay
      preload="auto"
      style={{ display: "none" }}
      crossOrigin="anonymous"
    >
      <source src={src} type="audio/mpeg" />
    </audio>
  );
};

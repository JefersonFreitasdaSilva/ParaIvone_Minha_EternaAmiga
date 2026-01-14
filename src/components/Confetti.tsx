import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MagicParticle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  rotation: number;
}

const colors = [
  "hsl(280, 100%, 65%)",
  "hsl(320, 100%, 60%)",
  "hsl(180, 100%, 50%)",
  "hsl(220, 100%, 60%)",
  "hsl(280, 100%, 80%)",
];

export const Confetti = () => {
  const [particles, setParticles] = useState<MagicParticle[]>([]);

  useEffect(() => {
    const pieces: MagicParticle[] = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 4 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 2 + Math.random() * 6,
      rotation: Math.random() * 360,
    }));
    setParticles(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size}px ${particle.color}`,
            opacity: 0.7,
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: "100vh",
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

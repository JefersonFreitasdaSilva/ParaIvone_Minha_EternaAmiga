import { motion } from "framer-motion";
import { Sparkles, Star, Zap, Moon } from "lucide-react";
import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  x: number;
  delay: number;
  duration: number;
  scale: number;
  type: "sparkle" | "star" | "zap" | "moon";
  color: string;
}

const colors = [
  "text-neon-purple",
  "text-neon-pink",
  "text-neon-cyan",
  "text-neon-blue",
];

export const FloatingHearts = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const items: FloatingElement[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 8,
      scale: 0.4 + Math.random() * 0.6,
      type: ["sparkle", "star", "zap", "moon"][Math.floor(Math.random() * 4)] as FloatingElement["type"],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setElements(items);
  }, []);

  const renderIcon = (type: FloatingElement["type"]) => {
    switch (type) {
      case "sparkle":
        return <Sparkles className="fill-current drop-shadow-[0_0_3px_currentColor]" />;
      case "star":
        return <Star className="fill-current drop-shadow-[0_0_3px_currentColor]" />;
      case "zap":
        return <Zap className="fill-current drop-shadow-[0_0_3px_currentColor]" />;
      case "moon":
        return <Moon className="fill-current drop-shadow-[0_0_3px_currentColor]" />;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.color} opacity-40`}
          style={{
            left: `${element.x}%`,
            bottom: -50,
            scale: element.scale,
          }}
          animate={{
            y: [0, "-120vh"],
            x: [0, Math.sin(element.id) * 80],
            rotate: [0, 360],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {renderIcon(element.type)}
        </motion.div>
      ))}
    </div>
  );
};

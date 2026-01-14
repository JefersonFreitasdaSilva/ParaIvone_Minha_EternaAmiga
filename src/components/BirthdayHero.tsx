import { motion } from "framer-motion";
import { Sparkles, Zap, Moon } from "lucide-react";

export const BirthdayHero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
      {/* Magic circle background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-neon-purple/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-neon-pink/15"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-neon-cyan/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 md:left-20 text-neon-purple/70"
        animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Zap size={40} className="drop-shadow-[0_0_6px_hsl(280,100%,65%/0.5)]" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-10 md:right-20 text-neon-pink/70"
        animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      >
        <Moon size={36} className="drop-shadow-[0_0_6px_hsl(320,100%,60%/0.5)]" />
      </motion.div>

      {/* Main content */}
      <motion.div
        className="text-center z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          <Sparkles className="text-neon-cyan/80 w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_4px_hsl(180,100%,50%/0.4)]" />
          <Moon className="text-neon-purple/80 w-10 h-10 md:w-14 md:h-14 drop-shadow-[0_0_6px_hsl(280,100%,65%/0.4)]" />
          <Sparkles className="text-neon-cyan/80 w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_4px_hsl(180,100%,50%/0.4)]" />
        </motion.div>

        <motion.p
          className="text-neon-cyan font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-4 neon-glow-cyan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Para minha melhor amiga
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", delay: 0.6 }}
        >
          <span className="text-foreground">Feliz </span>
          <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent neon-glow">
            Aniversário
          </span>
        </motion.h1>

        <motion.div
          className="flex items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 1, delay: i * 0.15, repeat: Infinity, repeatDelay: 1.5 }}
            >
              <Star 
                className={`w-5 h-5 md:w-6 md:h-6 fill-current ${
                  i % 2 === 0 ? 'text-neon-purple/70' : 'text-neon-pink/70'
                } drop-shadow-[0_0_4px_currentColor]`} 
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          Que esse dia seja tão <span className="text-neon-pink">mágico</span> quanto você é para mim! ✨
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-neon-purple/50 flex items-start justify-center p-2 magic-border">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-neon-purple"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ boxShadow: "0 0 8px hsl(280, 100%, 65%)" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

const Star = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
  </svg>
);

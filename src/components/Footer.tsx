import { motion } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 relative">
      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex items-center justify-center gap-3 mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Zap className="w-6 h-6 text-neon-cyan drop-shadow-[0_0_10px_hsl(180,100%,50%)]" />
          <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent">
            Te amo, Ivone!
          </span>
          <Sparkles className="w-6 h-6 text-neon-purple drop-shadow-[0_0_10px_hsl(280,100%,65%)]" />
        </motion.div>

        <p className="text-muted-foreground">
          Feito com muita <span className="text-neon-pink">energia</span> para você 🔥
        </p>
      </motion.div>
    </footer>
  );
};

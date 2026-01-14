import { motion } from "framer-motion";
import { Flame, Zap, Moon, Star, Sparkles, Skull } from "lucide-react";

const wishes = [
  { icon: Flame, text: "Paixão intensa", color: "text-neon-pink" },
  { icon: Zap, text: "Energia infinita", color: "text-neon-cyan" },
  { icon: Moon, text: "Noites mágicas", color: "text-neon-purple" },
  { icon: Star, text: "Brilho próprio", color: "text-neon-pink" },
  { icon: Sparkles, text: "Momentos épicos", color: "text-neon-cyan" },
  { icon: Skull, text: "Tabaco (os 2 tipos kkkk)", color: "text-neon-purple" },
];

export const WishesSection = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Meus desejos para você
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Que este novo ano traga...
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.text}
              className="bg-card rounded-2xl p-6 magic-border hover:scale-105 transition-transform cursor-default group"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className={`${wish.color} mb-4`}
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
              >
                <wish.icon className="w-8 h-8 mx-auto drop-shadow-[0_0_12px_currentColor] group-hover:drop-shadow-[0_0_20px_currentColor] transition-all" />
              </motion.div>
              <p className="text-center font-medium text-foreground">{wish.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

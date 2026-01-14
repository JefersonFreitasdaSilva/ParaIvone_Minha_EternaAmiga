import { motion } from "framer-motion";
import { Sparkles, Moon, Zap } from "lucide-react";

export const MessageSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="bg-card rounded-3xl p-8 md:p-12 relative overflow-hidden magic-border"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative background glows */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-neon-purple/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-neon-pink/20 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-neon-cyan/5 to-transparent rounded-full blur-3xl" />

          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <div className="bg-dark-elevated rounded-full p-4 magic-border">
              <Moon className="w-8 h-8 text-neon-purple drop-shadow-[0_0_10px_hsl(280,100%,65%)]" />
            </div>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-center mb-8 bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Uma mensagem especial para você
          </motion.h2>

          <motion.div
            className="space-y-6 text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Hoje é o seu dia, e eu não poderia deixar de te dizer o quanto você é
              <span className="text-neon-pink font-semibold neon-glow-pink"> importante </span>
              na minha vida.
            </p>

            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Você é aquela pessoa que esteve lá quando eu mais precisei, que apesar dos tempos de baixa,
              só de pelo menos estar presente ja fez tudo ficar
              <span className="text-neon-cyan font-semibold neon-glow-cyan"> especial</span>.
            </p>

            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              Que esse novo ano da sua vida seja repleto de
              <span className="text-neon-purple font-semibold"> magia</span>,
              <span className="text-neon-pink font-semibold"> energia</span>,
              <span className="text-neon-cyan font-semibold"> conquistas </span>
              e muitos momentos épicos!
            </p>

            <motion.div
              className="flex items-center justify-center gap-3 pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Zap className="w-5 h-5 text-neon-cyan drop-shadow-[0_0_8px_hsl(180,100%,50%)]" />
              <span className="text-muted-foreground italic">
                Com toda a minha energia e carinho
              </span>
              <Sparkles className="w-5 h-5 text-neon-purple drop-shadow-[0_0_8px_hsl(280,100%,65%)]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

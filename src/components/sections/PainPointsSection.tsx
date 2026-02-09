import { motion } from "framer-motion";
import { UserX, Brain, MapPin } from "lucide-react";

const painPoints = [
  {
    icon: UserX,
    title: "Você se sente invisível nos processos seletivos",
    description:
      "Mesmo com certificação ANBIMA e dedicação, seu currículo não avança e você não entende o que está faltando.",
    accent: "from-indigo-500/20 to-transparent",
    iconBg: "bg-primary",
  },
  {
    icon: Brain,
    title: "A insegurança aparece na hora decisiva",
    description:
      "Entrevistas, dinâmicas e conversas com gestores geram nervosismo e travam o seu desempenho.",
    accent: "from-indigo-500/20 to-transparent",
    iconBg: "bg-primary",
  },
  {
    icon: MapPin,
    title: "Você não tem clareza sobre o próximo passo",
    description:
      "Dúvidas sobre qual área seguir, como se posicionar e o que realmente leva à entrada ou crescimento no banco.",
    accent: "from-indigo-500/20 to-transparent",
    iconBg: "bg-primary",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const PainPointsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em]">
            Evolução travada
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Você se sente assim?
          </h2>

          <div className="w-12 h-0.5 bg-accent mx-auto mt-4"></div>
          <p className="mt-2 text-muted-foreground text-lg max-w-2xl mx-auto">
          Talento sem direção e estratégia não avança no mercado financeiro.
          </p>


        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="
                relative bg-card rounded-2xl p-6 md:p-8
                border border-border
                shadow-card hover:shadow-elevated
                transition-all duration-300
                overflow-hidden
              "
            >
              {/* Accent gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.accent} pointer-events-none`}
              />

              {/* Title row */}
              <div className="relative z-10 flex items-start gap-4 mb-4">
                <div
                  className={`
                    w-10 h-10 md:w-12 md:h-12
                    rounded-xl ${item.iconBg}
                    flex items-center justify-center
                    flex-shrink-0 shadow-md
                  `}
                >
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>

                <h3 className="font-roboto text-lg md:text-xl font-semibold text-foreground leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="relative z-10 text-muted-foreground leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default PainPointsSection;

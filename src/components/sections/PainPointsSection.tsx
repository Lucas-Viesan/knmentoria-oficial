import { motion } from "framer-motion";
import { UserX, Brain, MapPin } from "lucide-react";

const painPoints = [
  {
    icon: UserX,
    title: "Invisibilidade",
    description: "Sente que seu currículo nunca é selecionado, mesmo tendo as competências certas.",
    accentColor: "border-l-destructive",
     iconColor: "#f87171" 
  },
  {
    icon: Brain,
    title: "Insegurança em Entrevistas",
    description: "O nervosismo trava seu desempenho diante de gestores de grandes bancos.",
    accentColor: "border-l-accent",
     iconColor: "#C89A51",
  },
  {
    icon: MapPin,
    title: "Falta de Direcionamento",
    description: "Não sabe qual área do mercado financeiro combina com seu perfil e ambições.",
    accentColor: "border-l-[#4f46e5]",
     iconColor: "#4f46e5" 
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const PainPointsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Você se sente assim?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Obstáculos que impedem seu crescimento no mercado.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border border-l-4 ${item.accentColor} hover:shadow-elevated transition-all duration-300 group`}
            >
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 md:w-8 md:h-8"  style={{ color: item.iconColor }} />
              </div>
              <h3 className="font-roboto text-lg md:text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
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

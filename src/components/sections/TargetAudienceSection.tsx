import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const audiences = [
  {
    title: "Pessoas que desejam entrar no banco",
    description: "Com certificação ANBIMA e o sonho de conquistar a primeira oportunidade no mercado financeiro."
  },
  {
    title: "Pesssoas em transição de carreira",
    description: "Profissionais que decidiram migrar para o setor bancário e buscam direcionamento claro e estratégico."
  },
  {
    title: "Pessoas que já atuam no mercado financeiro",
    description: "Bancários que desejam crescer, se posicionar melhor e alcançar novos patamares na carreira."
  }
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

const TargetAudienceSection = () => {
  return (
    <section className="py-16 md:py-24 bg-navy">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em]">Público Alvo</span>
          <h2 className="font-display text-white text-3xl md:text-4xl font-bold text-foreground mb-4">
            Para quem é a <span className="text-white">mentoria</span>?
          </h2>  
          <div className="w-12 h-0.5 bg-accent mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex gap-4 md:gap-6 pb-8 last:pb-0"
            >
              {/* Timeline line */}
              {index < audiences.length - 1 && (
                <div className="absolute left-5 md:left-6 top-12 w-0.5 h-full bg-accent" />
              )}

              {/* Check icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="font-roboto text-xl md:text-2xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;

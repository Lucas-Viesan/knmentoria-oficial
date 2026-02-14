import { motion } from "framer-motion";
import { Search, Sparkles, Target, HeartHandshake, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Diagnóstico e Posicionamento",
    description: "Mapeamento profundo das suas competências e lacunas para o mercado.",
    activities: [
      "Reestruturação do currículo",
      "Reestruturação do LinkedIn",
      "Alinhamento de perfil ao cargo"
    ]
  },
  {
    number: 2,
    icon: Sparkles,
    title: "Preparação Estratégica",
    description: "LinkedIn e currículo otimizados para atrair os maiores players.",
    activities: [
      "Mentoria individual (1h30)",
      "Plano de ação focado em entrevista",
      "Estudo do cargo, produtos e serviços bancários"
    ]
  },
  {
    number: 3,
    icon: Target,
    title: "Prática + Vivência Real",
    description: "Treinamento real de entrevistas e resolução de cases técnicos.",
    activities: [
      "Simulações reais de entrevista",
      "Networking via WhatsApp",
      "Contato com profissionais do cargo desejado"
    ]
  },
  {
    number: 4,
    icon: HeartHandshake,
    title: "Acompanhamento até a aprovação",
    description: "Suporte na negociação salarial e durante os primeiros 30 dias.",
    activities: [
      "Até 120 dias de acompanhamento",
      "Flexibilidade de horários",
      "Suporte de Psicóloga pré-entrevista"
    ]
  }
];

const differentials = [
  "Conversa 1:1 com profissional do cargo desejado",
  "Preparação emocional para entrevistas decisivas",
  "Rede ativa de alunos e profissionais do mercado",
  "Acompanhamento real até a contratação"
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

const MethodologySection = () => {
  return (
    <section id="metodo" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          
          <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em]">A Jornada Guiada</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como funciona a mentoria
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex gap-4 md:gap-6"
              >
                {/* Number and line */}
                <div className="relative flex flex-col items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent text-primary-foreground flex items-center justify-center font-bold text-lg md:text-xl z-10 shadow-lg">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-accent mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-2xl p-5 md:p-6 shadow-card border border-border mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-roboto text-lg md:text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  
                  {/* Activities */}
                  <ul className="space-y-2">
                    {step.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-baseline gap-2 text-sm text-foreground">
                        <span className="material-symbols-outlined material-filled text-accent text-sm mt-0.5">check_circle</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Differentials Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-navy rounded-3xl p-6 md:p-8 sticky top-24 shadow-elevated">
              <h3 className="font-display text-center text-xl md:text-2xl font-bold text-white mb-6">
                Diferenciais da <span className="text-accent">mentoria</span>
              </h3>
              
              <ul className="space-y-4">
                {differentials.map((item, index) => (
                  <li key={index} className="flex items-baseline gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-white/90 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-center">
                  <p className="text-white/60 text-sm mb-2">Resultado médio</p>
                  <p className="text-3xl md:text-4xl font-bold text-accent">3 meses</p>
                  <p className="text-white/60 text-sm mt-1">até a aprovação</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;

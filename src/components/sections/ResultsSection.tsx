import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeCheck, Trophy } from "lucide-react";

import caseSuccess from "@assets/images/case.jpg";
import caseSuccess2 from "@assets/images/case2.jpg";
import caseSuccess3 from "@assets/images/case3.jpg";
import caseSuccess4 from "@assets/images/case4.jpg";
import caseSuccess5 from "@assets/images/case5.jpg";

const results = [
  {
    image: caseSuccess2,
    name: "Lucas S.",
    role: "BTG Pactual",
  },
  {
    image: caseSuccess,
    name: "Beatriz M.",
    role: "Itaú Private",
  },
  {
    image: caseSuccess5,
    name: "Ricardo F.",
    role: "XP Inc.",
  },
  {
    image: caseSuccess3,
    name: "Juliana C.",
    role: "Bradesco",
  },
  {
    image: caseSuccess4,
    name: "André P.",
    role: "Santander",
  },
  { image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop", 
    name: "Lucas S.", 
    role: "BTG Pactual" 
  },
  { image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop", 
    name: "Beatriz M.", 
    role: "Itaú Private" 
  },
  { image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", 
    name: "Ricardo F.", 
    role: "XP Inc." 
  },
  { image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop", 
    name: "Juliana C.", 
    role: "Bradesco" 
  },
  { image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop", 
    name: "André P.", 
    role: "Santander" 
  },
  { image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", 
    name: "Camila R.", 
    role: "Nubank" 
  },
  { image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", 
    name: "Felipe T.", 
    role: "Modal" 
  },
  { image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", 
    name: "Marina L.", 
    role: "Credit Suisse" 
  },
  { image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", 
    name: "Diego N.", 
    role: "Safra" 
  },
  { image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", 
    name: "Isabela K.", 
    role: "JP Morgan" 
  },
  { image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", 
    name: "Thiago M.", 
    role: "Goldman Sachs" 
  },
  { image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop", 
    name: "Fernanda A.", 
    role: "Votorantim" 
  },
  { image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop", 
    name: "Gustavo H.", 
    role: "Banco do Brasil" 
  },
  { image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop", 
    name: "Patrícia V.", 
    role: "Citi" 
  },
  { image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop", 
    name: "Marcos D.", 
    role: "UBS" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const ResultsSection = () => {
  const [baseIndex, setBaseIndex] = useState(0);
  const CARDS_COUNT = 5;


  // controla o tempo da troca
  useEffect(() => {
    const interval = setInterval(() => {
      setBaseIndex((prev) => prev + CARDS_COUNT);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // resolve qual imagem cada card deve usar
 const getItemForCard = (cardIndex: number) => {
  return results[(baseIndex + cardIndex) % results.length];
};


  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-[10px] font-bold uppercase tracking-[0.2em]">
            Casos de Sucesso
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resultados <span className="text-primary">reais</span>
          </h2>
          <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-2">
            Conheça alguns dos profissionais que transformaram suas carreiras.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
        >
          {Array.from({ length: CARDS_COUNT }).map((_, index) => {
          const item = getItemForCard(index);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={item.image}
                      src={item.image}
                      alt={item.name}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badge */}
                  <div className="absolute top-2 right-2">
                    <BadgeCheck className="w-5 h-5 text-primary fill-primary-foreground" />
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-sm">
                      {item.name}
                    </p>
                    <p className="text-white/70 text-xs">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Card especial */}
          <motion.div
            variants={itemVariants}
            className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center p-4 shadow-elevated"
          >
            <div className="text-center">
              <Trophy className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground">
                +200
              </p>
              <p className="text-primary-foreground/80 text-xs md:text-sm mt-1">
                carreiras
                <br />
                transformadas
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;

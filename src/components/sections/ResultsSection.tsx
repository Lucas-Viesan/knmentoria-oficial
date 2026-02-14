import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeCheck } from "lucide-react";

import caseSuccess from "@assets/images/case.jpg";
import caseSuccess2 from "@assets/images/case2.jpg";
import caseSuccess3 from "@assets/images/case3.jpg";
import caseSuccess4 from "@assets/images/case4.jpg";
import caseSuccess5 from "@assets/images/case5.jpg";
import caseSuccess6 from "@assets/images/case6.jpg";
import caseSuccess7 from "@assets/images/case7.jpg";
import caseSuccess8 from "@assets/images/case8.jpg";
import caseSuccess9 from "@assets/images/case9.jpg";
import caseSuccess10 from "@assets/images/case10.jpg";
import caseSuccess11 from "@assets/images/case11.jpg";
import caseSuccess12 from "@assets/images/case12.jpg";
import caseSuccess13 from "@assets/images/case13.jpg";
import caseSuccess14 from "@assets/images/case14.jpg";
import caseSuccess15 from "@assets/images/case15.jpg";
import caseSuccess16 from "@assets/images/case16.jpg";
import caseSuccess17 from "@assets/images/case17.jpg";
import caseSuccess18 from "@assets/images/case18.jpg";
import caseSuccess19 from "@assets/images/case19.jpg";
import caseSuccess20 from "@assets/images/case20.jpg";

const results = [
  { image: caseSuccess6, name: "Raphael M.", role: "Santander" },
  { image: caseSuccess3, name: "Jéssica L.", role: "Itaú" },
  { image: caseSuccess5, name: "Ismar G.", role: "Itaú" },
  { image: caseSuccess16, name: "Jucelir R.", role: "Itaú" },
  { image: caseSuccess4, name: "Geovanna S.", role: "Mercantil" },
  { image: caseSuccess2, name: "Vanessa G.", role: "Itaú" },
  { image: caseSuccess7, name: "Alex D.", role: "Itaú" },
  { image: caseSuccess9, name: "Arnaldo C.", role: "Itaú" },
  { image: caseSuccess8, name: "Kelly A.", role: "Itaú" },
  { image: caseSuccess10, name: "Lethicia P.", role: "Porto Seguro" },
  { image: caseSuccess12, name: "Aline V.", role: "Itaú" },
  { image: caseSuccess15, name: "José V.", role: "Santander" },
  { image: caseSuccess11, name: "Adna R.", role: "Bradesco" },
  { image: caseSuccess13, name: "Kalel D.", role: "Santander" },
  { image: caseSuccess14, name: "Francisco F.", role: "Itaú" },
  { image: caseSuccess17, name: "Tais S.", role: "Itaú" },
  { image: caseSuccess19, name: "Fernanda F.", role: "Itaú" },
  { image: caseSuccess18, name: "Ingrid M.", role: "Itaú" },
  { image: caseSuccess, name: "Felipe F.", role: "Sicredi" },
  { image: caseSuccess20, name: "Jefferson A.", role: "Itaú" },
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

const CARDS_COUNT = 5;

const ResultsSection = () => {
  const [baseIndex, setBaseIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // autoplay controlado por pause
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setBaseIndex((prev) => prev + CARDS_COUNT);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // resolve qual item cada card mostra
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
            Cases de Sucesso
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
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={() => setIsPaused(true)}
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
              <p className="text-3xl md:text-5xl font-bold text-accent">
                +200
              </p>
              <p className="text-primary-foreground/80 text-lg md:text-sm mt-1">
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

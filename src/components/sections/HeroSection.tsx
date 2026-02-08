import { motion } from "framer-motion";
import { TrendingUp, Star } from "lucide-react";
import { useState, useEffect } from "react";
import heroBackground from "@/assets/images/capa.jpg";
import perfil2 from "@assets/images/perfil2.jpg";
import perfil3 from "@assets/images/perfil3.jpg";
import perfil4 from "@assets/images/perfil4.jpg";
import perfil5 from "@assets/images/perfil5.jpg";

const WHATSAPP_NUMBER = "5513996105219";
const WHATSAPP_MESSAGE = `Olá Karla! Tudo bem?

Vim através do seu site e me identifiquei com o seu trabalho.
Gostaria de conversar sobre a mentoria em carreira bancária e entender os próximos passos, pois tenho interesse em ingressar ou crescer no mercado financeiro.
Podemos conversar?`;

const HeroSection = () => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
  };

  const scrollToAbout = () => {
    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  const results = [
    {
      imagem: perfil2
    },
     {
      imagem: perfil3
    },
       {
      imagem: perfil4
    },
       {
      imagem: perfil5
    }
  ]
  
const [count, setCount] = useState(0);

useEffect(() => {
  let current = 0;
  const target = 200;
  const increment = 2; // quanto aumenta a cada tick
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    setCount(current);
  }, 25); // intervalo em ms

  return () => clearInterval(interval);
}, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with focal point control */}
      <div    
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundPosition: "center top",
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/70 to-navy/95" />
      
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Te ajudo a transformar sua trajetória no{" "}
              <span className="text-gold">mercado financeiro</span>
            </h1>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10"
          >
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto bg-gold hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all hover:scale-105 shadow-elevated flex items-center justify-center gap-2"
            >
          
              Agendar mentoria
              <TrendingUp className="w-5 h-5" />
            </button>
            <button
              onClick={scrollToAbout}
              className="w-full sm:w-auto text-white/90 hover:text-white border border-white/30 hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all"
            >
              Conheça minha história
            </button>
          </motion.div>

          {/* Social Proof Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 h-[120px] md:mt-16 flex flex-col items-center"
          >
            <div className="bg-[#0f172a]/60 backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-white/20 w-full max-w-lg">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                {/* Stats */}
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 mb-1">
                  </div>
                  <p className="text-accent text-3xl sm:text-2xl font-bold">+{count} sonhos</p>
                  <p className="text-white/70 text-sm">transformados em crachás</p>
                </div>

                <div className="hidden sm:block w-px h-12 bg-white/20" />

                {/* Avatars */}
                <div className="flex -space-x-3">
                    {results.map((item, index) => (
                      <div
                        key={index}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-accent overflow-hidden flex items-center justify-center"
                      >
                        <img
                          src={item.imagem}
                          alt={`Avatar ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                <div className="w-10 h-10 rounded-full bg-accent border-2 border-accent flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-medium">
                    +196
                  </span>
                </div>
                </div>

                <div className="hidden sm:block w-px h-12 bg-white/20" />

                {/* Rating */}
                <div className="text-center">
                  <div className="flex items-center gap-0.5 mb-1 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-white text-sm font-medium">Sucesso garantido</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

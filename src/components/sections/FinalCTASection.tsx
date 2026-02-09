import { motion } from "framer-motion";
import { TrendingUp, Clock, Instagram, Linkedin } from "lucide-react";

const WHATSAPP_NUMBER = "5513996105219";
const WHATSAPP_MESSAGE = `Olá Karla! Tudo bem?

Vim através do seu site e me identifiquei com o seu trabalho.
Gostaria de conversar sobre a mentoria em carreira bancária e entender os próximos passos, pois tenho interesse em ingressar ou crescer no mercado financeiro.
Podemos conversar?`;

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/kn.mentoria/", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/karlanachtajler/", label: "LinkedIn" }
];

const FinalCTASection = () => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-10 left-20 w-64 md:w-80 h-64 md:h-80 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
         <div className="flex justify-center mb-6">
          <span className="material-symbols-outlined text-accent text-5xl">
            stars
          </span>
        </div>

          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            O próximo crachá pode ser o seu.
          </h2>
          
          <p className="text-white/70 text-base md:text-lg mb-8 md:mb-10">
            Vagas limitadas para garantir o acompanhamento personalizado que você merece.
          </p>

          <motion.button
            onClick={handleWhatsApp}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-accent hover:bg-primary/90 text-primary-foreground font-semibold px-8 md:px-10 py-4 md:py-5 rounded-full shadow-elevated transition-all duration-300 inline-flex items-center gap-3 text-base md:text-lg"
          >
            Quero minha Mentoria
            <TrendingUp className="w-5 h-5" />
          </motion.button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Início Imediato
            </span>
            <span className="hidden sm:block">•</span>
            <span>100% Online</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mt-10 md:mt-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 md:w-12 md:h-12 rounded-xl bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
              >
                <social.icon className="w-8 h-8 text-accent" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;

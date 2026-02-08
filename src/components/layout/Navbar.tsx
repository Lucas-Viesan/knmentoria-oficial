import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const WHATSAPP_NUMBER = "5513996105219";
const WHATSAPP_MESSAGE = `Olá Karla! Tudo bem?

Vim através do seu site e me identifiquei com o seu trabalho.
Gostaria de conversar sobre a mentoria em carreira bancária e entender os próximos passos, pois tenho interesse em ingressar ou crescer no mercado financeiro.
Podemos conversar?`;

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Método", href: "#metodo" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NAVBAR_HEIGHT = 80; // altura do navbar fixo em px

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      WHATSAPP_MESSAGE
    )}`;
    window.open(url, "_blank");
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    // esperar menu fechar antes de rolar
    setTimeout(() => {
      const element = document.querySelector(href);
      if (!element) return;

      // considerar altura do navbar fixo
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 300); // tempo da animação do menu
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center justify-center text-gold font-extrabold text-xl">
            KN
          </div>
          <div className="h-8 w-[1px] bg-slate-200 mx-1"></div>
          <div className="flex flex-col leading-none">
            <span className="font-roboto font-semibold uppercase text-[10px] tracking-tighter text-foreground">
              Karla
            </span>
            <span className="font-bold uppercase text-[10px] tracking-tighter text-foreground">
              Nachtajler
            </span>
            <span className="mt-1 text-[8px] font-light uppercase tracking-[0.15em] text-slate-400">
              Mentoria de Carreira
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={handleWhatsApp}
            className="bg-accent hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            Agendar mentoria
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-gold"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border min-h-[45vh]"
          >
            <div className="pt-4 container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={handleWhatsApp}
                className="mt-2 bg-accent hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-full text-sm font-medium transition-colors w-full"
              >
                Agendar mentoria
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

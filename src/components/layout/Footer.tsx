
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-900 border-t border-white/5 text-center px-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col  items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-4 opacity-50 grayscale contrast-125">
          <span className="text-white font-extrabold text-xl tracking-tighter">KN</span>
          <div className="h-6 w-[1px] bg-white/20 mx-1"></div>
          <div className="flex flex-col text-left leading-none">
          <span className="text-[8px] font-bold uppercase tracking-widest text-white">Karla</span>
          <span className="text-[8px] font-bold uppercase tracking-widest text-white">Nachtajler</span>
          <span className="text-[6px] font-light uppercase tracking-[0.15em] text-slate-400">Mentoria de Carreira</span>
          </div>
          </div>

          {/* Copyright */}
          <p className="text-white/50 text-sm text-center md:text-right">
            © {currentYear} Karla Nachtajler. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "A mentoria da Karla foi o divisor de águas. Eu não conseguia passar da primeira fase, e com o direcionamento dela, conquistei minha vaga dos sonhos em menos de 2 meses.",
    name: "Lucas Silveira",
    role: "Analista no BTG Pactual",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
  },
  {
    quote: "O suporte na preparação para os cases técnicos foi impecável. Senti total confiança durante o processo seletivo e hoje estou onde sempre quis estar.",
    name: "Beatriz Mendes",
    role: "Private Banking no Itaú",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
  },
  {
    quote: "A Karla tem uma visão que ninguém mais tem sobre o que os bancos buscam. O método dela é prático, direto ao ponto e focado em resultados reais.",
    name: "Ricardo Fontes",
    role: "Investment Banking XP",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    quote: "Estava perdida sobre qual caminho seguir. A mentoria me ajudou a encontrar minha área ideal e em 3 semanas já tinha uma proposta.",
    name: "Juliana Costa",
    role: "Analista no Bradesco",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
  },
  {
    quote: "O diferencial é o acompanhamento personalizado. Não é só uma mentoria genérica, a Karla realmente entende seu perfil e direciona estrategicamente.",
    name: "André Pereira",
    role: "Gerente no Santander",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop"
  }
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            O que dizem os novos talentos do{" "}
            <span className="text-primary">Mercado Financeiro</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card shadow-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card shadow-card border border-border flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 md:px-8 py-4 -mx-4 md:-mx-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[300px] md:w-[340px]"
              >
                <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-accent fill-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-foreground leading-relaxed mb-6 flex-1 text-sm md:text-base">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</p>
                      <p className="text-muted-foreground text-xs md:text-sm flex items-center gap-1">
                        {testimonial.role}
                        <BadgeCheck className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

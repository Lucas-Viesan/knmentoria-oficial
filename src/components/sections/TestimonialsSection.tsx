import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import depoimentos1 from "@assets/images/depoimento1.jpg";
import depoimentos2 from "@assets/images/depoimento2.jpg";
import depoimentos3 from "@assets/images/depoimento3.jpg";
import depoimentos4 from "@assets/images/depoimento4.jpg";
import depoimentos5 from "@assets/images/depoimento5.jpg";
import depoimentos6 from "@assets/images/depoimento6.jpg";

const testimonials = [
  {
    quote: "A palavra PRIVILÉGIO define em ter a Karla como mentora! Tive o prazer de realizar mentoria para ingressar no mercado financeiro, é uma ótima profissional, dedicada e comprometida. Sempre disposta compartilhar seus conhecimentos e direcionar para chegar no objetivo de forma personalizada. Além disso, seu apoio e incentivo durante toda a mentoria é motivadores para o desenvolvimento profissional. Karla, é inspiradora em seu trabalho e todos devem ter a sorte de ter como mentora. ",
    name: "Kelly Araujo",
    role: "Agente de Negócios",
    image: depoimentos5
  },
    {
    quote: "Karla Nachtajler, CEA, AAA, Mentora de Carreiras faz um trabalho incrível ajudando muitas pessoas e eu sou um exemplo de alguém que ela ajudou e foi fundamental para eu arrumar a vaga no AAA. Você faz a diferença ajudando todos em realizar seus sonhos, continue com essa dedicação, profissionalismo e carinho.",
    name: "Raphael Moura",
    role: "Assessor de Investimentos",
    image: depoimentos6
  },
  {
    quote: "Só tenho a agradecer por toda ajuda, você foi essencial nesse processo da minha vida, quem tiver a oportunidade de fazer a mentoria com você não vai se arrepender, pelo contrário, além de conseguir realizar o sonho de entrar no mercado financeiro, ganhará uma amiga. Porque você é maravilhosa e tem um coração gigante! Muito obrigada e continue transformando vidas, você nasceu pra isso!",
    name: "Ana Paula Régio",
    role: "Especialista Santander",
    image: depoimentos1
  },
  {
    quote: "Foi uma experiência muito marcante para mim; a ajuda da Karla Nachtajler, CEA, AAA, Mentora de Carreiras surpreendeu e muito minhas expectativas! E tenho certeza que foi fundamental para a minha aprovação no processo seletivo. A minha evolução se deve muito a você. Gente vale muito a pena, façam!!!",
    name: "Aline Fontoura Campos",
    role: "Assessora de Investimentos",
    image: depoimentos2
  },
  {
    quote: "Fazer a mentoria com a Karla Nachtajler, CEA, AAA, Mentora de Carreiras, foi uma das melhores decisões que tomei! Além de ser super experiente e profissional, ela se torna uma amiga, acompanhando cada passo bem de perto. Se você quer alavancar suas vendas e busca uma mentoria de qualidade, recomendo de olhos fechados. Ela é incrível!",
    name: "Jeferson Alves Estevão",
    role: "Gerente de Relacionamento",
    image: depoimentos4
  },
  {
    quote: "Karla foi minha gestora e mentora, me mostrou o caminho e hoje me sinto muito mais preparada pra assumir os desafios que tanto almejei. Como líder, sempre colocou a mão a na massa e mostrou que tudo era possível para um coração cheio de vontade. Karla tem muita bagagem e consegue acrescentar nos caminhos profissionais de qualquer um que procurar os seus serviços. Recomendo de olhos fechados!",
    name: "Laura Hidalgo",
    role: "Gerente de Atendimento",
    image: depoimentos3
  },
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

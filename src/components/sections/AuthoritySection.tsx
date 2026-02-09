import { motion } from "framer-motion";
import { Shield, Briefcase, GraduationCap, Heart } from "lucide-react";
import karlaPhoto from "@/assets/images/perfil.jpg";

const credentials = [
  {
    icon: Briefcase,
    title: "13 anos no mercado financeiro",
    description:"Vivência prática no ambiente bancário, com foco em metas, desafios reais e crescimento profissional."
  },
  {
    icon: Shield,
    title: "Gestão de pessoas em grande instituição bancária",
    description: "Experiência liderando e preparando talentos para assumir novos desafios no mercado financeiro.",
  },
  {
    icon: GraduationCap,
    title: "Formação acadêmica aplicada a realidade do banco",
    description: "Especializações focadas em Executive, Positive Coaching e MBA em Corporate Banking",
  },
  {
    icon: Heart,
    title: "Mentoria focada em alta performance",
    description: "Há mais de 3 anos ajudando profissionais a desenvolverem seu potencial com método, clareza e direcionamento."
  },
];

const AuthoritySection = () => {
  return (
    <section id="sobre" className="relative py-20 md:py-28 bg-primary overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight max-w-xl mx-auto">
            Por que confiar em mim para{" "}
            <span className="text-accent">sua carreira</span>?
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-5xl mx-auto">
          {/* Left: Photo + Name */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative group">
              {/* Accent border frame */}
              <div className="absolute -inset-2 bg-accent/20 rounded-2xl rotate-2 group-hover:rotate-1 transition-transform duration-500" />
              <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={karlaPhoto}
                  alt="Karla Nachtajler - Mentora de Carreira no Mercado Financeiro"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="mt-6 text-center lg:text-left">
              <h3 className="font-display text-2xl font-bold text-primary-foreground">
                Karla Nachtajler
              </h3>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mt-1">
                Mentora de Carreira &<br />
                Assessora de Investimentos
              </p>
            </div>
          </motion.div>

          {/* Right: Credentials */}
          <div className="space-y-6">
            {credentials.map((cred, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 * index }}
                className="flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <cred.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-roboto font-semibold text-primary-foreground text-base md:text-lg leading-snug">
                    {cred.title}
                  </h4>
                  <p className="text-primary-foreground/70 text-sm mt-1 leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;

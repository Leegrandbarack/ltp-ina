import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Abdoulaye K.',
    role: 'Ancien élève, IMI',
    text: "Le LTP d'Ina m'a donné les compétences techniques pour lancer ma propre entreprise de maintenance informatique. Une formation d'excellence !",
    initials: 'AK',
  },
  {
    name: 'Fatouma B.',
    role: 'Élève en Comptabilité G2',
    text: "Les cours sont bien structurés et les professeurs sont très disponibles. Je me sens prête pour le monde professionnel.",
    initials: 'FB',
  },
  {
    name: 'Ibrahim S.',
    role: 'Ancien élève, Mécanique Auto',
    text: "Grâce à ma formation au LTP, j'ai décroché un emploi dans une grande entreprise mécanique à Cotonou dès ma sortie.",
    initials: 'IS',
  },
];

export const TestimonialsSection = () => (
  <section className="section-padding bg-primary relative overflow-hidden">
    {/* Decorative */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

    <div className="container-custom relative">
      <div className="text-center mb-14 animate-on-scroll">
        <span className="inline-block text-gold font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">
          Témoignages
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-3">
          Ce que disent nos élèves
        </h2>
        <p className="text-primary-foreground/50 font-body max-w-md mx-auto text-sm">
          Découvrez les parcours inspirants de nos élèves et anciens élèves
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="bg-primary-foreground/[0.07] backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-7 animate-on-scroll hover:bg-primary-foreground/10 transition-colors duration-300"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <Quote className="w-8 h-8 text-primary-foreground/10 mb-3" />
            <p className="text-primary-foreground/80 font-body leading-relaxed mb-6 text-sm">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3 pt-5 border-t border-primary-foreground/10">
              <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="font-display font-bold text-accent text-sm">{t.initials}</span>
              </div>
              <div>
                <p className="font-display font-bold text-primary-foreground text-sm">{t.name}</p>
                <p className="text-primary-foreground/50 font-body text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

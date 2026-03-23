import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Abdoulaye K.',
    role: 'Ancien élève, IMI',
    text: "Le LTP d'Ina m'a donné les compétences techniques pour lancer ma propre entreprise de maintenance informatique. Une formation d'excellence !",
  },
  {
    name: 'Fatouma B.',
    role: 'Élève en Comptabilité G2',
    text: "Les cours sont bien structurés et les professeurs sont très disponibles. Je me sens prête pour le monde professionnel.",
  },
  {
    name: 'Ibrahim S.',
    role: 'Ancien élève, Mécanique Auto',
    text: "Grâce à ma formation au LTP, j'ai décroché un emploi dans une grande entreprise mécanique à Cotonou dès ma sortie.",
  },
];

export const TestimonialsSection = () => (
  <section className="section-padding bg-primary">
    <div className="container-custom">
      <div className="text-center mb-12 animate-on-scroll">
        <span className="inline-block text-gold font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">
          Témoignages
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary-foreground">
          Ce que disent nos élèves
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 animate-on-scroll"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <Quote className="w-8 h-8 text-primary-foreground/15 mb-3" />
            <p className="text-primary-foreground/80 font-body leading-relaxed mb-5 text-sm">
              "{t.text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="font-display font-bold text-accent text-sm">
                  {t.name.charAt(0)}
                </span>
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

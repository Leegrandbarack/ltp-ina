import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Abdoulaye K.',
    role: 'Ancien élève, filière IMI (promotion 2019)',
    text: "Après mon diplôme, j'ai trouvé du travail dans un cyber café à Parakou, puis j'ai ouvert mon propre atelier de dépannage informatique. Ce que j'ai appris au LTP m'a vraiment servi.",
    initials: 'AK',
  },
  {
    name: 'Rachidatou M.',
    role: 'Élève en Comptabilité G2, 2ème année',
    text: "Je suis l'une des rares filles de ma classe, mais les professeurs nous traitent tous de la même façon. Les cours de comptabilité sont concrets et on fait beaucoup d'exercices pratiques.",
    initials: 'RM',
  },
  {
    name: 'Moussa D.',
    role: 'Ancien élève, Mécanique Automobile (promotion 2021)',
    text: "La formation est surtout pratique. On passait beaucoup de temps en atelier. Aujourd'hui je travaille dans un garage à Bembéréké et je forme moi-même des apprentis.",
    initials: 'MD',
  },
];

export const TestimonialsSection = () => (
  <section className="section-padding bg-primary relative overflow-hidden">
    <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

    <div className="container-custom relative">
      <div className="text-center mb-14 animate-on-scroll">
        <span className="inline-block text-gold font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">
          Témoignages
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-3">
          Ils sont passés par le LTP INA
        </h2>
        <p className="text-primary-foreground/50 font-body max-w-md mx-auto text-sm">
          Élèves et anciens élèves partagent leur expérience
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className="bg-primary-foreground/[0.07] backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-7 animate-on-scroll hover:bg-primary-foreground/10 transition-colors duration-300"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
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

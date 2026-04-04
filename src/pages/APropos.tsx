import { Target, Eye, Shield, Lightbulb, Award, Users, Heart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const values = [
  { icon: Shield, title: 'Discipline', desc: 'Le respect des règles est au cœur de notre fonctionnement. C\'est la base d\'un apprentissage efficace.' },
  { icon: Award, title: 'Excellence', desc: 'Nous poussons chaque élève à donner le meilleur de lui-même, dans les cours comme dans la pratique.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Nos méthodes pédagogiques évoluent avec les réalités du terrain et les avancées technologiques.' },
  { icon: Heart, title: 'Solidarité', desc: 'La vie communautaire au LTP favorise l\'entraide entre élèves et le sens du collectif.' },
];

const timeline = [
  { year: '2001', event: 'Création du lycée sous l\'initiative du gouvernement béninois pour renforcer l\'offre de formation technique dans le nord du pays.' },
  { year: '2005', event: 'Ouverture des premières filières industrielles : Génie Civil et Électricité, avec la construction de nouveaux ateliers.' },
  { year: '2010', event: 'Inauguration du bâtiment administratif et création de la filière IMI pour répondre à la demande croissante en informatique.' },
  { year: '2018', event: 'Réhabilitation des ateliers de mécanique et de menuiserie grâce au soutien de partenaires techniques et financiers.' },
  { year: '2023', event: 'Équipement du laboratoire informatique avec 30 postes modernes et mise en place d\'une connexion internet pour les élèves.' },
];

const APropos = () => {
  const ref = useScrollAnimation();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80')] bg-cover bg-center opacity-15" />
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="relative container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Présentation de l'établissement</h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Depuis plus de vingt ans, le LTP INA forme des techniciens qualifiés au service du développement du Bénin.
          </p>
        </div>
      </section>

      {/* Historique */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-on-scroll">
              <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">Notre histoire</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-6">Un établissement ancré dans son territoire</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Le Lycée Technique Professionnel d'Ina a ouvert ses portes au début des années 2000 dans la commune de Bembéréké, département du Borgou. À l'époque, la zone manquait cruellement de centres de formation technique accessibles aux jeunes de la région.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Partant de trois filières et d'une poignée d'enseignants, l'établissement a grandi progressivement. Des bâtiments ont été construits, des ateliers équipés, et le corps enseignant s'est renforcé au fil des années grâce à des recrutements ciblés et à la formation continue.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Aujourd'hui, le LTP INA accueille plus de 800 élèves répartis dans 12 filières. Il est devenu un acteur incontournable de la formation professionnelle dans le nord du Bénin, reconnu par les entreprises locales et les institutions.
              </p>
            </div>

            {/* Timeline */}
            <div className="animate-on-scroll" style={{ transitionDelay: '150ms' }}>
              <h3 className="font-display text-xl font-bold text-foreground mb-6">Dates clés</h3>
              <div className="space-y-6 relative">
                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-border" />
                {timeline.map((t) => (
                  <div key={t.year} className="flex gap-4 relative">
                    <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center shrink-0 z-10">
                      <span className="text-primary-foreground font-display font-bold text-[10px]">{t.year.slice(2)}</span>
                    </div>
                    <div className="bg-card rounded-lg p-4 border border-border/50 flex-1">
                      <p className="font-display font-bold text-sm text-primary mb-1">{t.year}</p>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">{t.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50 animate-on-scroll">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Notre mission</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Offrir aux jeunes de Bembéréké et des environs une formation technique solide, qui leur donne les moyens de s'insérer dans le monde professionnel ou de poursuivre leurs études. Nous formons des techniciens capables de travailler de façon autonome, avec rigueur et conscience professionnelle.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50 animate-on-scroll" style={{ transitionDelay: '150ms' }}>
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Notre vision</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Faire du LTP INA un pôle de formation technique reconnu au niveau national, où les élèves acquièrent des compétences concrètes valorisées par les employeurs. Nous voulons que chaque diplômé sorte avec un savoir-faire réel et une confiance en ses capacités.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">Nos principes</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">Ce qui nous guide au quotidien</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="text-center animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mot du Directeur */}
      <section className="section-padding bg-primary">
        <div className="container-custom max-w-3xl">
          <div className="text-center animate-on-scroll">
            <span className="inline-block text-gold font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">Mot du Directeur</span>
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-8">Un message à nos élèves et à leurs familles</h2>
            <div className="bg-primary-foreground/[0.07] backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 text-left">
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-4">
                Chers parents, chers élèves,
              </p>
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-4">
                Le choix d'un établissement de formation est une décision importante. Au LTP INA, nous en sommes conscients et nous nous efforçons chaque jour de mériter la confiance que vous nous accordez.
              </p>
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-4">
                Notre équipe pédagogique travaille avec dévouement pour offrir à chaque élève un encadrement de qualité, des cours théoriques solides et une pratique régulière en atelier. Nous croyons fermement qu'un métier bien appris est la meilleure garantie d'un avenir stable.
              </p>
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-6">
                Je vous invite à découvrir notre établissement, à rencontrer nos enseignants et à constater par vous-mêmes l'environnement que nous offrons à vos enfants.
              </p>
              <div className="border-t border-primary-foreground/10 pt-4">
                <p className="font-display font-bold text-primary-foreground">Le Directeur du LTP INA</p>
                <p className="text-primary-foreground/50 font-body text-sm">Ina, Bembéréké – Borgou, Bénin</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APropos;

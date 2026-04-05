import { Target, Eye, Shield, Lightbulb, Award, Heart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const values = [
  { icon: Shield, title: 'Discipline', desc: 'Le respect des règles et des horaires est essentiel. C\'est ce qui permet de maintenir un cadre favorable à l\'apprentissage.' },
  { icon: Award, title: 'Travail', desc: 'Nous encourageons l\'effort régulier. La réussite passe par un travail constant, en classe comme à l\'atelier.' },
  { icon: Lightbulb, title: 'Ouverture', desc: 'Nos formations évoluent en fonction des réalités du marché. Nous restons attentifs aux besoins des entreprises locales.' },
  { icon: Heart, title: 'Solidarité', desc: 'La vie en communauté au lycée développe l\'entraide. Les élèves apprennent à travailler ensemble et à se soutenir.' },
];

const timeline = [
  { year: '2001', event: 'Ouverture du lycée avec trois filières initiales, dans le cadre de la politique de décentralisation de l\'offre de formation technique au Bénin.' },
  { year: '2005', event: 'Ajout des filières Génie Civil et Électricité. Construction des premiers ateliers avec l\'appui du budget national.' },
  { year: '2010', event: 'Création de la filière IMI (Informatique) suite à la demande croissante. Achèvement du bâtiment administratif.' },
  { year: '2018', event: 'Réhabilitation des ateliers de mécanique et menuiserie grâce à un partenariat avec la coopération technique allemande.' },
  { year: '2023', event: 'Équipement du laboratoire informatique : 30 postes, vidéoprojecteur et connexion internet pour la filière IMI.' },
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
            Un lycée public mixte au service de la formation technique dans le département du Borgou.
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
                Le Lycée Technique Professionnel d'Ina a été créé au début des années 2000 dans l'arrondissement d'Ina, commune de Bembéréké, département du Borgou. L'objectif était de rapprocher l'offre de formation technique des populations du nord du Bénin, qui devaient auparavant se déplacer jusqu'à Parakou ou Natitingou.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                L'établissement a démarré modestement avec trois filières et une dizaine d'enseignants. Au fil des années, de nouveaux bâtiments ont été construits, les ateliers équipés, et l'offre de formation élargie pour répondre aux besoins du marché local.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Aujourd'hui, le LTP INA accueille environ 800 élèves — garçons et filles — répartis dans 12 filières. L'établissement est placé sous la tutelle du Ministère des Enseignements Secondaire, Technique et de la Formation Professionnelle (MESTFP).
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
                Former des jeunes garçons et filles aux métiers techniques, en leur donnant les compétences pratiques nécessaires pour s'insérer dans le monde du travail ou créer leur propre activité. Nous mettons l'accent sur la pratique en atelier, la rigueur professionnelle et l'autonomie.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50 animate-on-scroll" style={{ transitionDelay: '150ms' }}>
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Notre vision</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Devenir un pôle de formation technique de référence dans le nord du Bénin, reconnu par les entreprises et les institutions pour la qualité de ses diplômés. Nous voulons que chaque élève quitte le LTP INA avec un métier concret entre les mains.
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
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-8">Un message aux familles</h2>
            <div className="bg-primary-foreground/[0.07] backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 text-left">
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-4">
                Chers parents, chers élèves,
              </p>
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-4">
                Choisir un établissement pour la formation de son enfant n'est jamais anodin. Au LTP INA, nous prenons cette responsabilité au sérieux. Notre objectif est simple : donner à chaque élève, garçon ou fille, un vrai métier entre les mains.
              </p>
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-4">
                Nos enseignants, pour la plupart issus du terrain professionnel, s'investissent au quotidien pour transmettre des compétences concrètes. Les ateliers sont ouverts régulièrement, et nous veillons à ce que chaque élève bénéficie d'un encadrement sérieux.
              </p>
              <p className="text-primary-foreground/80 font-body leading-relaxed mb-6">
                Nous savons que les conditions ne sont pas toujours faciles, mais nous faisons de notre mieux avec les moyens disponibles. Je vous invite à venir visiter notre établissement et à échanger avec nos équipes.
              </p>
              <div className="border-t border-primary-foreground/10 pt-4">
                <p className="font-display font-bold text-primary-foreground">Le Directeur du LTP INA</p>
                <p className="text-primary-foreground/50 font-body text-sm">Ina, Commune de Bembéréké — Borgou, Bénin</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APropos;

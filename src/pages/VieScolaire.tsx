import { BookOpen, Clock, Shield, Users, Award, Dumbbell, Music, Palette, BookMarked } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const horaires = [
  { jour: 'Lundi – Vendredi', matin: '07h30 – 12h30', apresmidi: '15h00 – 17h30' },
  { jour: 'Samedi', matin: '07h30 – 12h00', apresmidi: '—' },
];

const reglement = [
  'Le port de la tenue scolaire réglementaire est obligatoire du lundi au vendredi pour tous les élèves, garçons et filles.',
  'Les retards répétés entraînent un avertissement écrit adressé aux parents ou au tuteur légal.',
  'L\'utilisation du téléphone portable est strictement interdite pendant les heures de cours et en atelier.',
  'Tout acte de violence, d\'intimidation ou de harcèlement est passible d\'un passage devant le conseil de discipline.',
  'Les absences doivent être justifiées par les parents ou tuteurs dans un délai de 48 heures auprès du surveillant général.',
  'Le matériel pédagogique et les locaux doivent être respectés. Toute dégradation sera facturée à la famille.',
];

const activites = [
  { icon: Dumbbell, title: 'Sport scolaire', desc: 'Football, handball et athlétisme pour les garçons et les filles. Le lycée participe aux compétitions de l\'OSEBS au niveau départemental.' },
  { icon: Music, title: 'Troupe théâtrale', desc: 'Les élèves préparent des sketches et pièces pour les fêtes scolaires. Une activité ouverte à tous, qui aide à développer la confiance en soi.' },
  { icon: Palette, title: 'Club environnement', desc: 'Actions de reboisement dans l\'enceinte du lycée, sensibilisation à la gestion des déchets et entretien des espaces verts.' },
  { icon: BookMarked, title: 'Soutien scolaire', desc: 'Des séances de rattrapage sont organisées les mercredis après-midi pour les élèves en difficulté, avec des enseignants volontaires.' },
];

const VieScolaire = () => {
  const ref = useScrollAnimation();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="relative container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Vie scolaire</h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Organisation des cours, discipline et activités : le quotidien des élèves au LTP INA.
          </p>
        </div>
      </section>

      {/* Organisation */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">Organisation</span>
              <h2 className="font-display text-3xl font-extrabold text-foreground mb-6">Horaires et rythme scolaire</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Les cours se déroulent du lundi au samedi matin. Les après-midi sont consacrés aux travaux pratiques en atelier, aux séances de rattrapage ou aux activités parascolaires. Ce rythme permet d'alterner entre la théorie en classe et la pratique sur le terrain.
              </p>
              <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="text-left p-4 font-display font-bold text-sm text-foreground">Jour</th>
                      <th className="text-left p-4 font-display font-bold text-sm text-foreground">Matin</th>
                      <th className="text-left p-4 font-display font-bold text-sm text-foreground">Après-midi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {horaires.map((h) => (
                      <tr key={h.jour} className="border-t border-border/50">
                        <td className="p-4 font-body text-sm text-foreground font-medium">{h.jour}</td>
                        <td className="p-4 font-body text-sm text-muted-foreground">{h.matin}</td>
                        <td className="p-4 font-body text-sm text-muted-foreground">{h.apresmidi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ transitionDelay: '150ms' }}>
              <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">Encadrement</span>
              <h2 className="font-display text-3xl font-extrabold text-foreground mb-6">Organisation des classes</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Chaque classe est suivie par un professeur principal qui assure le lien entre l'administration, les enseignants et les familles. Les effectifs varient selon les filières, mais l'encadrement reste une priorité.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Users, label: '30 à 45 élèves par classe (garçons et filles)' },
                  { icon: Award, label: 'Un professeur principal désigné par classe' },
                  { icon: Clock, label: 'Conseils de classe organisés chaque trimestre' },
                  { icon: Shield, label: 'Surveillants généraux présents en permanence' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border/50">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="font-body text-sm text-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Règlement */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10 animate-on-scroll">
            <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">Discipline</span>
            <h2 className="font-display text-3xl font-extrabold text-foreground mb-3">Règlement intérieur</h2>
            <p className="text-muted-foreground font-body text-sm max-w-lg mx-auto">
              Le respect du règlement intérieur est une condition essentielle au bon déroulement de la vie scolaire et à la réussite de chaque élève.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 sm:p-8 shadow-soft border border-border/50 animate-on-scroll">
            <ul className="space-y-4">
              {reglement.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm text-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary font-display font-bold text-xs">{i + 1}</span>
                  </div>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Activités */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">Parascolaire</span>
            <h2 className="font-display text-3xl font-extrabold text-foreground mb-3">Activités extrascolaires</h2>
            <p className="text-muted-foreground font-body text-sm max-w-lg mx-auto">
              En dehors des cours, le LTP INA propose des activités ouvertes à tous les élèves pour favoriser l'épanouissement personnel.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {activites.map((a, i) => (
              <div key={a.title} className="bg-card rounded-xl p-6 shadow-soft border border-border/50 animate-on-scroll hover:shadow-elevated transition-shadow" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <a.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VieScolaire;

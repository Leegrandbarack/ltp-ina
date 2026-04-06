import { BookOpen, Clock, Shield, Users, Award, Dumbbell, Music, Palette, BookMarked, Home, Moon, Sun, Utensils, UserCheck } from 'lucide-react';
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

const horairesInternat = [
  { heure: '05h30', activite: 'Réveil et toilette' },
  { heure: '06h00 – 07h00', activite: 'Études dirigées du matin' },
  { heure: '07h00 – 07h25', activite: 'Petit-déjeuner' },
  { heure: '07h30 – 12h30', activite: 'Cours en classe / Ateliers' },
  { heure: '12h30 – 13h30', activite: 'Déjeuner' },
  { heure: '13h30 – 15h00', activite: 'Repos / Temps libre' },
  { heure: '15h00 – 17h30', activite: 'Cours de l\'après-midi' },
  { heure: '18h00 – 19h30', activite: 'Études dirigées du soir' },
  { heure: '19h30 – 20h15', activite: 'Dîner' },
  { heure: '21h30', activite: 'Extinction des feux' },
];

const reglementInternat = [
  'Chaque pensionnaire doit disposer de sa literie, de ses effets personnels et de son matériel de toilette.',
  'Les sorties en dehors des heures autorisées sont formellement interdites sauf permission écrite du surveillant général.',
  'Le silence est exigé pendant les heures d\'études dirigées et après l\'extinction des feux.',
  'Les visiteurs ne sont reçus que le samedi après-midi, de 14h à 16h, au parloir.',
  'Les dortoirs doivent être maintenus propres. Un tour de nettoyage est organisé chaque semaine par chambre.',
  'Toute introduction de boisson alcoolisée, de cigarette ou de substance illicite est passible d\'exclusion immédiate.',
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

      {/* Internat */}
      <section id="internat" className="section-padding bg-primary/5">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">Hébergement</span>
            <h2 className="font-display text-3xl font-extrabold text-foreground mb-3">L'internat du LTP INA</h2>
            <p className="text-muted-foreground font-body text-sm max-w-2xl mx-auto">
              Le lycée dispose d'un internat qui accueille les filles et les garçons. L'hébergement est organisé pour offrir aux pensionnaires un cadre de vie propice aux études et à l'épanouissement.
            </p>
          </div>

          {/* Niveaux d'internat */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card rounded-xl p-6 border border-border/50 shadow-soft animate-on-scroll">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-3">Internat — Premier niveau</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                Ce niveau concerne les élèves du premier cycle, c'est-à-dire ceux qui vont du CM2 jusqu'en classe de 3ème. L'encadrement y est renforcé avec un suivi éducatif plus strict.
              </p>
              <ul className="space-y-2">
                {[
                  'Encadrement renforcé par des surveillants dédiés',
                  'Études dirigées obligatoires matin et soir',
                  'Accompagnement scolaire pour les élèves en difficulté',
                  'Activités encadrées pendant les temps libres',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/50 shadow-soft animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-3">Internat — Deuxième niveau</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                À partir de la classe de Seconde, les pensionnaires bénéficient d'une organisation adaptée aux grands élèves, avec davantage d'autonomie dans la gestion de leur temps.
              </p>
              <ul className="space-y-2">
                {[
                  'Plus d\'autonomie dans l\'organisation personnelle',
                  'Études dirigées encadrées mais avec horaires flexibles',
                  'Préparation aux examens (BAC, diplômes professionnels)',
                  'Sensibilisation à la vie professionnelle et à l\'insertion',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Filles / Garçons */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card rounded-xl p-6 border border-border/50 shadow-soft animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                  <UserCheck className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-display font-bold text-foreground">Internat filles</h3>
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                L'internat des filles est situé dans un bâtiment séparé avec un accès contrôlé. L'encadrement est assuré par des surveillantes résidentes. La sécurité et le bien-être des pensionnaires font l'objet d'une attention particulière, avec un éclairage nocturne et un gardiennage permanent.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/50 shadow-soft animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground">Internat garçons</h3>
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                L'internat des garçons est réparti en deux blocs correspondant aux deux niveaux (1er et 2e cycle). Chaque bloc est supervisé par un surveillant résident. La discipline y est stricte : rangement quotidien, respect des horaires et participation aux corvées collectives.
              </p>
            </div>
          </div>

          {/* Emploi du temps internat */}
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h3 className="font-display font-bold text-foreground text-xl mb-4 text-center">Emploi du temps des pensionnaires</h3>
            <p className="text-muted-foreground font-body text-sm text-center mb-6">
              Du lundi au vendredi, les pensionnaires suivent un rythme régulier. Le samedi après-midi et le dimanche sont consacrés au repos, aux visites et aux activités libres.
            </p>
            <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
              <div className="grid grid-cols-2 bg-muted/50 p-4">
                <span className="font-display font-bold text-sm text-foreground">Heure</span>
                <span className="font-display font-bold text-sm text-foreground">Activité</span>
              </div>
              {horairesInternat.map((h, i) => (
                <div key={i} className="grid grid-cols-2 p-4 border-t border-border/50">
                  <span className="font-body text-sm text-primary font-semibold">{h.heure}</span>
                  <span className="font-body text-sm text-foreground">{h.activite}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Règlement internat */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10 animate-on-scroll">
            <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">Internat</span>
            <h2 className="font-display text-3xl font-extrabold text-foreground mb-3">Règlement de l'internat</h2>
            <p className="text-muted-foreground font-body text-sm max-w-lg mx-auto">
              Le séjour à l'internat est soumis à des règles précises. Tout pensionnaire et sa famille s'engagent à les respecter lors de l'inscription.
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 sm:p-8 shadow-soft border border-border/50 animate-on-scroll">
            <ul className="space-y-4">
              {reglementInternat.map((rule, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm text-foreground">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-accent font-display font-bold text-xs">{i + 1}</span>
                  </div>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Règlement général */}
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

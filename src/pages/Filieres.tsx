import { Monitor, Zap, Wrench, Building2, Calculator, ShoppingCart, FileText, Compass, Car, BrickWall, CheckCircle, ArrowRight, Droplets, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const categories = [
  {
    label: 'Filières menant au CAP',
    description: 'Formations sanctionnées par le Certificat d\'Aptitude Professionnelle',
    color: 'bg-primary',
    filieres: [
      {
        icon: FileText,
        title: 'Secrétariat (G1)',
        description: "Techniques de secrétariat, gestion administrative, bureautique et communication professionnelle.",
        competences: ['Techniques de secrétariat', 'Bureautique avancée', 'Communication professionnelle', 'Gestion administrative'],
        debouches: ['Secrétaire de direction', 'Assistant(e) administratif(ve)', 'Agent de bureau'],
      },
      {
        icon: Calculator,
        title: 'Comptabilité (G2)',
        description: "Comptabilité générale, gestion financière, fiscalité et analyse des comptes d'entreprises.",
        competences: ['Comptabilité générale', 'Gestion financière', 'Fiscalité', 'Analyse comptable'],
        debouches: ['Comptable', 'Aide-comptable', 'Gestionnaire financier'],
      },
      {
        icon: ShoppingCart,
        title: 'Commerce (G3)',
        description: "Techniques commerciales, marketing, gestion des stocks et négociation commerciale.",
        competences: ['Techniques de vente', 'Marketing', 'Gestion des stocks', 'Négociation commerciale'],
        debouches: ['Commercial', 'Chef de rayon', 'Agent marketing'],
      },
      {
        icon: Zap,
        title: 'Électrotechnique (F3)',
        description: "Installations électriques domestiques et industrielles, automatisme et maintenance des équipements électriques.",
        competences: ['Installations électriques', 'Automatisme', 'Maintenance électrique', 'Normes de sécurité'],
        debouches: ['Électrotechnicien', 'Technicien de maintenance', 'Installateur industriel'],
      },
      {
        icon: BrickWall,
        title: 'Construction en Bâtiment (CB)',
        description: "Techniques de construction, lecture de plans, coffrage, ferraillage et réalisation d'ouvrages de bâtiment.",
        competences: ['Lecture de plans', 'Techniques de construction', 'Coffrage et ferraillage', 'Finitions'],
        debouches: ['Maçon qualifié', 'Chef d\'équipe BTP', 'Entrepreneur en bâtiment'],
      },
      {
        icon: Car,
        title: 'Mécanique Automobile (MA)',
        description: "Diagnostic, entretien et réparation de véhicules automobiles, moteurs et systèmes mécaniques.",
        competences: ['Diagnostic moteur', 'Réparation automobile', 'Entretien préventif', 'Systèmes électriques auto'],
        debouches: ['Mécanicien automobile', 'Chef d\'atelier', 'Entrepreneur en mécanique'],
      },
      {
        icon: Compass,
        title: 'Opérateur-Géomètre (OG)',
        description: "Levés topographiques, bornage, cartographie et utilisation d'instruments de mesure sur le terrain.",
        competences: ['Levés topographiques', 'Bornage', 'Cartographie', 'Instruments de mesure'],
        debouches: ['Géomètre', 'Technicien topographe', 'Agent cadastral'],
      },
      {
        icon: PenTool,
        title: 'Menuiserie',
        description: "Travail du bois, fabrication de meubles, charpente et finitions.",
        competences: ['Travail du bois', 'Fabrication de meubles', 'Charpente', 'Finitions'],
        debouches: ['Menuisier', 'Ébéniste', 'Charpentier'],
      },
      {
        icon: Wrench,
        title: 'Mécanique générale',
        description: "Mécanique générale, usinage, soudure et maintenance d'équipements.",
        competences: ['Mécanique générale', 'Soudure', 'Usinage', 'Maintenance'],
        debouches: ['Mécanicien industriel', 'Soudeur', 'Technicien de maintenance'],
      },
    ],
  },
  {
    label: 'Filières spécifiques',
    description: 'Formations professionnelles avec parcours distinct (ne menant pas au CAP)',
    color: 'bg-gold',
    filieres: [
      {
        icon: Monitor,
        title: 'Installation et Maintenance en Informatique (IMI)',
        description: "Installation, configuration, maintenance et dépannage de systèmes informatiques et réseaux locaux.",
        competences: ['Installation de systèmes', 'Maintenance matérielle', 'Configuration réseaux', 'Dépannage informatique'],
        debouches: ['Technicien informatique', 'Administrateur réseau', 'Support technique'],
      },
      {
        icon: Droplets,
        title: 'Eau et Assainissement (EA)',
        description: "Adduction d'eau potable, assainissement des eaux usées, plomberie et gestion des réseaux hydrauliques.",
        competences: ['Plomberie', 'Adduction d\'eau', 'Traitement des eaux', 'Réseaux hydrauliques'],
        debouches: ['Plombier', 'Technicien en assainissement', 'Agent des eaux'],
      },
      {
        icon: Building2,
        title: 'Technicien en Étude du Bâtiment (TEB)',
        description: "Dessin technique du bâtiment, étude de structures, lecture et conception de plans architecturaux.",
        competences: ['Dessin technique', 'Étude de structures', 'Conception de plans', 'Métré et devis'],
        debouches: ['Dessinateur en bâtiment', 'Technicien d\'études', 'Métreur'],
      },
      {
        icon: BrickWall,
        title: 'Réalisation de Gros Œuvre (RGO)',
        description: "Construction de structures porteuses, fondations, murs, dalles et ouvrages en béton armé.",
        competences: ['Fondations', 'Béton armé', 'Coffrage', 'Structures porteuses'],
        debouches: ['Maçon gros œuvre', 'Chef de chantier', 'Conducteur de travaux'],
      },
    ],
  },
];

const Filieres = () => {
  const ref = useScrollAnimation();

  return (
    <div ref={ref}>
      <section className="gradient-primary py-24 sm:py-32 text-center">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Nos Filières</h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Le LTP INA propose des formations diversifiées adaptées aux besoins du marché de l'emploi au Bénin et dans la sous-région.
          </p>
        </div>
      </section>

      {categories.map((cat) => (
        <section key={cat.label} className="section-padding">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-2 animate-on-scroll">
              <div className={`w-1.5 h-8 rounded-full ${cat.color}`} />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{cat.label}</h2>
            </div>
            <p className="text-muted-foreground font-body text-sm mb-10 ml-5 animate-on-scroll">{cat.description}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.filieres.map((f, i) => (
                <div
                  key={f.title}
                  className="bg-card rounded-xl border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-on-scroll overflow-hidden"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                        <f.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="font-display text-lg font-bold text-foreground leading-tight">{f.title}</h3>
                    </div>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">{f.description}</p>

                    <div className="mb-4">
                      <h4 className="font-display font-semibold text-foreground text-sm mb-2">Compétences</h4>
                      <ul className="space-y-1.5">
                        {f.competences.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-xs font-body text-muted-foreground">
                            <CheckCircle className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" /> {c}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-display font-semibold text-foreground text-sm mb-2">Débouchés</h4>
                      <ul className="space-y-1.5">
                        {f.debouches.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-xs font-body text-muted-foreground">
                            <ArrowRight className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" /> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-muted/50">
        <div className="container-custom text-center animate-on-scroll">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Intéressé par nos formations ?</h2>
          <p className="text-muted-foreground font-body mb-6 max-w-lg mx-auto">
            Consultez les conditions d'admission et déposez votre dossier de préinscription en ligne.
          </p>
          <Link to="/admissions">
            <Button variant="default" size="lg">Voir les admissions</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Filieres;

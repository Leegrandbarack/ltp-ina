import { Monitor, Zap, Wrench, Building2, Calculator, ShoppingCart, FileText, Compass, Car, Hammer, BrickWall, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const categories = [
  {
    label: 'Séries BAC',
    color: 'bg-accent',
    filieres: [
      {
        icon: FileText,
        title: 'Secrétariat (G1)',
        description: "Formation en techniques de secrétariat, gestion administrative, bureautique et communication professionnelle.",
        competences: ['Techniques de secrétariat', 'Bureautique avancée', 'Communication professionnelle', 'Gestion administrative'],
        debouches: ['Secrétaire de direction', 'Assistant(e) administratif(ve)', 'Agent de bureau'],
      },
      {
        icon: Calculator,
        title: 'Comptabilité (G2)',
        description: "Formation en comptabilité générale, gestion financière, fiscalité et analyse des comptes d'entreprises.",
        competences: ['Comptabilité générale', 'Gestion financière', 'Fiscalité', 'Analyse comptable'],
        debouches: ['Comptable', 'Aide-comptable', 'Gestionnaire financier', 'Agent fiscal'],
      },
      {
        icon: ShoppingCart,
        title: 'Commerce (G3)',
        description: "Formation aux techniques commerciales, marketing, gestion des stocks et négociation commerciale.",
        competences: ['Techniques de vente', 'Marketing', 'Gestion des stocks', 'Négociation commerciale'],
        debouches: ['Commercial', 'Chef de rayon', 'Agent marketing', 'Entrepreneur'],
      },
    ],
  },
  {
    label: 'Séries Industrielles',
    color: 'bg-primary',
    filieres: [
      {
        icon: Building2,
        title: 'Génie Civil (F4)',
        description: "Formation en construction, dessin technique du bâtiment, topographie et conduite de chantiers.",
        competences: ['Dessin technique', 'Topographie', 'Conduite de chantiers', 'Calcul de structures'],
        debouches: ['Conducteur de travaux', 'Dessinateur en bâtiment', 'Chef de chantier', 'Technicien génie civil'],
      },
      {
        icon: Monitor,
        title: 'IMI (Installation et Maintenance Informatique)',
        description: "Formation en installation, configuration, maintenance et dépannage de systèmes informatiques et réseaux.",
        competences: ['Installation de systèmes', 'Maintenance matérielle', 'Configuration réseaux', 'Dépannage informatique'],
        debouches: ['Technicien informatique', 'Administrateur réseau', 'Support technique', 'Entrepreneur IT'],
      },
    ],
  },
  {
    label: 'CAP / DTM',
    color: 'bg-gold',
    filieres: [
      {
        icon: BrickWall,
        title: 'Construction Bâtiment',
        description: "Formation pratique en techniques de construction, lecture de plans et réalisation d'ouvrages de bâtiment.",
        competences: ['Lecture de plans', 'Techniques de construction', 'Coffrage et ferraillage', 'Finitions'],
        debouches: ['Maçon qualifié', 'Chef d\'équipe BTP', 'Entrepreneur en bâtiment'],
      },
      {
        icon: Car,
        title: 'Mécanique Automobile',
        description: "Formation en diagnostic, entretien et réparation de véhicules automobiles, moteurs et systèmes embarqués.",
        competences: ['Diagnostic moteur', 'Réparation automobile', 'Entretien préventif', 'Systèmes électriques auto'],
        debouches: ['Mécanicien automobile', 'Chef d\'atelier', 'Entrepreneur en mécanique auto'],
      },
      {
        icon: Compass,
        title: 'Opérateur Géomètre',
        description: "Formation en levés topographiques, bornage, cartographie et utilisation d'instruments de mesure.",
        competences: ['Levés topographiques', 'Bornage', 'Cartographie', 'Instruments de mesure'],
        debouches: ['Géomètre', 'Technicien topographe', 'Agent cadastral'],
      },
    ],
  },
  {
    label: 'Formations Techniques',
    color: 'bg-accent',
    filieres: [
      {
        icon: Zap,
        title: 'Électricité',
        description: "Formation en installations électriques domestiques et industrielles, normes de sécurité et énergies renouvelables.",
        competences: ['Installations électriques', 'Normes de sécurité', 'Câblage industriel', 'Énergie solaire'],
        debouches: ['Électricien bâtiment', 'Électricien industriel', 'Installateur solaire'],
      },
      {
        icon: Wrench,
        title: 'Mécanique',
        description: "Formation en mécanique générale, usinage, soudure et maintenance d'équipements industriels.",
        competences: ['Mécanique générale', 'Soudure', 'Usinage', 'Maintenance industrielle'],
        debouches: ['Mécanicien industriel', 'Soudeur', 'Technicien de maintenance'],
      },
      {
        icon: Hammer,
        title: 'Menuiserie',
        description: "Formation en travail du bois, fabrication de meubles, charpente et finitions bois.",
        competences: ['Travail du bois', 'Fabrication de meubles', 'Charpente', 'Finitions'],
        debouches: ['Menuisier', 'Ébéniste', 'Charpentier', 'Entrepreneur en menuiserie'],
      },
      {
        icon: BrickWall,
        title: 'Maçonnerie',
        description: "Formation en techniques de maçonnerie, enduits, carrelage et construction d'ouvrages en béton.",
        competences: ['Maçonnerie traditionnelle', 'Enduits et crépis', 'Carrelage', 'Béton armé'],
        debouches: ['Maçon qualifié', 'Carreleur', 'Chef d\'équipe BTP', 'Entrepreneur'],
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
            Des formations diversifiées pour des carrières techniques et professionnelles prometteuses.
          </p>
        </div>
      </section>

      {categories.map((cat) => (
        <section key={cat.label} className="section-padding">
          <div className="container-custom">
            <div className="flex items-center gap-3 mb-10 animate-on-scroll">
              <div className={`w-1.5 h-8 rounded-full ${cat.color}`} />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{cat.label}</h2>
            </div>

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

                    <div className="mb-5">
                      <h4 className="font-display font-semibold text-foreground text-sm mb-2">Débouchés</h4>
                      <ul className="space-y-1.5">
                        {f.debouches.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-xs font-body text-muted-foreground">
                            <ArrowRight className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" /> {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to="/inscription">
                      <Button variant="outline" size="sm" className="w-full">S'inscrire</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Filieres;

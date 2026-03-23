import { Monitor, Zap, Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import imiImg from '@/assets/filiere-imi.jpg';
import elecImg from '@/assets/filiere-electricite.jpg';
import mecaImg from '@/assets/filiere-mecanique.jpg';

const filieres = [
  {
    id: 'imi',
    icon: Monitor,
    title: 'Installation & Maintenance Informatique (IMI)',
    image: imiImg,
    description: "La filière IMI forme des techniciens capables d'installer, configurer, maintenir et dépanner les systèmes informatiques. Les élèves acquièrent des compétences en hardware, software, réseaux et administration systèmes.",
    competences: ['Installation de systèmes d\'exploitation', 'Maintenance de matériels informatiques', 'Configuration de réseaux locaux', 'Dépannage et diagnostic', 'Administration de serveurs'],
    debouches: ['Technicien de maintenance informatique', 'Administrateur réseau', 'Support technique', 'Entrepreneur en services IT', 'Technicien en cybercafé/centre multimédia'],
  },
  {
    id: 'electricite',
    icon: Zap,
    title: 'Électricité',
    image: elecImg,
    description: "La filière Électricité forme des professionnels maîtrisant les installations électriques domestiques et industrielles, la lecture de schémas électriques et les normes de sécurité en vigueur.",
    competences: ['Câblage et installations électriques', 'Lecture de schémas électriques', 'Maintenance d\'installations industrielles', 'Normes de sécurité électrique', 'Énergie solaire et renouvelable'],
    debouches: ['Électricien bâtiment', 'Technicien en électricité industrielle', 'Installateur solaire', 'Entrepreneur en électricité', 'Technicien de maintenance'],
  },
  {
    id: 'mecanique',
    icon: Wrench,
    title: 'Mécanique',
    image: mecaImg,
    description: "La filière Mécanique prépare les élèves à la maintenance, la réparation et l'entretien de véhicules et d'engins mécaniques. Formation complète couvrant moteurs, systèmes de transmission et hydraulique.",
    competences: ['Diagnostic de pannes moteur', 'Réparation de systèmes mécaniques', 'Entretien préventif de véhicules', 'Soudure et ajustage', 'Hydraulique et pneumatique'],
    debouches: ['Mécanicien automobile', 'Technicien de maintenance industrielle', 'Chef d\'atelier mécanique', 'Entrepreneur en mécanique', 'Technicien d\'engins lourds'],
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
            Trois filières d'excellence pour des carrières techniques prometteuses.
          </p>
        </div>
      </section>

      {filieres.map((f, i) => (
        <section key={f.id} className={`section-padding ${i % 2 === 1 ? 'bg-muted' : ''}`}>
          <div className="container-custom">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`animate-on-scroll ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={f.image} alt={f.title} className="rounded-2xl shadow-elevated w-full object-cover aspect-[3/2]" loading="lazy" width={800} height={544} />
              </div>
              <div className={`animate-on-scroll ${i % 2 === 1 ? 'lg:order-1' : ''}`} style={{ transitionDelay: '150ms' }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{f.title}</h2>
                </div>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">{f.description}</p>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-3">Compétences acquises</h4>
                    <ul className="space-y-2">
                      {f.competences.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" /> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-3">Débouchés</h4>
                    <ul className="space-y-2">
                      {f.debouches.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-gold mt-0.5 shrink-0" /> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link to="/inscription">
                  <Button variant="default">S'inscrire dans cette filière</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Filieres;

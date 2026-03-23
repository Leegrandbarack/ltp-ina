import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  'Formation théorique et pratique intensive',
  'Enseignants qualifiés et expérimentés',
  'Ateliers et laboratoires équipés',
  'Accompagnement vers l\'emploi',
];

export const AboutPreview = () => (
  <section className="section-padding">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-on-scroll">
          <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            Présentation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-6 leading-tight">
            Un lycée d'excellence au service du développement
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            Situé à Ina, commune de Bembéréké dans le département du Borgou, le Lycée Technique Professionnel d'Ina forme chaque année des centaines de jeunes dans les métiers techniques et professionnels.
          </p>
          <ul className="space-y-3 mb-8">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 font-body text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Link to="/a-propos">
            <Button variant="outline" className="group">
              En savoir plus
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        <div className="animate-on-scroll relative" style={{ transitionDelay: '150ms' }}>
          <div className="rounded-2xl shadow-elevated w-full aspect-[4/3] bg-muted overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
              alt="Bâtiment scolaire"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-primary text-primary-foreground rounded-xl p-5 shadow-elevated hidden sm:block">
            <p className="font-display text-3xl font-extrabold">20+</p>
            <p className="font-body text-sm opacity-80">Années d'excellence</p>
          </div>
          <div className="absolute -top-4 -right-4 bg-gold text-gold-foreground rounded-xl p-4 shadow-elevated hidden sm:block">
            <p className="font-display text-xl font-bold">A+</p>
            <p className="font-body text-xs">Qualité</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

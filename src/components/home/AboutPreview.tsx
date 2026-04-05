import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Target, Eye, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  'Établissement public sous tutelle du MESTFP',
  'Formation mixte ouverte aux garçons et aux filles',
  'Enseignement théorique et pratique en atelier',
  'Accompagnement vers l\'insertion professionnelle',
];

const values = [
  { icon: Target, title: 'Mission', text: 'Former des techniciens qualifiés pour le marché local' },
  { icon: Eye, title: 'Vision', text: 'Être un pôle technique de référence dans le Borgou' },
  { icon: Lightbulb, title: 'Valeurs', text: 'Discipline, travail, solidarité et respect' },
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
            Un lycée public au{' '}
            <span className="text-primary">cœur du Borgou</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            Le LTP INA est un établissement public d'enseignement technique et professionnel, situé à Ina dans la commune de Bembéréké. Il accueille chaque année des centaines de jeunes garçons et filles issus des communes environnantes.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            L'établissement propose des formations concrètes, axées sur la pratique en atelier et adaptées aux besoins des entreprises locales et régionales.
          </p>

          <ul className="space-y-3 mb-8">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 font-body text-sm text-foreground">
                <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                </div>
                {item}
              </li>
            ))}
          </ul>

          <Link to="/a-propos">
            <Button variant="outline" className="group">
              En savoir plus sur l'établissement
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="animate-on-scroll space-y-4" style={{ transitionDelay: '150ms' }}>
          <div className="rounded-2xl shadow-elevated w-full aspect-[4/3] bg-muted overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
              alt="Bâtiment administratif du LTP INA"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/50 to-transparent p-6">
              <p className="text-primary-foreground font-display font-bold text-lg">Depuis 2001 à Ina</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-4 shadow-soft text-center border border-border/50 hover:shadow-elevated transition-shadow">
                <v.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-display font-bold text-xs text-foreground">{v.title}</p>
                <p className="text-muted-foreground font-body text-[10px] mt-1 leading-tight">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

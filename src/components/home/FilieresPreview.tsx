import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Calculator, ShoppingCart, Building2, Monitor, Compass, Zap, PenTool, Car, BrickWall, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  {
    title: 'Filières CAP',
    color: 'bg-primary',
    items: [
      { icon: FileText, name: 'Secrétariat (G1)' },
      { icon: Calculator, name: 'Comptabilité (G2)' },
      { icon: ShoppingCart, name: 'Commerce (G3)' },
      { icon: Zap, name: 'Électrotechnique (F3)' },
      { icon: BrickWall, name: 'Construction Bâtiment (CB)' },
      { icon: Car, name: 'Mécanique Auto (MA)' },
      { icon: Compass, name: 'Opérateur-Géomètre (OG)' },
      { icon: PenTool, name: 'OBB (Ouvrage Bois & Bâtiment)' },
    ],
  },
  {
    title: 'Filières spécifiques',
    color: 'bg-gold',
    items: [
      { icon: Monitor, name: 'IMI – Informatique' },
      { icon: Droplets, name: 'Eau & Assainissement' },
      { icon: Building2, name: 'TEB – Étude Bâtiment' },
      { icon: BrickWall, name: 'RGO – Gros Œuvre' },
    ],
  },
];

export const FilieresPreview = () => (
  <section className="section-padding bg-muted/50">
    <div className="container-custom">
      <div className="text-center mb-14 animate-on-scroll">
        <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">
          Nos formations
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
          13 filières professionnelles
        </h2>
        <p className="text-muted-foreground font-body max-w-lg mx-auto">
          Des formations adaptées aux besoins du marché de l'emploi béninois et de la sous-région.
        </p>
      </div>

      <div className="space-y-8">
        {categories.map((cat, ci) => (
          <div key={cat.title} className="animate-on-scroll" style={{ transitionDelay: `${ci * 100}ms` }}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`w-3 h-3 rounded-full ${cat.color}`} />
              <h3 className="font-display font-bold text-lg text-foreground">{cat.title}</h3>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {cat.items.map((f) => (
                <div
                  key={f.name}
                  className="bg-card rounded-xl p-5 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
                    <f.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <p className="font-display font-bold text-sm text-foreground">{f.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 animate-on-scroll">
        <Link to="/filieres">
          <Button variant="default" size="lg" className="group">
            Voir toutes les filières
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

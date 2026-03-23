import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Calculator, ShoppingCart, Building2, Monitor, Wrench, Hammer, MapPin, Zap, Settings, PenTool, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const filieres = [
  { icon: FileText, name: 'Secrétariat (G1)', category: 'BAC' },
  { icon: Calculator, name: 'Comptabilité (G2)', category: 'BAC' },
  { icon: ShoppingCart, name: 'Commerce (G3)', category: 'BAC' },
  { icon: Building2, name: 'Génie Civil (F4)', category: 'Industriel' },
  { icon: Monitor, name: 'IMI', category: 'Industriel' },
  { icon: Wrench, name: 'Mécanique Auto', category: 'CAP/DTM' },
  { icon: Hammer, name: 'Construction Bâtiment', category: 'CAP/DTM' },
  { icon: MapPin, name: 'Opérateur Géomètre', category: 'CAP/DTM' },
  { icon: Zap, name: 'Électricité', category: 'Technique' },
  { icon: Settings, name: 'Mécanique', category: 'Technique' },
  { icon: PenTool, name: 'Menuiserie', category: 'Technique' },
  { icon: Layers, name: 'Maçonnerie', category: 'Technique' },
];

export const FilieresPreview = () => (
  <section className="section-padding bg-muted/50">
    <div className="container-custom">
      <div className="text-center mb-12 animate-on-scroll">
        <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">
          Nos formations
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
          12+ filières d'excellence
        </h2>
        <p className="text-muted-foreground font-body max-w-lg mx-auto">
          Des formations adaptées aux besoins du marché de l'emploi béninois et de la sous-région.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filieres.map((f, i) => (
          <div
            key={f.name}
            className="bg-card rounded-xl p-5 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group animate-on-scroll cursor-pointer"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <f.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <p className="font-display font-bold text-sm text-foreground mb-1">{f.name}</p>
            <span className="text-[11px] font-body font-medium text-accent uppercase tracking-wide">{f.category}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 animate-on-scroll">
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

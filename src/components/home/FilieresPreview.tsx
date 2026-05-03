import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { getFiliereIcon } from '@/lib/filiereIcons';

type Filiere = {
  id: string;
  title: string;
  category: string;
  icon: string;
  sort_order: number;
};

export const FilieresPreview = () => {
  const [filieres, setFilieres] = useState<Filiere[]>([]);

  useEffect(() => {
    supabase
      .from('filieres')
      .select('id,title,category,icon,sort_order')
      .eq('published', true)
      .order('sort_order', { ascending: true })
      .then(({ data }) => data && setFilieres(data as Filiere[]));
  }, []);

  const categories = [
    { key: 'cap', title: 'Filières CAP', color: 'bg-primary' },
    { key: 'specifique', title: 'Filières spécifiques', color: 'bg-gold' },
  ];

  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="text-center mb-14 animate-on-scroll">
          <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            Nos formations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            {filieres.length > 0 ? `${filieres.length} filières professionnelles` : 'Filières professionnelles'}
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Des formations adaptées aux besoins du marché de l'emploi béninois et de la sous-région.
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((cat, ci) => {
            const items = filieres.filter((f) => f.category === cat.key);
            if (items.length === 0) return null;
            return (
              <div key={cat.key} className="animate-on-scroll" style={{ transitionDelay: `${ci * 100}ms` }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-3 h-3 rounded-full ${cat.color}`} />
                  <h3 className="font-display font-bold text-lg text-foreground">{cat.title}</h3>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {items.map((f) => {
                    const Icon = getFiliereIcon(f.icon);
                    return (
                      <div
                        key={f.id}
                        className="bg-card rounded-xl p-5 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-border/50"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors duration-300">
                          <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                        <p className="font-display font-bold text-sm text-foreground">{f.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
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
};

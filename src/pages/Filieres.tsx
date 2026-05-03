import { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { supabase } from '@/integrations/supabase/client';
import { getFiliereIcon } from '@/lib/filiereIcons';

type Filiere = {
  id: string;
  title: string;
  description: string;
  competences: string[];
  debouches: string[];
  category: string;
  icon: string;
  sort_order: number;
};

const Filieres = () => {
  const ref = useScrollAnimation();
  const [filieres, setFilieres] = useState<Filiere[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('filieres')
      .select('*')
      .eq('published', true)
      .order('sort_order', { ascending: true })
      .then(({ data }) => {
        if (data) setFilieres(data as Filiere[]);
        setLoading(false);
      });
  }, []);

  const categories = [
    {
      key: 'cap',
      label: 'Filières menant au CAP',
      description: "Formations sanctionnées par le Certificat d'Aptitude Professionnelle",
      color: 'bg-primary',
    },
    {
      key: 'specifique',
      label: 'Filières spécifiques',
      description: 'Formations professionnelles avec parcours distinct (ne menant pas au CAP)',
      color: 'bg-gold',
    },
  ];

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

      {loading ? (
        <div className="section-padding text-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" />
        </div>
      ) : (
        categories.map((cat) => {
          const items = filieres.filter((f) => f.category === cat.key);
          if (items.length === 0) return null;
          return (
            <section key={cat.key} className="section-padding">
              <div className="container-custom">
                <div className="flex items-center gap-3 mb-2 animate-on-scroll">
                  <div className={`w-1.5 h-8 rounded-full ${cat.color}`} />
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">{cat.label}</h2>
                </div>
                <p className="text-muted-foreground font-body text-sm mb-10 ml-5 animate-on-scroll">{cat.description}</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((f, i) => {
                    const Icon = getFiliereIcon(f.icon);
                    return (
                      <div
                        key={f.id}
                        className="bg-card rounded-xl border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-on-scroll overflow-hidden"
                        style={{ transitionDelay: `${i * 80}ms` }}
                      >
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                              <Icon className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <h3 className="font-display text-lg font-bold text-foreground leading-tight">{f.title}</h3>
                          </div>
                          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">{f.description}</p>

                          {f.competences?.length > 0 && (
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
                          )}

                          {f.debouches?.length > 0 && (
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
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })
      )}

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

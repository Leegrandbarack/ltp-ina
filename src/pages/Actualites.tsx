import { useEffect, useState } from 'react';
import { Calendar, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type Actualite = {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  image_url: string | null;
  category: string | null;
  created_at: string;
};

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&q=80';

const Actualites = () => {
  const ref = useScrollAnimation();
  const [items, setItems] = useState<Actualite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from('actualites')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });
      setItems(data || []);
      setLoading(false);
    })();
  }, []);

  return (
    <div ref={ref}>
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="relative container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Actualités</h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Annonces officielles, événements et informations de la vie du lycée.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : items.length === 0 ? (
            <p className="text-center text-muted-foreground font-body py-20">
              Aucune actualité publiée pour le moment.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((article, i) => (
                <article
                  key={article.id}
                  className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group border border-border/50"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={article.image_url || FALLBACK_IMG}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {article.category && (
                      <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-muted-foreground text-xs font-body mb-2">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-4">
                      {article.excerpt || article.content}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Actualites;

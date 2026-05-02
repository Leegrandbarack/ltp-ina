import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

type Item = {
  id: string;
  title: string;
  excerpt: string | null;
  content: string;
  category: string | null;
  image_url: string | null;
  created_at: string;
};

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&q=80';

export const NewsSection = () => {
  const [news, setNews] = useState<Item[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from('actualites')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3);
      setNews(data || []);
    })();
  }, []);

  if (news.length === 0) return null;

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 animate-on-scroll">
          <div>
            <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Actualités
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">
              Informations récentes
            </h2>
          </div>
          <Link to="/actualites" className="hidden sm:inline-flex items-center gap-1.5 text-primary font-body font-semibold text-sm hover:gap-2.5 transition-all mt-4 sm:mt-0">
            Toutes les actualités <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <article
              key={item.id}
              className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group border border-border/50"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={item.image_url || FALLBACK_IMG}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                {item.category && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent text-accent-foreground text-[11px] font-body font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide inline-flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {item.category}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-muted-foreground mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span className="font-body text-xs">
                    {new Date(item.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt || item.content}
                </p>
                <Link to="/actualites" className="text-primary font-body font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Lire plus <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="sm:hidden text-center mt-8 animate-on-scroll">
          <Link to="/actualites" className="inline-flex items-center gap-1.5 text-primary font-body font-semibold text-sm">
            Toutes les actualités <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

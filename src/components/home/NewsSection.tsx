import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const news = [
  {
    title: 'Rentrée scolaire 2025-2026',
    date: '15 Sept 2025',
    excerpt: "Le LTP d'Ina accueille ses élèves pour une nouvelle année riche en apprentissages et innovations.",
    tag: 'Événement',
  },
  {
    title: 'Concours inter-lycées techniques',
    date: '20 Mars 2025',
    excerpt: 'Nos élèves ont brillamment représenté le lycée au concours national des lycées techniques.',
    tag: 'Concours',
  },
  {
    title: 'Nouveau laboratoire informatique',
    date: '10 Janv 2025',
    excerpt: "Inauguration d'un laboratoire équipé de 30 postes informatiques modernes pour la filière IMI.",
    tag: 'Infrastructure',
  },
];

export const NewsSection = () => (
  <section className="section-padding">
    <div className="container-custom">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 animate-on-scroll">
        <div>
          <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            Actualités
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">
            Dernières nouvelles
          </h2>
        </div>
        <Link to="/actualites" className="hidden sm:inline-flex items-center gap-1 text-primary font-body font-semibold text-sm hover:gap-2 transition-all mt-4 sm:mt-0">
          Toutes les actualités <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {news.map((item, i) => (
          <article
            key={item.title}
            className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group animate-on-scroll"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="h-44 bg-muted relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
              <div className="absolute top-3 left-3">
                <span className="bg-accent text-accent-foreground text-[11px] font-body font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  {item.tag}
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span className="font-body text-xs">{item.date}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{item.excerpt}</p>
              <Link to="/actualites" className="text-primary font-body font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                Lire plus <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const news = [
  {
    title: 'Rentrée scolaire 2025-2026',
    date: '15 Sept 2025',
    excerpt: "Le LTP d'Ina accueille ses élèves pour une nouvelle année riche en apprentissages et innovations pédagogiques.",
    tag: 'Événement',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80',
  },
  {
    title: 'Concours inter-lycées techniques',
    date: '20 Mars 2025',
    excerpt: 'Nos élèves ont brillamment représenté le lycée au concours national des lycées techniques du Bénin.',
    tag: 'Concours',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
  },
  {
    title: 'Nouveau laboratoire informatique',
    date: '10 Janv 2025',
    excerpt: "Inauguration d'un laboratoire équipé de 30 postes informatiques modernes pour la filière IMI.",
    tag: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
  },
];

export const NewsSection = () => (
  <section className="section-padding">
    <div className="container-custom">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 animate-on-scroll">
        <div>
          <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            Actualités
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">
            Dernières nouvelles
          </h2>
        </div>
        <Link to="/actualites" className="hidden sm:inline-flex items-center gap-1.5 text-primary font-body font-semibold text-sm hover:gap-2.5 transition-all mt-4 sm:mt-0">
          Toutes les actualités <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {news.map((item, i) => (
          <article
            key={item.title}
            className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group animate-on-scroll border border-border/50"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="h-48 relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="bg-accent text-accent-foreground text-[11px] font-body font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide inline-flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {item.tag}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-1.5 text-muted-foreground mb-3">
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

      <div className="sm:hidden text-center mt-8 animate-on-scroll">
        <Link to="/actualites" className="inline-flex items-center gap-1.5 text-primary font-body font-semibold text-sm">
          Toutes les actualités <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

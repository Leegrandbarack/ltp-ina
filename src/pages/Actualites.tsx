import { Calendar, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const articles = [
  {
    title: 'Rentrée 2025-2026 : le LTP INA accueille ses nouveaux élèves',
    date: '15 Septembre 2025',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80',
    excerpt: "La cérémonie de rentrée s'est tenue en présence du sous-préfet d'Ina, des représentants de la DDETP du Borgou et de l'APE. Plus de 200 nouveaux élèves, garçons et filles, ont été accueillis cette année.",
    category: 'Rentrée',
  },
  {
    title: 'Remise de diplômes : promotion 2024',
    date: '15 Juillet 2025',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
    excerpt: "96 diplômés ont reçu leurs attestations de fin de formation dans la cour du lycée. Plusieurs anciens élèves, aujourd'hui installés à leur compte, ont partagé leur parcours avec les sortants.",
    category: 'Cérémonie',
  },
  {
    title: 'Trois prix au concours inter-lycées techniques à Parakou',
    date: '20 Mars 2025',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    excerpt: "Les élèves du LTP INA ont décroché le premier prix en mécanique automobile, le deuxième en électricité et le troisième en génie civil. Une performance saluée par la direction départementale.",
    category: 'Compétition',
  },
  {
    title: 'Le laboratoire informatique enfin opérationnel',
    date: '10 Janvier 2025',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
    excerpt: "Après plusieurs mois de travaux, la salle informatique est équipée de 30 postes, d'un vidéoprojecteur et d'une connexion internet. Les élèves de la filière IMI en bénéficient en priorité.",
    category: 'Infrastructure',
  },
  {
    title: 'Journée portes ouvertes : les familles visitent les ateliers',
    date: '22 Novembre 2024',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    excerpt: "Une centaine de parents et futurs élèves ont découvert les installations du lycée. Les enseignants ont présenté chaque filière et répondu aux questions sur les conditions d'admission.",
    category: 'Événement',
  },
  {
    title: 'Séminaire de formation continue pour les enseignants',
    date: '5 Octobre 2024',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80',
    excerpt: "Un atelier de trois jours a réuni les enseignants des filières industrielles autour des nouvelles techniques de soudure et de la maintenance préventive des équipements d'atelier.",
    category: 'Formation',
  },
];

const Actualites = () => {
  const ref = useScrollAnimation();

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <article
                key={article.title}
                className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group animate-on-scroll border border-border/50"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-body mb-2">
                    <Calendar className="w-3 h-3" /> {article.date}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-3 mb-3">{article.excerpt}</p>
                  <button className="text-primary font-body font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Lire la suite <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Actualites;

import { Calendar, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const articles = [
  {
    title: 'Rentrée scolaire 2025-2026 : le LTP INA ouvre ses portes',
    date: '15 Septembre 2025',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80',
    excerpt: "La cérémonie de rentrée s'est tenue en présence du sous-préfet de Bembéréké, des représentants de la Direction Départementale de l'Enseignement et de l'ensemble du personnel. Plus de 200 nouveaux élèves ont été accueillis cette année.",
    category: 'Rentrée',
  },
  {
    title: 'Remise des diplômes de la promotion 2024',
    date: '15 Juillet 2025',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80',
    excerpt: "96 diplômés ont reçu leurs attestations lors d'une cérémonie organisée dans la cour du lycée. Plusieurs anciens élèves, aujourd'hui en activité, ont pris la parole pour encourager les sortants.",
    category: 'Cérémonie',
  },
  {
    title: 'Nos élèves se distinguent au concours national des lycées techniques',
    date: '20 Mars 2025',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    excerpt: "L'équipe du LTP INA a décroché trois prix lors de la compétition organisée à Parakou : premier prix en mécanique automobile, deuxième en électricité et troisième en génie civil.",
    category: 'Compétition',
  },
  {
    title: 'Un nouveau laboratoire informatique pour la filière IMI',
    date: '10 Janvier 2025',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
    excerpt: "Grâce à un financement de la coopération technique, le lycée dispose désormais d'une salle équipée de 30 ordinateurs, d'un vidéoprojecteur et d'une connexion internet.",
    category: 'Infrastructure',
  },
  {
    title: 'Journée portes ouvertes : les parents découvrent les ateliers',
    date: '22 Novembre 2024',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    excerpt: "Une centaine de parents et futurs élèves ont visité les installations du lycée. Les enseignants ont présenté les différentes filières et répondu aux questions des familles.",
    category: 'Événement',
  },
  {
    title: 'Formation continue : les enseignants se perfectionnent',
    date: '5 Octobre 2024',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80',
    excerpt: "Un séminaire de trois jours a été organisé pour les enseignants des filières industrielles, portant sur les nouvelles techniques de soudure et la maintenance des équipements.",
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

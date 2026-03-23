import { Calendar, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImg from '@/assets/hero-students.jpg';
import eventImg from '@/assets/gallery-event.jpg';
import classImg from '@/assets/gallery-classroom.jpg';
import workshopImg from '@/assets/gallery-workshop.jpg';

const articles = [
  {
    title: 'Rentrée scolaire 2025-2026 : Le LTP Ina accueille de nouveaux élèves',
    date: '15 Septembre 2025',
    image: heroImg,
    excerpt: "La rentrée scolaire 2025-2026 s'est déroulée dans une ambiance festive avec l'accueil de plus de 200 nouveaux élèves inscrits dans les trois filières.",
    category: 'Événement',
  },
  {
    title: 'Cérémonie de remise des diplômes promotion 2024',
    date: '15 Juillet 2025',
    image: eventImg,
    excerpt: "Une cérémonie émouvante pour célébrer les diplômés de la promotion 2024 avec un taux de réussite record de 96%.",
    category: 'Cérémonie',
  },
  {
    title: 'Concours national des lycées techniques du Bénin',
    date: '20 Mars 2025',
    image: classImg,
    excerpt: "Nos élèves ont brillamment représenté le lycée avec 3 prix remportés lors du concours national.",
    category: 'Compétition',
  },
  {
    title: 'Inauguration du nouveau laboratoire informatique',
    date: '10 Janvier 2025',
    image: workshopImg,
    excerpt: "Le LTP Ina se dote d'un laboratoire informatique moderne équipé de 30 postes et d'une connexion internet haut débit.",
    category: 'Infrastructure',
  },
  {
    title: 'Formation continue des enseignants en nouvelles technologies',
    date: '5 Décembre 2024',
    image: classImg,
    excerpt: "Nos enseignants ont bénéficié d'une formation intensive sur les dernières innovations pédagogiques et techniques.",
    category: 'Formation',
  },
  {
    title: 'Journée portes ouvertes : Découvrez le LTP Ina',
    date: '15 Novembre 2024',
    image: heroImg,
    excerpt: "Une journée dédiée aux parents et futurs élèves pour découvrir nos installations, rencontrer les enseignants et explorer les filières.",
    category: 'Événement',
  },
];

const Actualites = () => {
  const ref = useScrollAnimation();

  return (
    <div ref={ref}>
      <section className="gradient-primary py-24 sm:py-32 text-center">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Actualités</h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Restez informé des dernières nouvelles et événements du LTP Ina.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <article
                key={article.title}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 group animate-on-scroll"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={500}
                  />
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-body font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs font-body mb-2">
                    <Calendar className="w-3 h-3" /> {article.date}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-3 mb-3">{article.excerpt}</p>
                  <button className="text-accent font-body font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Lire plus <ArrowRight className="w-3 h-3" />
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

import { Link } from 'react-router-dom';
import { Users, BookOpen, Award, GraduationCap, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImg from '@/assets/hero-students.jpg';
import schoolImg from '@/assets/school-building.jpg';

const stats = [
  { icon: Users, value: '850+', label: 'Élèves formés' },
  { icon: BookOpen, value: '3', label: 'Filières techniques' },
  { icon: Award, value: '45+', label: 'Enseignants qualifiés' },
  { icon: GraduationCap, value: '95%', label: 'Taux de réussite' },
];

const testimonials = [
  {
    name: 'Abdoulaye K.',
    role: 'Ancien élève, IMI',
    text: "Le LTP d'Ina m'a donné les compétences techniques pour lancer ma propre entreprise de maintenance informatique. Une formation d'excellence !",
  },
  {
    name: 'Fatouma B.',
    role: 'Élève en Électricité',
    text: "Les ateliers pratiques sont incroyables. On apprend en faisant, et les professeurs sont très disponibles pour nous accompagner.",
  },
  {
    name: 'Ibrahim S.',
    role: 'Ancien élève, Mécanique',
    text: "Grâce à ma formation au LTP, j'ai décroché un emploi dans une grande entreprise mécanique à Cotonou dès ma sortie.",
  },
];

const news = [
  {
    title: 'Rentrée scolaire 2025-2026',
    date: '15 Sept 2025',
    excerpt: "Le LTP d'Ina accueille ses élèves pour une nouvelle année riche en apprentissages et innovations.",
  },
  {
    title: 'Concours inter-lycées techniques',
    date: '20 Mars 2025',
    excerpt: 'Nos élèves ont brillamment représenté le lycée au concours national des lycées techniques du Bénin.',
  },
  {
    title: 'Nouveau laboratoire informatique',
    date: '10 Janv 2025',
    excerpt: "Inauguration d'un laboratoire équipé de 30 postes informatiques modernes pour la filière IMI.",
  },
];

const Index = () => {
  const ref = useScrollAnimation();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Élèves du LTP Ina" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="relative container-custom px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-accent font-body font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Lycée Technique Professionnel d'Ina
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Former les leaders techniques de <span className="text-gold">demain</span>
            </h1>
            <p className="text-primary-foreground/80 font-body text-lg sm:text-xl mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Une formation d'excellence en informatique, électricité et mécanique au cœur du Bénin.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Link to="/inscription">
                <Button variant="hero">S'inscrire maintenant</Button>
              </Link>
              <Link to="/a-propos">
                <Button variant="heroOutline">Découvrir le lycée</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-10">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-6 text-center shadow-elevated animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground text-sm font-body mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <p className="text-accent font-body font-semibold text-sm uppercase tracking-widest mb-2">À propos</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Un lycée d'excellence au service du développement
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Fondé pour répondre aux besoins en formation technique du nord Bénin, le Lycée Technique Professionnel d'Ina forme chaque année des centaines de jeunes dans les métiers de l'informatique, de l'électricité et de la mécanique.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Notre approche pédagogique allie théorie solide et pratique intensive, préparant nos diplômés à intégrer le monde professionnel avec confiance.
              </p>
              <Link to="/a-propos">
                <Button variant="outline" className="group">
                  En savoir plus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="animate-on-scroll relative" style={{ transitionDelay: '200ms' }}>
              <img
                src={schoolImg}
                alt="Bâtiment du lycée"
                className="rounded-2xl shadow-elevated w-full object-cover aspect-[4/3]"
                loading="lazy"
                width={1280}
                height={720}
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-xl p-5 shadow-elevated hidden sm:block">
                <p className="font-display text-2xl font-bold">20+</p>
                <p className="font-body text-sm">Années d'excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-accent font-body font-semibold text-sm uppercase tracking-widest mb-2">Actualités</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Dernières nouvelles</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <div
                key={item.title}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="text-accent font-body text-xs font-semibold uppercase tracking-wider">{item.date}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{item.excerpt}</p>
                <Link to="/actualites" className="text-accent font-body font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Lire plus <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-accent font-body font-semibold text-sm uppercase tracking-widest mb-2">Témoignages</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Ce que disent nos élèves</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-card rounded-xl p-6 shadow-card border border-border animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Quote className="w-8 h-8 text-accent/30 mb-3" />
                <p className="text-foreground font-body leading-relaxed mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-display font-bold text-foreground">{t.name}</p>
                  <p className="text-muted-foreground font-body text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="gradient-primary section-padding">
          <div className="container-custom text-center animate-on-scroll">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Prêt à construire votre avenir ?
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg max-w-xl mx-auto mb-8">
              Rejoignez le Lycée Technique Professionnel d'Ina et accédez à une formation de qualité qui ouvre les portes du monde professionnel.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/inscription">
                <Button variant="gold" size="lg">S'inscrire maintenant</Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="lg">Nous contacter</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

import { Target, Eye, Shield, Lightbulb, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import schoolImg from '@/assets/school-building.jpg';
import directorImg from '@/assets/director.jpg';

const values = [
  { icon: Shield, title: 'Discipline', desc: 'Rigueur et respect des règles pour un environnement propice à l\'apprentissage.' },
  { icon: Award, title: 'Excellence', desc: 'Viser toujours le meilleur dans la formation et l\'accompagnement de nos élèves.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Adopter les nouvelles technologies et méthodes pédagogiques modernes.' },
];

const APropos = () => {
  const ref = useScrollAnimation();

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={schoolImg} alt="Lycée" className="w-full h-full object-cover" loading="lazy" width={1280} height={720} />
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="relative container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">À propos du LTP Ina</h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Découvrez l'histoire, la mission et les valeurs qui font du Lycée Technique Professionnel d'Ina une référence au Bénin.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <p className="text-accent font-body font-semibold text-sm uppercase tracking-widest mb-2">Notre histoire</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">Plus de 20 ans d'engagement</h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Le Lycée Technique Professionnel d'Ina a été créé pour répondre au besoin croissant de formation technique dans la région du Borgou au nord du Bénin. Depuis sa fondation, l'établissement n'a cessé de se développer, formant des générations de techniciens qualifiés.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Au fil des années, le lycée a su s'adapter aux évolutions technologiques en modernisant ses ateliers, en enrichissant ses programmes et en renforçant son corps enseignant. Aujourd'hui, le LTP d'Ina est reconnu comme l'un des meilleurs établissements techniques du nord Bénin.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-card animate-on-scroll">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Notre Mission</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Former des techniciens compétents, créatifs et responsables, capables de contribuer au développement socio-économique du Bénin et de l'Afrique à travers des compétences techniques solides et une éthique professionnelle irréprochable.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-card animate-on-scroll" style={{ transitionDelay: '150ms' }}>
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Notre Vision</h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                Devenir le lycée technique de référence en Afrique de l'Ouest, reconnu pour l'excellence de ses formations, la qualité de ses infrastructures et l'insertion professionnelle réussie de ses diplômés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <p className="text-accent font-body font-semibold text-sm uppercase tracking-widest mb-2">Nos valeurs</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Ce qui nous guide</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="text-center animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10 items-center animate-on-scroll">
            <div className="lg:col-span-2 flex justify-center">
              <img src={directorImg} alt="Le Directeur" className="rounded-2xl shadow-elevated w-64 h-80 object-cover" loading="lazy" width={512} height={640} />
            </div>
            <div className="lg:col-span-3">
              <p className="text-accent font-body font-semibold text-sm uppercase tracking-widest mb-2">Mot du Directeur</p>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">Un message de notre Directeur</h2>
              <blockquote className="text-muted-foreground font-body leading-relaxed italic border-l-4 border-accent pl-6">
                "Au Lycée Technique Professionnel d'Ina, nous croyons que chaque élève porte en lui le potentiel de transformer sa communauté. Notre engagement est de fournir une éducation technique de qualité, ancrée dans la pratique, pour que nos diplômés soient immédiatement opérationnels sur le marché du travail. Nous invitons chaque jeune à nous rejoindre pour bâtir ensemble l'avenir du Bénin."
              </blockquote>
              <p className="mt-4 font-display font-bold text-foreground">M. le Directeur</p>
              <p className="text-muted-foreground font-body text-sm">Directeur du LTP d'Ina</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APropos;

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, MapPin, School } from 'lucide-react';

export const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background layers */}
    <div className="absolute inset-0 bg-primary">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80')",
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/4 right-[10%] w-80 h-80 border border-primary-foreground/5 rounded-full" />
      <div className="absolute top-1/3 right-[15%] w-56 h-56 border border-primary-foreground/5 rounded-full" />
      <div className="absolute bottom-1/4 left-[5%] w-40 h-40 bg-accent/5 rounded-full blur-2xl" />
    </div>

    <div className="relative container-custom px-4 sm:px-6 lg:px-8 py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/15 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <School className="w-3.5 h-3.5 text-gold" />
            <span className="text-primary-foreground/80 font-body text-xs font-medium tracking-wide">
              Établissement public — Inscriptions 2025-2026
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground leading-[1.08] mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Lycée Technique Professionnel{' '}
            <span className="relative">
              <span className="text-gold">d'Ina</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gold/30 rounded-full" />
            </span>
          </h1>

          <p className="text-primary-foreground/70 font-body text-lg sm:text-xl max-w-xl mb-4 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            Établissement public mixte sous tutelle du Ministère des Enseignements Secondaire, Technique et de la Formation Professionnelle. Plus de 12 filières ouvertes aux garçons et aux filles.
          </p>

          <div className="flex items-center gap-2 text-primary-foreground/50 font-body text-sm mb-10 animate-fade-in-up" style={{ animationDelay: '0.55s' }}>
            <MapPin className="w-3.5 h-3.5" />
            <span>Ina, Commune de Bembéréké — Département du Borgou, Bénin</span>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Link to="/filieres">
              <Button variant="hero" className="group">
                Découvrir nos formations
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/admissions">
              <Button variant="heroOutline">Déposer un dossier</Button>
            </Link>
          </div>
        </div>

        {/* Right side — featured card */}
        <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elevated aspect-[4/3] bg-muted">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
                alt="Vue du campus du LTP INA à Bembéréké"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-primary-foreground font-body text-sm opacity-80">
                  Un cadre d'apprentissage adapté aux réalités du terrain
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground rounded-xl p-4 shadow-elevated flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <School className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-display font-bold text-sm">Mixte</p>
                <p className="font-body text-xs text-muted-foreground">Garçons & Filles</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-gold text-gold-foreground rounded-xl px-4 py-3 shadow-elevated">
              <p className="font-display font-bold text-lg">12+</p>
              <p className="font-body text-[10px] uppercase tracking-wider">Filières</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom wave */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
        <path d="M0 80V40C360 0 720 60 1080 30C1260 15 1380 20 1440 25V80H0Z" fill="hsl(220, 20%, 97%)" />
      </svg>
    </div>
  </section>
);

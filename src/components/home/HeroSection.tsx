import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-primary">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1920&q=80')" }}
      />
      <div className="absolute inset-0 gradient-hero" />
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
    </div>
    <div className="relative container-custom px-4 sm:px-6 lg:px-8 py-32">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-primary-foreground/80 font-body text-xs font-medium tracking-wide uppercase">
            Inscriptions ouvertes 2025-2026
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Bienvenue au{' '}
          <span className="text-gold">LTP INA</span>
        </h1>
        <p className="text-primary-foreground/75 font-body text-lg sm:text-xl max-w-xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Former les talents techniques de demain. Plus de 12 filières d'excellence en secrétariat, informatique, génie civil, mécanique et plus.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <Link to="/filieres">
            <Button variant="hero" className="group">
              Découvrir les filières
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/inscription">
            <Button variant="heroOutline">S'inscrire maintenant</Button>
          </Link>
        </div>
      </div>
    </div>
    {/* Bottom wave */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="hsl(220, 20%, 97%)" />
      </svg>
    </div>
  </section>
);

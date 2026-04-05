import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home, Search, ArrowLeft, BookOpen, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center section-padding">
      <div className="container-custom max-w-lg text-center">
        <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl font-display font-bold text-primary-foreground">404</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Page introuvable
        </h1>
        <p className="text-muted-foreground font-body mb-8 leading-relaxed">
          La page que vous recherchez n'existe pas ou a été déplacée. Vérifiez l'adresse ou utilisez les liens ci-dessous.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link to="/">
            <Button className="w-full sm:w-auto gap-2">
              <Home className="w-4 h-4" /> Accueil
            </Button>
          </Link>
          <Link to="/filieres">
            <Button variant="outline" className="w-full sm:w-auto gap-2">
              <BookOpen className="w-4 h-4" /> Formations
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="w-full sm:w-auto gap-2">
              <Phone className="w-4 h-4" /> Contact
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

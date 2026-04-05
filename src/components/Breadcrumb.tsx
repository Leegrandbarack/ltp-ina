import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const routeLabels: Record<string, string> = {
  '/': 'Accueil',
  '/a-propos': 'Présentation',
  '/filieres': 'Formations',
  '/admissions': 'Admissions',
  '/vie-scolaire': 'Vie scolaire',
  '/actualites': 'Actualités',
  '/galerie': 'Galerie',
  '/contact': 'Contact',
};

const Breadcrumb = () => {
  const location = useLocation();
  const currentLabel = routeLabels[location.pathname];

  if (location.pathname === '/') return null;

  return (
    <nav aria-label="Fil d'Ariane" className="bg-secondary/50 border-b border-border">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-2 text-sm font-body">
          <li>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Accueil</span>
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5 text-muted-foreground" /></li>
          <li className="text-foreground font-medium">{currentLabel || 'Page'}</li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;

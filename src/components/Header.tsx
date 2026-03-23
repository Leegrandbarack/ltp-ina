import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/a-propos' },
  { label: 'Filières', path: '/filieres' },
  { label: 'Actualités', path: '/actualites' },
  { label: 'Galerie', path: '/galerie' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container-custom flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <GraduationCap className="w-6 h-6 text-accent-foreground" />
          </div>
          <div className="hidden sm:block">
            <p className="text-primary-foreground font-display font-bold text-lg leading-tight">LTP Ina</p>
            <p className="text-primary-foreground/70 text-xs font-body">Lycée Technique Professionnel</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-sm font-medium font-body transition-all duration-300 ${
                location.pathname === item.path
                  ? 'bg-accent text-accent-foreground'
                  : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/inscription">
            <Button variant="gold" size="sm">S'inscrire</Button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 animate-fade-in">
          <nav className="container-custom px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium font-body transition-all ${
                  location.pathname === item.path
                    ? 'bg-accent text-accent-foreground'
                    : 'text-primary-foreground/80 hover:bg-primary-foreground/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/inscription" onClick={() => setIsOpen(false)}>
              <Button variant="gold" className="w-full mt-2">S'inscrire</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

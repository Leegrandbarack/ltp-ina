import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchDialog from './SearchDialog';

const navItems = [
  { label: 'Accueil', path: '/' },
  { label: 'Présentation', path: '/a-propos' },
  { label: 'Formations', path: '/filieres' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Vie scolaire', path: '/vie-scolaire' },
  { label: 'Actualités', path: '/actualites' },
  { label: 'Galerie', path: '/galerie' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-card/95 backdrop-blur-md shadow-soft border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 sm:h-[72px] px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <p className={`font-display font-bold text-lg leading-tight transition-colors ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              LTP INA
            </p>
            <p className={`text-[11px] font-body transition-colors ${scrolled ? 'text-muted-foreground' : 'text-primary-foreground/60'}`}>
              Lycée Technique Professionnel
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-lg text-[13px] font-medium font-body transition-all duration-200 ${
                location.pathname === item.path
                  ? scrolled
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-primary-foreground/20 text-primary-foreground'
                  : scrolled
                    ? 'text-foreground hover:bg-muted'
                    : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link to="/admissions">
            <Button variant="gold" size="sm">S'inscrire</Button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-elevated animate-fade-in">
          <nav className="container-custom px-4 py-3 flex flex-col gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium font-body transition-all ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-border">
              <Link to="/admissions">
                <Button variant="gold" className="w-full">S'inscrire</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

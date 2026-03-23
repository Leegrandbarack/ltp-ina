import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-lg">LTP Ina</p>
                <p className="text-primary-foreground/60 text-xs font-body">Lycée Technique Professionnel</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm font-body leading-relaxed">
              Former les leaders techniques de demain au cœur du Bénin. Excellence, discipline et innovation.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-2 font-body text-sm">
              {[
                { label: 'Accueil', path: '/' },
                { label: 'À propos', path: '/a-propos' },
                { label: 'Filières', path: '/filieres' },
                { label: 'Actualités', path: '/actualites' },
                { label: 'Galerie', path: '/galerie' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Filières</h4>
            <ul className="space-y-2 font-body text-sm">
              <li className="text-primary-foreground/70">Installation & Maintenance Informatique</li>
              <li className="text-primary-foreground/70">Électricité</li>
              <li className="text-primary-foreground/70">Mécanique</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                Ina, Commune de Bembèrèkè, Borgou, Bénin
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4 shrink-0 text-accent" />
                +229 97 00 00 00
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="w-4 h-4 shrink-0 text-accent" />
                contact@ltpina.bj
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/50 text-sm font-body">
            © {new Date().getFullYear()} Lycée Technique Professionnel d'Ina. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

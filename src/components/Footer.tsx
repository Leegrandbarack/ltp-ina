import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Facebook, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-lg">LTP INA</p>
                <p className="text-primary-foreground/60 text-xs font-body">Lycée Technique Professionnel</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm font-body leading-relaxed">
              Établissement public de formation technique et professionnelle, situé à Ina dans la commune de Bembéréké, au Borgou.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2 font-body text-sm">
              {[
                { label: 'Accueil', path: '/' },
                { label: 'Présentation', path: '/a-propos' },
                { label: 'Formations', path: '/filieres' },
                { label: 'Admissions', path: '/admissions' },
                { label: 'Vie scolaire', path: '/vie-scolaire' },
                { label: 'Actualités', path: '/actualites' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Formations</h4>
            <ul className="space-y-2 font-body text-sm">
              <li className="text-primary-foreground/70">Secrétariat (G1)</li>
              <li className="text-primary-foreground/70">Comptabilité (G2)</li>
              <li className="text-primary-foreground/70">Commerce (G3)</li>
              <li className="text-primary-foreground/70">Génie Civil (F4)</li>
              <li className="text-primary-foreground/70">IMI – Informatique</li>
              <li className="text-primary-foreground/70">Mécanique Auto</li>
              <li className="text-primary-foreground/70">Électricité</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                Ina, Commune de Bembéréké, Borgou, Bénin
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4 shrink-0 text-accent" />
                +229 XX XX XX XX
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail className="w-4 h-4 shrink-0 text-accent" />
                contact@ltp-ina.bj
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm font-body">
            © {new Date().getFullYear()} Lycée Technique Professionnel d'Ina — Tous droits réservés
          </p>
          <div className="flex gap-4 text-primary-foreground/50 text-xs font-body">
            <Link to="/a-propos" className="hover:text-primary-foreground transition-colors">Mentions légales</Link>
            <Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

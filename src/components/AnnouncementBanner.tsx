import { useState } from 'react';
import { X, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnnouncementBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-primary text-primary-foreground relative z-[60]">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-body">
          <Megaphone className="w-4 h-4 shrink-0" />
          <p>
            <span className="font-semibold">Inscriptions 2024-2025 ouvertes !</span>
            <span className="hidden sm:inline"> — Déposez votre dossier avant le 30 septembre.</span>
          </p>
          <Link to="/admissions" className="underline font-medium ml-1 hover:opacity-80 transition-opacity whitespace-nowrap">
            En savoir plus
          </Link>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="p-1 rounded hover:bg-primary-foreground/10 transition-colors shrink-0"
          aria-label="Fermer l'annonce"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;

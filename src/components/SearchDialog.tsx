import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from '@/components/ui/command';

const searchData = [
  // Pages
  { type: 'page', label: 'Accueil', path: '/', keywords: 'accueil home bienvenue' },
  { type: 'page', label: 'Présentation', path: '/a-propos', keywords: 'présentation historique mission vision directeur' },
  { type: 'page', label: 'Formations & Filières', path: '/filieres', keywords: 'filières formations bac cap' },
  { type: 'page', label: 'Admissions & Inscription', path: '/admissions', keywords: 'admission inscription inscrire documents dossier' },
  { type: 'page', label: 'Vie scolaire', path: '/vie-scolaire', keywords: 'vie scolaire règlement emploi temps activités' },
  { type: 'page', label: 'Actualités', path: '/actualites', keywords: 'actualités nouvelles annonces événements' },
  { type: 'page', label: 'Galerie', path: '/galerie', keywords: 'galerie photos images' },
  { type: 'page', label: 'Contact', path: '/contact', keywords: 'contact adresse téléphone email' },
  // Filières
  { type: 'filiere', label: 'Secrétariat (G1)', path: '/filieres', keywords: 'secrétariat g1 bureautique administration' },
  { type: 'filiere', label: 'Comptabilité (G2)', path: '/filieres', keywords: 'comptabilité g2 finance gestion' },
  { type: 'filiere', label: 'Commerce (G3)', path: '/filieres', keywords: 'commerce g3 marketing vente' },
  { type: 'filiere', label: 'Génie Civil (F4)', path: '/filieres', keywords: 'génie civil f4 bâtiment construction' },
  { type: 'filiere', label: 'IMI – Informatique', path: '/filieres', keywords: 'imi informatique maintenance réseau' },
  { type: 'filiere', label: 'Électricité', path: '/filieres', keywords: 'électricité installation câblage' },
  { type: 'filiere', label: 'Mécanique Automobile', path: '/filieres', keywords: 'mécanique automobile voiture moteur' },
  { type: 'filiere', label: 'Menuiserie', path: '/filieres', keywords: 'menuiserie bois meubles charpente' },
  { type: 'filiere', label: 'Maçonnerie', path: '/filieres', keywords: 'maçonnerie béton construction' },
  // Actualités
  { type: 'actualite', label: 'Résultats des examens', path: '/actualites', keywords: 'résultats examens bac cap' },
  { type: 'actualite', label: 'Rentrée scolaire', path: '/actualites', keywords: 'rentrée scolaire calendrier' },
  { type: 'actualite', label: 'Événements', path: '/actualites', keywords: 'événements cérémonie journée' },
];

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const navigate = useNavigate();

  const handleSelect = useCallback((path: string) => {
    onOpenChange(false);
    navigate(path);
  }, [navigate, onOpenChange]);

  const pages = searchData.filter(d => d.type === 'page');
  const filieres = searchData.filter(d => d.type === 'filiere');
  const actualites = searchData.filter(d => d.type === 'actualite');

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Rechercher une page, filière, actualité..." />
      <CommandList>
        <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
        <CommandGroup heading="Pages">
          {pages.map(item => (
            <CommandItem key={item.label} value={`${item.label} ${item.keywords}`} onSelect={() => handleSelect(item.path)}>
              <Search className="mr-2 h-4 w-4 text-muted-foreground" />
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Filières">
          {filieres.map(item => (
            <CommandItem key={item.label} value={`${item.label} ${item.keywords}`} onSelect={() => handleSelect(item.path)}>
              <Search className="mr-2 h-4 w-4 text-muted-foreground" />
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actualités">
          {actualites.map(item => (
            <CommandItem key={item.label} value={`${item.label} ${item.keywords}`} onSelect={() => handleSelect(item.path)}>
              <Search className="mr-2 h-4 w-4 text-muted-foreground" />
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;

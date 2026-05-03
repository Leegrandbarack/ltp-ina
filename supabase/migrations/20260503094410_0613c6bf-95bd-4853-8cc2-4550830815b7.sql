
CREATE TABLE public.filieres (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  competences TEXT[] NOT NULL DEFAULT '{}',
  debouches TEXT[] NOT NULL DEFAULT '{}',
  category TEXT NOT NULL DEFAULT 'cap',
  icon TEXT NOT NULL DEFAULT 'GraduationCap',
  sort_order INTEGER NOT NULL DEFAULT 0,
  published BOOLEAN NOT NULL DEFAULT true,
  author_id UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.filieres ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published filieres"
  ON public.filieres FOR SELECT
  USING (published = true);

CREATE POLICY "Admins can manage all filieres"
  ON public.filieres FOR ALL
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE TRIGGER update_filieres_updated_at
  BEFORE UPDATE ON public.filieres
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO public.filieres (title, description, competences, debouches, category, icon, sort_order) VALUES
('Secrétariat (G1)', 'Techniques de secrétariat, gestion administrative, bureautique et communication professionnelle.', ARRAY['Techniques de secrétariat','Bureautique avancée','Communication professionnelle','Gestion administrative'], ARRAY['Secrétaire de direction','Assistant(e) administratif(ve)','Agent de bureau'], 'cap', 'FileText', 1),
('Comptabilité (G2)', 'Comptabilité générale, gestion financière, fiscalité et analyse des comptes d''entreprises.', ARRAY['Comptabilité générale','Gestion financière','Fiscalité','Analyse comptable'], ARRAY['Comptable','Aide-comptable','Gestionnaire financier'], 'cap', 'Calculator', 2),
('Commerce (G3)', 'Techniques commerciales, marketing, gestion des stocks et négociation commerciale.', ARRAY['Techniques de vente','Marketing','Gestion des stocks','Négociation commerciale'], ARRAY['Commercial','Chef de rayon','Agent marketing'], 'cap', 'ShoppingCart', 3),
('Électrotechnique (F3)', 'Installations électriques domestiques et industrielles, automatisme et maintenance des équipements électriques.', ARRAY['Installations électriques','Automatisme','Maintenance électrique','Normes de sécurité'], ARRAY['Électrotechnicien','Technicien de maintenance','Installateur industriel'], 'cap', 'Zap', 4),
('Construction en Bâtiment (CB)', 'Techniques de construction, lecture de plans, coffrage, ferraillage et réalisation d''ouvrages de bâtiment.', ARRAY['Lecture de plans','Techniques de construction','Coffrage et ferraillage','Finitions'], ARRAY['Maçon qualifié','Chef d''équipe BTP','Entrepreneur en bâtiment'], 'cap', 'BrickWall', 5),
('Mécanique Automobile (MA)', 'Diagnostic, entretien et réparation de véhicules automobiles, moteurs et systèmes mécaniques.', ARRAY['Diagnostic moteur','Réparation automobile','Entretien préventif','Systèmes électriques auto'], ARRAY['Mécanicien automobile','Chef d''atelier','Entrepreneur en mécanique'], 'cap', 'Car', 6),
('Opérateur-Géomètre (OG)', 'Levés topographiques, bornage, cartographie et utilisation d''instruments de mesure sur le terrain.', ARRAY['Levés topographiques','Bornage','Cartographie','Instruments de mesure'], ARRAY['Géomètre','Technicien topographe','Agent cadastral'], 'cap', 'Compass', 7),
('Ouvrage en Bois et en Bâtiment (OBB)', 'Fabrication et pose d''ouvrages en bois pour le bâtiment : charpente, menuiserie, coffrage et agencement.', ARRAY['Charpente bois','Menuiserie du bâtiment','Coffrage','Agencement intérieur'], ARRAY['Menuisier du bâtiment','Charpentier','Coffreur bois'], 'cap', 'PenTool', 8),
('Installation et Maintenance en Informatique (IMI)', 'Installation, configuration, maintenance et dépannage de systèmes informatiques et réseaux locaux.', ARRAY['Installation de systèmes','Maintenance matérielle','Configuration réseaux','Dépannage informatique'], ARRAY['Technicien informatique','Administrateur réseau','Support technique'], 'specifique', 'Monitor', 9),
('Eau et Assainissement (EA)', 'Adduction d''eau potable, assainissement des eaux usées, plomberie et gestion des réseaux hydrauliques.', ARRAY['Plomberie','Adduction d''eau','Traitement des eaux','Réseaux hydrauliques'], ARRAY['Plombier','Technicien en assainissement','Agent des eaux'], 'specifique', 'Droplets', 10),
('Technicien en Étude du Bâtiment (TEB)', 'Dessin technique du bâtiment, étude de structures, lecture et conception de plans architecturaux.', ARRAY['Dessin technique','Étude de structures','Conception de plans','Métré et devis'], ARRAY['Dessinateur en bâtiment','Technicien d''études','Métreur'], 'specifique', 'Building2', 11),
('Réalisation de Gros Œuvre (RGO)', 'Construction de structures porteuses, fondations, murs, dalles et ouvrages en béton armé.', ARRAY['Fondations','Béton armé','Coffrage','Structures porteuses'], ARRAY['Maçon gros œuvre','Chef de chantier','Conducteur de travaux'], 'specifique', 'BrickWall', 12);

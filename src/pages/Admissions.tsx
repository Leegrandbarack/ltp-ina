import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Send, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { toast } from 'sonner';

const steps = [
  { num: '1', title: 'Retrait du dossier', desc: 'Rendez-vous au secrétariat du lycée pour retirer un formulaire d\'inscription. Vous pouvez aussi faire une demande en ligne sur ce site.' },
  { num: '2', title: 'Constitution du dossier', desc: 'Rassemblez les pièces demandées : bulletins, acte de naissance, photos d\'identité et certificat médical.' },
  { num: '3', title: 'Dépôt du dossier', desc: 'Déposez le dossier complet au secrétariat entre juillet et septembre. Passé ce délai, les inscriptions se font sous réserve de places.' },
  { num: '4', title: 'Résultats d\'admission', desc: 'La commission d\'admission étudie les dossiers. Les résultats sont affichés au lycée et communiqués par téléphone aux parents.' },
];

const documents = [
  'Extrait d\'acte de naissance ou jugement supplétif',
  'Certificat de scolarité de l\'année en cours',
  'Bulletins de notes des deux dernières années',
  'Certificat médical datant de moins de 3 mois',
  'Quatre (4) photos d\'identité récentes',
  'Photocopie de la pièce d\'identité du parent ou tuteur',
  'Frais de dossier : 5 000 FCFA',
];

const faq = [
  { q: 'Le lycée accepte-t-il les filles ?', a: 'Oui. Le LTP INA est un établissement public mixte. Les filles sont acceptées dans toutes les filières sans exception.' },
  { q: 'Quel est l\'âge limite pour s\'inscrire ?', a: 'Les candidats doivent avoir entre 14 et 22 ans au moment de l\'inscription, selon la filière visée.' },
  { q: 'Peut-on s\'inscrire en cours d\'année ?', a: 'En principe, les inscriptions se font avant la rentrée. Toutefois, des admissions tardives sont possibles dans la limite des places disponibles, après accord de la direction.' },
  { q: 'Quel niveau scolaire est requis ?', a: 'Le BEPC est requis pour les séries BAC (G1, G2, G3) et les filières industrielles (F4, IMI). Pour les CAP, le niveau CM2 ou 3ème est accepté selon la filière.' },
  { q: 'Y a-t-il un internat ?', a: 'Le LTP INA ne dispose pas encore d\'internat. Les élèves venus d\'autres communes trouvent généralement un logement dans le village d\'Ina, à proximité du lycée.' },
];

const Admissions = () => {
  const ref = useScrollAnimation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    lastName: '', firstName: '', birthDate: '', gender: '', phone: '', email: '',
    parentName: '', parentPhone: '', filiere: '', previousSchool: '', level: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Votre demande de préinscription a été enregistrée. Le secrétariat vous recontactera.');
    setForm({ lastName: '', firstName: '', birthDate: '', gender: '', phone: '', email: '', parentName: '', parentPhone: '', filiere: '', previousSchool: '', level: '' });
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div ref={ref}>
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="relative container-custom px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="w-14 h-14 text-gold mx-auto mb-4" />
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Admissions & Inscription</h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Toutes les informations pour rejoindre le LTP INA. L'établissement est ouvert aux garçons et aux filles.
          </p>
        </div>
      </section>

      {/* Étapes */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">Procédure</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">Comment s'inscrire ?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="relative animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50 h-full">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-display font-bold text-sm">{s.num}</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents + FAQ */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-on-scroll">
              <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">Dossier d'inscription</span>
              <h2 className="font-display text-3xl font-extrabold text-foreground mb-6">Pièces à fournir</h2>
              <ul className="space-y-3">
                {documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-3 font-body text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-gold/10 border border-gold/20 rounded-lg">
                <p className="font-body text-sm text-foreground">
                  <strong>Période d'inscription :</strong> Du 1er juillet au 30 septembre 2025. Au-delà, les inscriptions sont soumises à la disponibilité des places.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ transitionDelay: '150ms' }}>
              <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">Questions fréquentes</span>
              <h2 className="font-display text-3xl font-extrabold text-foreground mb-6">FAQ</h2>
              <div className="space-y-3">
                {faq.map((item, i) => (
                  <div key={i} className="bg-card rounded-xl border border-border/50 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left font-body font-medium text-foreground text-sm hover:bg-muted/50 transition-colors"
                    >
                      {item.q}
                      {openFaq === i ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4">
                        <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10 animate-on-scroll">
            <span className="inline-block text-accent font-body font-semibold text-xs uppercase tracking-[0.2em] mb-3">Préinscription en ligne</span>
            <h2 className="font-display text-3xl font-extrabold text-foreground mb-3">Formulaire de préinscription</h2>
            <p className="text-muted-foreground font-body text-sm max-w-xl mx-auto">
              Remplissez ce formulaire pour soumettre une demande. Le secrétariat vous recontactera pour la suite de la procédure.
            </p>
          </div>

          <div className="bg-card rounded-xl p-6 sm:p-10 shadow-elevated border border-border animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">Informations de l'élève</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Nom de famille</label>
                    <Input required value={form.lastName} onChange={(e) => update('lastName', e.target.value)} placeholder="Ex: KOUAGOU" className="font-body" />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Prénom(s)</label>
                    <Input required value={form.firstName} onChange={(e) => update('firstName', e.target.value)} placeholder="Ex: Abdoulaye" className="font-body" />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Date de naissance</label>
                    <Input required type="date" value={form.birthDate} onChange={(e) => update('birthDate', e.target.value)} className="font-body" />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Sexe</label>
                    <select required value={form.gender} onChange={(e) => update('gender', e.target.value)} className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-body ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">Sélectionner</option>
                      <option value="M">Masculin</option>
                      <option value="F">Féminin</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Téléphone de l'élève</label>
                    <Input value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+229 XX XX XX XX" className="font-body" />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Dernier niveau d'études</label>
                    <select required value={form.level} onChange={(e) => update('level', e.target.value)} className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-body ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">Sélectionner</option>
                      <option value="CM2">CM2</option>
                      <option value="3ème">Classe de 3ème</option>
                      <option value="BEPC">BEPC obtenu</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">Parent ou tuteur légal</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Nom complet du parent/tuteur</label>
                    <Input required value={form.parentName} onChange={(e) => update('parentName', e.target.value)} placeholder="Nom et prénom" className="font-body" />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Téléphone du parent/tuteur</label>
                    <Input required value={form.parentPhone} onChange={(e) => update('parentPhone', e.target.value)} placeholder="+229 XX XX XX XX" className="font-body" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">Choix de la formation</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Filière souhaitée</label>
                    <select required value={form.filiere} onChange={(e) => update('filiere', e.target.value)} className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-body ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option value="">Choisir une filière</option>
                      <optgroup label="Séries BAC">
                        <option value="G1">Secrétariat (G1)</option>
                        <option value="G2">Comptabilité (G2)</option>
                        <option value="G3">Commerce (G3)</option>
                      </optgroup>
                      <optgroup label="Industriel">
                        <option value="F4">Génie Civil (F4)</option>
                        <option value="IMI">IMI – Informatique</option>
                      </optgroup>
                      <optgroup label="CAP / DTM">
                        <option value="CB">Construction Bâtiment</option>
                        <option value="MA">Mécanique Automobile</option>
                        <option value="OG">Opérateur Géomètre</option>
                      </optgroup>
                      <optgroup label="Technique">
                        <option value="ELEC">Électricité</option>
                        <option value="MEC">Mécanique</option>
                        <option value="MENU">Menuiserie</option>
                        <option value="MAC">Maçonnerie</option>
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Établissement d'origine</label>
                    <Input required value={form.previousSchool} onChange={(e) => update('previousSchool', e.target.value)} placeholder="Nom de l'école précédente" className="font-body" />
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="w-4 h-4" /> Soumettre ma préinscription
              </Button>
              <p className="text-muted-foreground font-body text-xs text-center">
                En soumettant ce formulaire, vous acceptez que vos informations soient utilisées pour le traitement de votre demande d'inscription au LTP INA.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;

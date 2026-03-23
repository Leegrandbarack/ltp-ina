import { useState } from 'react';
import { GraduationCap, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { toast } from 'sonner';

const Inscription = () => {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({
    firstName: '', lastName: '', birthDate: '', gender: '', phone: '', email: '', parentName: '', parentPhone: '', filiere: '', previousSchool: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Demande d\'inscription envoyée ! Nous vous contacterons bientôt.');
    setForm({ firstName: '', lastName: '', birthDate: '', gender: '', phone: '', email: '', parentName: '', parentPhone: '', filiere: '', previousSchool: '' });
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div ref={ref}>
      <section className="gradient-primary py-24 sm:py-32 text-center">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <GraduationCap className="w-16 h-16 text-accent mx-auto mb-4" />
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Inscription</h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous pour soumettre votre demande d'inscription au LTP Ina.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="bg-card rounded-xl p-6 sm:p-10 shadow-elevated border border-border animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4 pb-2 border-b border-border">Informations personnelles</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Nom</label>
                    <Input required value={form.lastName} onChange={(e) => update('lastName', e.target.value)} placeholder="Nom de famille" className="font-body" />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Prénom</label>
                    <Input required value={form.firstName} onChange={(e) => update('firstName', e.target.value)} placeholder="Prénom" className="font-body" />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Date de naissance</label>
                    <Input required type="date" value={form.birthDate} onChange={(e) => update('birthDate', e.target.value)} className="font-body" />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Sexe</label>
                    <select
                      required
                      value={form.gender}
                      onChange={(e) => update('gender', e.target.value)}
                      className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-body ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Sélectionner</option>
                      <option value="M">Masculin</option>
                      <option value="F">Féminin</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Téléphone</label>
                    <Input value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+229 XX XX XX XX" className="font-body" />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Email</label>
                    <Input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="votre@email.com" className="font-body" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4 pb-2 border-b border-border">Parent / Tuteur</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Nom du parent/tuteur</label>
                    <Input required value={form.parentName} onChange={(e) => update('parentName', e.target.value)} placeholder="Nom complet" className="font-body" />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Téléphone du parent</label>
                    <Input required value={form.parentPhone} onChange={(e) => update('parentPhone', e.target.value)} placeholder="+229 XX XX XX XX" className="font-body" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4 pb-2 border-b border-border">Formation souhaitée</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Filière</label>
                    <select
                      required
                      value={form.filiere}
                      onChange={(e) => update('filiere', e.target.value)}
                      className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm font-body ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Choisir une filière</option>
                      <option value="IMI">Installation & Maintenance Informatique</option>
                      <option value="Electricité">Électricité</option>
                      <option value="Mécanique">Mécanique</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Établissement précédent</label>
                    <Input required value={form.previousSchool} onChange={(e) => update('previousSchool', e.target.value)} placeholder="Nom de l'école" className="font-body" />
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="w-4 h-4" /> Soumettre la demande d'inscription
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inscription;

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { toast } from 'sonner';

const Contact = () => {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message envoyé. Nous vous répondrons dans les meilleurs délais.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div ref={ref}>
      <section className="gradient-primary py-24 sm:py-32 text-center">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Contactez-nous</h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Pour toute question sur les inscriptions, les formations ou la vie au lycée, n'hésitez pas à nous écrire.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 animate-on-scroll">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Coordonnées</h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: 'Adresse', text: 'Ina, Commune de Bembéréké, Département du Borgou, Bénin' },
                  { icon: Phone, title: 'Téléphone', text: '+229 97 XX XX XX' },
                  { icon: Mail, title: 'Email', text: 'ltpina@education.gouv.bj' },
                  { icon: Clock, title: 'Horaires d\'accueil', text: 'Lundi – Vendredi : 7h30 – 17h00\nSamedi : 7h30 – 12h00' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-foreground text-sm">{item.title}</p>
                      <p className="text-muted-foreground font-body text-sm whitespace-pre-line">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31236.45!2d2.7!3d9.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTgnMTIuMCJOIDLCsDQyJzAwLjAiRQ!5e0!3m2!1sfr!2sbj!4v1609459200000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Localisation du LTP INA à Ina, Bembéréké"
                />
              </div>
            </div>

            <div className="lg:col-span-3 animate-on-scroll" style={{ transitionDelay: '150ms' }}>
              <div className="bg-card rounded-xl p-6 sm:p-8 shadow-card border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Nom complet</label>
                      <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Votre nom" className="font-body" />
                    </div>
                    <div>
                      <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Email</label>
                      <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="votre@email.com" className="font-body" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Sujet</label>
                    <Input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Ex: Demande d'information sur la filière IMI" className="font-body" />
                  </div>
                  <div>
                    <label className="text-sm font-body font-medium text-foreground mb-1.5 block">Message</label>
                    <Textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Écrivez votre message ici..." rows={5} className="font-body" />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="w-4 h-4" /> Envoyer le message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

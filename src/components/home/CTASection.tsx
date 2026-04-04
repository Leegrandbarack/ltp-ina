import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export const CTASection = () => (
  <section className="section-padding">
    <div className="container-custom">
      <div className="gradient-primary rounded-3xl p-10 sm:p-16 relative overflow-hidden animate-on-scroll">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-10 left-10 w-20 h-20 border border-primary-foreground/5 rounded-full" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-primary-foreground/5 rounded-full" />

        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-4">
              Prêt à construire votre avenir ?
            </h2>
            <p className="text-primary-foreground/70 font-body text-lg max-w-xl mb-6">
              Rejoignez le LTP d'Ina et accédez à une formation de qualité qui ouvre les portes du monde professionnel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/inscription">
                <Button variant="gold" size="lg" className="group">
                  S'inscrire maintenant
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="lg">Nous contacter</Button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-4">
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-primary-foreground text-sm">Appelez-nous</p>
                <p className="text-primary-foreground/60 font-body text-xs">+229 XX XX XX XX</p>
              </div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-display font-bold text-primary-foreground text-sm">Écrivez-nous</p>
                <p className="text-primary-foreground/60 font-body text-xs">contact@ltp-ina.bj</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

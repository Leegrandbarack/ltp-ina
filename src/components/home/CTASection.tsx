import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => (
  <section className="section-padding">
    <div className="container-custom">
      <div className="gradient-primary rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden animate-on-scroll">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="relative">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-4">
            Prêt à construire votre avenir ?
          </h2>
          <p className="text-primary-foreground/70 font-body text-lg max-w-xl mx-auto mb-8">
            Rejoignez le LTP d'Ina et accédez à une formation de qualité qui ouvre les portes du monde professionnel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
      </div>
    </div>
  </section>
);

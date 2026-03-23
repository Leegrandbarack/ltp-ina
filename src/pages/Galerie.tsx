import { useState } from 'react';
import { X } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const categories = ['Toutes', 'Classes', 'Événements', 'Ateliers'];

const images = [
  { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80', alt: 'Salle de classe', category: 'Classes' },
  { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80', alt: 'Cérémonie de remise des diplômes', category: 'Événements' },
  { src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80', alt: 'Atelier technique', category: 'Ateliers' },
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80', alt: 'Cour du lycée', category: 'Événements' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80', alt: 'Élèves en cours', category: 'Classes' },
  { src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80', alt: 'Laboratoire informatique', category: 'Ateliers' },
  { src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80', alt: 'Travaux pratiques', category: 'Ateliers' },
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80', alt: 'Vie scolaire', category: 'Événements' },
];

const Galerie = () => {
  const ref = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('Toutes');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = activeCategory === 'Toutes' ? images : images.filter((img) => img.category === activeCategory);

  return (
    <div ref={ref}>
      <section className="gradient-primary py-24 sm:py-32 text-center">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Galerie</h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Découvrez la vie au LTP Ina en images.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-center gap-2 mb-10 flex-wrap animate-on-scroll">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-card'
                    : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <div
                key={img.alt + i}
                className="relative overflow-hidden rounded-xl cursor-pointer group animate-on-scroll aspect-square"
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                  <p className="text-primary-foreground font-body text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Agrandie"
            className="max-w-full max-h-[85vh] rounded-xl shadow-elevated object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Galerie;

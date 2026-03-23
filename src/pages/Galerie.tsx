import { useState } from 'react';
import { X } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImg from '@/assets/hero-students.jpg';
import schoolImg from '@/assets/school-building.jpg';
import imiImg from '@/assets/filiere-imi.jpg';
import elecImg from '@/assets/filiere-electricite.jpg';
import mecaImg from '@/assets/filiere-mecanique.jpg';
import eventImg from '@/assets/gallery-event.jpg';
import classImg from '@/assets/gallery-classroom.jpg';
import workshopImg from '@/assets/gallery-workshop.jpg';

const categories = ['Toutes', 'Classes', 'Événements', 'Ateliers'];

const images = [
  { src: heroImg, alt: 'Élèves en salle informatique', category: 'Classes' },
  { src: eventImg, alt: 'Cérémonie de remise des diplômes', category: 'Événements' },
  { src: workshopImg, alt: 'Atelier de soudure', category: 'Ateliers' },
  { src: classImg, alt: 'Élèves en classe', category: 'Classes' },
  { src: imiImg, alt: 'Filière informatique', category: 'Ateliers' },
  { src: elecImg, alt: 'Filière électricité', category: 'Ateliers' },
  { src: mecaImg, alt: 'Filière mécanique', category: 'Ateliers' },
  { src: schoolImg, alt: 'Bâtiment du lycée', category: 'Événements' },
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
                  width={400}
                  height={400}
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

      {/* Lightbox */}
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

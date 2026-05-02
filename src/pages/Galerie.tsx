import { useEffect, useMemo, useState } from 'react';
import { Loader2, X } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type GalleryImage = {
  id: string;
  title: string;
  image_url: string;
  category: string | null;
};

const Galerie = () => {
  const ref = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('Toutes');
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from('gallery_images')
        .select('id,title,image_url,category')
        .eq('published', true)
        .order('sort_order', { ascending: true })
        .order('created_at', { ascending: false });
      setImages(data || []);
      setLoading(false);
    })();
  }, []);

  const categories = useMemo(() => {
    const set = new Set<string>();
    images.forEach((i) => i.category && set.add(i.category));
    return ['Toutes', ...Array.from(set)];
  }, [images]);

  const filtered = activeCategory === 'Toutes' ? images : images.filter((img) => img.category === activeCategory);

  return (
    <div ref={ref}>
      <section className="gradient-primary py-24 sm:py-32 text-center">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Galerie</h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Le LTP INA en images : infrastructures, ateliers, cérémonies et vie quotidienne des élèves.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : images.length === 0 ? (
            <p className="text-center text-muted-foreground font-body py-20">
              Aucune image disponible pour le moment.
            </p>
          ) : (
            <>
              {categories.length > 1 && (
                <div className="flex justify-center gap-2 mb-10 flex-wrap">
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
              )}

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filtered.map((img) => (
                  <div
                    key={img.id}
                    className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
                    onClick={() => setLightbox(img.image_url)}
                  >
                    <img
                      src={img.image_url}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end">
                      <p className="text-primary-foreground font-body text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 pb-3">
                        {img.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
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
            alt="Image agrandie"
            className="max-w-full max-h-[85vh] rounded-xl shadow-elevated object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Galerie;

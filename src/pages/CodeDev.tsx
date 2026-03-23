import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const htmlCode = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LTP Ina - Lycée Technique Professionnel d'Ina</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Header -->
  <header class="header" id="header">
    <div class="container header-inner">
      <a href="#" class="logo">LTP Ina</a>
      <nav class="nav" id="nav">
        <a href="#accueil">Accueil</a>
        <a href="#apropos">À propos</a>
        <a href="#filieres">Filières</a>
        <a href="#contact">Contact</a>
      </nav>
      <button class="menu-btn" id="menuBtn">☰</button>
    </div>
  </header>

  <!-- Hero -->
  <section class="hero" id="accueil">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1>Lycée Technique Professionnel d'Ina</h1>
      <p>Former les talents techniques de demain au Bénin</p>
      <div class="hero-btns">
        <a href="#filieres" class="btn btn-primary">Découvrir</a>
        <a href="#contact" class="btn btn-outline">S'inscrire</a>
      </div>
    </div>
  </section>

  <!-- À propos -->
  <section class="section" id="apropos">
    <div class="container">
      <h2 class="section-title">À propos du lycée</h2>
      <p class="section-text">
        Situé à Ina, commune de Bembéréké (Borgou), le LTP d'Ina forme
        chaque année des centaines de jeunes dans plus de 12 filières
        techniques et professionnelles. Notre mission : former des
        techniciens compétents pour le développement du Bénin.
      </p>
    </div>
  </section>

  <!-- Filières -->
  <section class="section section-alt" id="filieres">
    <div class="container">
      <h2 class="section-title">Nos Filières</h2>
      <div class="grid">
        <div class="card">
          <h3>Secrétariat (G1)</h3>
          <p>Bureautique, communication et gestion administrative.</p>
        </div>
        <div class="card">
          <h3>Comptabilité (G2)</h3>
          <p>Comptabilité générale, gestion financière et fiscalité.</p>
        </div>
        <div class="card">
          <h3>Commerce (G3)</h3>
          <p>Techniques de vente, marketing et négociation.</p>
        </div>
        <div class="card">
          <h3>Génie Civil (F4)</h3>
          <p>Construction, dessin technique et conduite de chantiers.</p>
        </div>
        <div class="card">
          <h3>IMI</h3>
          <p>Installation et maintenance informatique, réseaux.</p>
        </div>
        <div class="card">
          <h3>Mécanique Auto</h3>
          <p>Diagnostic, réparation et entretien de véhicules.</p>
        </div>
        <div class="card">
          <h3>Électricité</h3>
          <p>Installations électriques et normes de sécurité.</p>
        </div>
        <div class="card">
          <h3>Menuiserie</h3>
          <p>Travail du bois, fabrication de meubles et charpente.</p>
        </div>
        <div class="card">
          <h3>Maçonnerie</h3>
          <p>Techniques de maçonnerie, enduits et béton armé.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section class="section" id="contact">
    <div class="container">
      <h2 class="section-title">Contact</h2>
      <div class="contact-grid">
        <div class="contact-info">
          <p><strong>Adresse :</strong> Ina, Bembéréké, Borgou, Bénin</p>
          <p><strong>Email :</strong> contact@ltp-ina.bj</p>
          <p><strong>Tél :</strong> +229 XX XX XX XX</p>
        </div>
        <form class="contact-form" id="contactForm">
          <input type="text" placeholder="Votre nom" required>
          <input type="email" placeholder="Votre email" required>
          <textarea placeholder="Votre message" rows="4" required></textarea>
          <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 Lycée Technique Professionnel d'Ina. Tous droits réservés.</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;

const cssCode = `/* === Reset & Base === */
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}
a { text-decoration: none; color: inherit; }

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

/* === Header === */
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  background: #0a3d62;
  color: #fff;
  z-index: 100;
  padding: 0 20px;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}
.logo {
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
}
.nav a {
  color: rgba(255,255,255,0.8);
  margin-left: 24px;
  font-size: 0.95rem;
  transition: color 0.3s;
}
.nav a:hover { color: #f9a825; }
.menu-btn {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

/* === Hero === */
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #0a3d62;
  color: #fff;
  padding-top: 60px;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10,61,98,0.85);
}
.hero-content {
  position: relative;
  z-index: 1;
  padding: 40px 20px;
}
.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  line-height: 1.2;
}
.hero-content p {
  font-size: 1.2rem;
  opacity: 0.85;
  margin-bottom: 32px;
}
.hero-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

/* === Buttons === */
.btn {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  border: 2px solid transparent;
}
.btn-primary {
  background: #f9a825;
  color: #0a3d62;
}
.btn-primary:hover { background: #f57f17; }
.btn-outline {
  border-color: #fff;
  color: #fff;
  background: transparent;
}
.btn-outline:hover {
  background: rgba(255,255,255,0.1);
}

/* === Sections === */
.section {
  padding: 80px 0;
}
.section-alt {
  background: #f5f7fa;
}
.section-title {
  text-align: center;
  font-size: 2rem;
  color: #0a3d62;
  margin-bottom: 40px;
}
.section-text {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.05rem;
  color: #555;
}

/* === Grid & Cards === */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
.card {
  background: #fff;
  border-radius: 10px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
.card h3 {
  color: #0a3d62;
  margin-bottom: 8px;
  font-size: 1.15rem;
}
.card p {
  color: #666;
  font-size: 0.95rem;
}

/* === Contact === */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}
.contact-info p {
  margin-bottom: 12px;
  color: #555;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
}
.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #0a3d62;
}

/* === Footer === */
.footer {
  background: #0a3d62;
  color: rgba(255,255,255,0.7);
  text-align: center;
  padding: 24px 0;
  font-size: 0.9rem;
}

/* === Mobile === */
@media (max-width: 768px) {
  .nav { display: none; }
  .nav.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px; left: 0; right: 0;
    background: #0a3d62;
    padding: 20px;
  }
  .nav.active a { margin: 8px 0; }
  .menu-btn { display: block; }
  .hero-content h1 { font-size: 1.8rem; }
  .contact-grid { grid-template-columns: 1fr; }
}`;

const jsCode = `// Menu mobile
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Fermer le menu au clic sur un lien
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Formulaire de contact
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message envoyé avec succès !');
  form.reset();
});

// Scroll fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});`;

const CodeBlock = ({ title, code, lang }: { title: string; code: string; lang: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between bg-primary rounded-t-xl px-5 py-3">
        <span className="text-primary-foreground font-display font-bold text-sm">{title}</span>
        <Button variant="ghost" size="sm" onClick={handleCopy} className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
          {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
          {copied ? 'Copié !' : 'Copier'}
        </Button>
      </div>
      <pre className="bg-foreground/95 text-primary-foreground/90 p-5 rounded-b-xl overflow-x-auto text-sm leading-relaxed font-mono max-h-[500px] overflow-y-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const CodeDev = () => {
  const ref = useScrollAnimation();

  return (
    <div ref={ref}>
      <section className="gradient-primary py-24 sm:py-32 text-center">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Code Développeur</h1>
          <p className="text-primary-foreground/80 font-body text-lg max-w-2xl mx-auto">
            Code source HTML, CSS et JavaScript indépendant, prêt à copier dans VS Code.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="animate-on-scroll">
            <div className="bg-muted rounded-xl p-6 mb-8 border border-border">
              <h2 className="font-display text-xl font-bold text-foreground mb-2">📁 Structure des fichiers</h2>
              <p className="text-muted-foreground font-body text-sm mb-3">Créez 3 fichiers dans le même dossier :</p>
              <ul className="font-mono text-sm space-y-1 text-foreground">
                <li>📄 index.html</li>
                <li>🎨 style.css</li>
                <li>⚡ script.js</li>
              </ul>
            </div>

            <CodeBlock title="index.html" code={htmlCode} lang="html" />
            <CodeBlock title="style.css" code={cssCode} lang="css" />
            <CodeBlock title="script.js" code={jsCode} lang="javascript" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeDev;

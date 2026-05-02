import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  GraduationCap, LogOut, Plus, Pencil, Trash2, Newspaper, FileText, Image as ImageIcon,
  Loader2, X, Home, LayoutDashboard, Users, CalendarDays, Upload
} from 'lucide-react';
import { toast } from 'sonner';

type Actualite = {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  category: string | null;
  image_url: string | null;
  published: boolean | null;
  created_at: string;
};

type Document = {
  id: string;
  title: string;
  description: string | null;
  file_url: string;
  category: string | null;
  published: boolean | null;
  created_at: string;
};

type GalleryImage = {
  id: string;
  title: string;
  image_url: string;
  category: string | null;
  published: boolean | null;
  sort_order: number | null;
  created_at: string;
};

type Tab = 'dashboard' | 'actualites' | 'documents' | 'galerie';

const AdminDashboard = () => {
  const { user, loading: authLoading, logout } = useAdminAuth();
  const [tab, setTab] = useState<Tab>('dashboard');
  const [actualites, setActualites] = useState<Actualite[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  // Form states
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formContent, setFormContent] = useState('');
  const [formExcerpt, setFormExcerpt] = useState('');
  const [formCategory, setFormCategory] = useState('general');
  const [formPublished, setFormPublished] = useState(true);
  const [formImageUrl, setFormImageUrl] = useState('');
  const [formImageFile, setFormImageFile] = useState<File | null>(null);
  const [formDescription, setFormDescription] = useState('');
  const [formFile, setFormFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const [actRes, docRes, galRes] = await Promise.all([
      supabase.from('actualites').select('*').order('created_at', { ascending: false }),
      supabase.from('documents').select('*').order('created_at', { ascending: false }),
      supabase.from('gallery_images').select('*').order('created_at', { ascending: false }),
    ]);
    if (actRes.data) setActualites(actRes.data);
    if (docRes.data) setDocuments(docRes.data);
    if (galRes.data) setGallery(galRes.data);
    setLoading(false);
  };

  useEffect(() => {
    if (user) fetchData();
  }, [user]);

  const resetForm = () => {
    setShowForm(false);
    setEditingId(null);
    setFormTitle('');
    setFormContent('');
    setFormExcerpt('');
    setFormCategory('general');
    setFormPublished(true);
    setFormImageUrl('');
    setFormImageFile(null);
    setFormDescription('');
    setFormFile(null);
  };

  const uploadToGalleryBucket = async (file: File): Promise<string | null> => {
    const ext = file.name.split('.').pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error } = await supabase.storage.from('gallery').upload(path, file);
    if (error) {
      toast.error("Erreur lors de l'upload de l'image.");
      return null;
    }
    const { data } = supabase.storage.from('gallery').getPublicUrl(path);
    return data.publicUrl;
  };

  // ========== ACTUALITES ==========
  const handleEditActualite = (a: Actualite) => {
    setTab('actualites');
    setEditingId(a.id);
    setFormTitle(a.title);
    setFormContent(a.content);
    setFormExcerpt(a.excerpt || '');
    setFormCategory(a.category || 'general');
    setFormPublished(a.published ?? true);
    setFormImageUrl(a.image_url || '');
    setFormImageFile(null);
    setShowForm(true);
  };

  const handleSaveActualite = async () => {
    if (!formTitle.trim() || !formContent.trim()) {
      toast.error('Le titre et le contenu sont obligatoires.');
      return;
    }
    setSaving(true);

    let imageUrl = formImageUrl.trim() || null;
    if (formImageFile) {
      const uploaded = await uploadToGalleryBucket(formImageFile);
      if (!uploaded) { setSaving(false); return; }
      imageUrl = uploaded;
    }

    const payload = {
      title: formTitle.trim(),
      content: formContent.trim(),
      excerpt: formExcerpt.trim() || null,
      category: formCategory,
      published: formPublished,
      image_url: imageUrl,
      author_id: user?.id,
    };

    if (editingId) {
      const { error } = await supabase.from('actualites').update(payload).eq('id', editingId);
      if (error) toast.error('Erreur lors de la modification.');
      else toast.success('Actualité modifiée.');
    } else {
      const { error } = await supabase.from('actualites').insert(payload);
      if (error) toast.error('Erreur lors de la publication.');
      else toast.success('Actualité publiée.');
    }
    setSaving(false);
    resetForm();
    fetchData();
  };

  const handleDeleteActualite = async (id: string) => {
    if (!confirm('Supprimer cette actualité ?')) return;
    const { error } = await supabase.from('actualites').delete().eq('id', id);
    if (error) toast.error('Erreur lors de la suppression.');
    else { toast.success('Actualité supprimée.'); fetchData(); }
  };

  // ========== DOCUMENTS ==========
  const handleEditDocument = (d: Document) => {
    setTab('documents');
    setEditingId(d.id);
    setFormTitle(d.title);
    setFormDescription(d.description || '');
    setFormCategory(d.category || 'general');
    setFormPublished(d.published ?? true);
    setShowForm(true);
  };

  const handleSaveDocument = async () => {
    if (!formTitle.trim()) {
      toast.error('Le titre est obligatoire.');
      return;
    }
    setSaving(true);
    let fileUrl = '';

    if (formFile) {
      const ext = formFile.name.split('.').pop();
      const path = `${Date.now()}.${ext}`;
      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(path, formFile);
      if (uploadError) {
        toast.error('Erreur lors du téléchargement du fichier.');
        setSaving(false);
        return;
      }
      const { data: urlData } = supabase.storage.from('documents').getPublicUrl(path);
      fileUrl = urlData.publicUrl;
    }

    if (editingId) {
      const payload: { title: string; description: string | null; category: string; published: boolean; file_url?: string } = {
        title: formTitle.trim(),
        description: formDescription.trim() || null,
        category: formCategory,
        published: formPublished,
      };
      if (fileUrl) payload.file_url = fileUrl;
      const { error } = await supabase.from('documents').update(payload).eq('id', editingId);
      if (error) toast.error('Erreur lors de la modification.');
      else toast.success('Document modifié.');
    } else {
      if (!fileUrl) {
        toast.error('Veuillez sélectionner un fichier.');
        setSaving(false);
        return;
      }
      const { error } = await supabase.from('documents').insert({
        title: formTitle.trim(),
        description: formDescription.trim() || null,
        file_url: fileUrl,
        category: formCategory,
        published: formPublished,
        author_id: user?.id,
      });
      if (error) toast.error("Erreur lors de l'ajout.");
      else toast.success('Document ajouté.');
    }
    setSaving(false);
    resetForm();
    fetchData();
  };

  const handleDeleteDocument = async (id: string) => {
    if (!confirm('Supprimer ce document ?')) return;
    const { error } = await supabase.from('documents').delete().eq('id', id);
    if (error) toast.error('Erreur lors de la suppression.');
    else { toast.success('Document supprimé.'); fetchData(); }
  };

  // ========== GALLERY ==========
  const handleEditGallery = (g: GalleryImage) => {
    setTab('galerie');
    setEditingId(g.id);
    setFormTitle(g.title);
    setFormCategory(g.category || 'general');
    setFormPublished(g.published ?? true);
    setFormImageUrl(g.image_url);
    setFormImageFile(null);
    setShowForm(true);
  };

  const handleSaveGallery = async () => {
    if (!formTitle.trim()) {
      toast.error('Le titre est obligatoire.');
      return;
    }

    setSaving(true);
    let imageUrl = formImageUrl.trim();

    if (formImageFile) {
      const uploaded = await uploadToGalleryBucket(formImageFile);
      if (!uploaded) { setSaving(false); return; }
      imageUrl = uploaded;
    }

    if (!imageUrl) {
      toast.error("Veuillez fournir une image (upload ou URL).");
      setSaving(false);
      return;
    }

    if (editingId) {
      const { error } = await supabase.from('gallery_images').update({
        title: formTitle.trim(),
        category: formCategory,
        published: formPublished,
        image_url: imageUrl,
      }).eq('id', editingId);
      if (error) toast.error('Erreur lors de la modification.');
      else toast.success('Image modifiée.');
    } else {
      const { error } = await supabase.from('gallery_images').insert({
        title: formTitle.trim(),
        category: formCategory,
        published: formPublished,
        image_url: imageUrl,
        author_id: user?.id,
      });
      if (error) toast.error("Erreur lors de l'ajout.");
      else toast.success('Image ajoutée.');
    }

    setSaving(false);
    resetForm();
    fetchData();
  };

  const handleDeleteGallery = async (id: string) => {
    if (!confirm('Supprimer cette image ?')) return;
    const { error } = await supabase.from('gallery_images').delete().eq('id', id);
    if (error) toast.error('Erreur lors de la suppression.');
    else { toast.success('Image supprimée.'); fetchData(); }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const publishedActualites = actualites.filter(a => a.published);
  const draftActualites = actualites.filter(a => !a.published);
  const publishedDocuments = documents.filter(d => d.published);

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container-custom flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-foreground text-sm">Administration — LTP INA</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-1" /> Retour au site
              </Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={logout}>
              <LogOut className="w-4 h-4 mr-1" /> Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <div className="container-custom px-4 py-8 max-w-5xl">
        <div className="bg-card rounded-xl border border-border/50 p-6 mb-8 shadow-soft">
          <h1 className="font-display text-xl font-bold text-foreground mb-1">
            Bienvenue dans l'espace administration
          </h1>
          <p className="text-muted-foreground font-body text-sm">
            Connecté en tant que <span className="font-semibold text-foreground">{user?.email}</span> · Gérez les contenus du site LTP INA depuis ce panneau.
          </p>
        </div>

        <div className="flex gap-2 mb-6 flex-wrap">
          <Button variant={tab === 'dashboard' ? 'default' : 'outline'} size="sm" onClick={() => { setTab('dashboard'); resetForm(); }}>
            <LayoutDashboard className="w-4 h-4 mr-1" /> Tableau de bord
          </Button>
          <Button variant={tab === 'actualites' ? 'default' : 'outline'} size="sm" onClick={() => { setTab('actualites'); resetForm(); }}>
            <Newspaper className="w-4 h-4 mr-1" /> Actualités ({actualites.length})
          </Button>
          <Button variant={tab === 'galerie' ? 'default' : 'outline'} size="sm" onClick={() => { setTab('galerie'); resetForm(); }}>
            <ImageIcon className="w-4 h-4 mr-1" /> Galerie ({gallery.length})
          </Button>
          <Button variant={tab === 'documents' ? 'default' : 'outline'} size="sm" onClick={() => { setTab('documents'); resetForm(); }}>
            <FileText className="w-4 h-4 mr-1" /> Documents ({documents.length})
          </Button>
        </div>

        {tab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-card rounded-xl border border-border/50 p-5 shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Newspaper className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-foreground">{actualites.length}</p>
                    <p className="text-muted-foreground font-body text-xs">Actualités</p>
                  </div>
                </div>
                <p className="text-xs font-body text-muted-foreground">
                  {publishedActualites.length} publiée(s) · {draftActualites.length} brouillon(s)
                </p>
              </div>

              <div className="bg-card rounded-xl border border-border/50 p-5 shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-foreground">{gallery.length}</p>
                    <p className="text-muted-foreground font-body text-xs">Images de galerie</p>
                  </div>
                </div>
                <p className="text-xs font-body text-muted-foreground">{gallery.filter(g => g.published).length} visibles</p>
              </div>

              <div className="bg-card rounded-xl border border-border/50 p-5 shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-foreground">{documents.length}</p>
                    <p className="text-muted-foreground font-body text-xs">Documents</p>
                  </div>
                </div>
                <p className="text-xs font-body text-muted-foreground">{publishedDocuments.length} publié(s)</p>
              </div>

              <div className="bg-card rounded-xl border border-border/50 p-5 shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <CalendarDays className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-display font-bold text-foreground">
                      {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                    <p className="text-muted-foreground font-body text-xs">Date du jour</p>
                  </div>
                </div>
                <p className="text-xs font-body text-muted-foreground">Session active</p>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border/50 p-6 shadow-soft">
              <h2 className="font-display font-bold text-foreground mb-4">Dernières actualités</h2>
              {actualites.length === 0 ? (
                <p className="text-muted-foreground font-body text-sm">Aucune actualité. Cliquez sur l'onglet « Actualités » pour en créer une.</p>
              ) : (
                <div className="space-y-2">
                  {actualites.slice(0, 5).map((a) => (
                    <div key={a.id} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                      <div className="min-w-0">
                        <p className="font-body text-sm text-foreground truncate">{a.title}</p>
                        <p className="text-xs text-muted-foreground font-body">
                          {new Date(a.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </p>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-body shrink-0 ${a.published ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground'}`}>
                        {a.published ? 'Publié' : 'Brouillon'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {(tab === 'actualites' || tab === 'documents' || tab === 'galerie') && (
          <>
            {!showForm && (
              <Button onClick={() => setShowForm(true)} className="mb-6">
                <Plus className="w-4 h-4 mr-1" />
                {tab === 'actualites' ? 'Nouvelle actualité' : tab === 'galerie' ? 'Nouvelle image' : 'Nouveau document'}
              </Button>
            )}

            {showForm && (
              <div className="bg-card rounded-xl border border-border/50 p-6 mb-6 shadow-soft">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display font-bold text-foreground">
                    {editingId ? 'Modifier' : 'Ajouter'}{' '}
                    {tab === 'actualites' ? 'une actualité' : tab === 'galerie' ? 'une image' : 'un document'}
                  </h2>
                  <Button variant="ghost" size="sm" onClick={resetForm}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="font-body text-sm">Titre</Label>
                    <Input value={formTitle} onChange={(e) => setFormTitle(e.target.value)} placeholder="Titre" />
                  </div>

                  {tab === 'actualites' && (
                    <>
                      <div>
                        <Label className="font-body text-sm">Résumé (optionnel)</Label>
                        <Input value={formExcerpt} onChange={(e) => setFormExcerpt(e.target.value)} placeholder="Court résumé" />
                      </div>
                      <div>
                        <Label className="font-body text-sm">Contenu</Label>
                        <Textarea value={formContent} onChange={(e) => setFormContent(e.target.value)} placeholder="Contenu de l'actualité..." rows={6} />
                      </div>
                      <div>
                        <Label className="font-body text-sm">Image — uploader un fichier</Label>
                        <Input type="file" accept="image/*" onChange={(e) => setFormImageFile(e.target.files?.[0] || null)} />
                      </div>
                      <div>
                        <Label className="font-body text-sm">…ou URL d'image</Label>
                        <Input value={formImageUrl} onChange={(e) => setFormImageUrl(e.target.value)} placeholder="https://..." />
                      </div>
                      {formImageUrl && !formImageFile && (
                        <img src={formImageUrl} alt="Aperçu" className="rounded-lg max-h-40 object-cover border border-border" />
                      )}
                    </>
                  )}

                  {tab === 'documents' && (
                    <>
                      <div>
                        <Label className="font-body text-sm">Description (optionnel)</Label>
                        <Textarea value={formDescription} onChange={(e) => setFormDescription(e.target.value)} placeholder="Description du document..." rows={3} />
                      </div>
                      <div>
                        <Label className="font-body text-sm">Fichier {editingId ? '(laisser vide pour garder l\'actuel)' : ''}</Label>
                        <Input type="file" onChange={(e) => setFormFile(e.target.files?.[0] || null)} />
                      </div>
                    </>
                  )}

                  {tab === 'galerie' && (
                    <>
                      <div>
                        <Label className="font-body text-sm">Image — uploader un fichier</Label>
                        <Input type="file" accept="image/*" onChange={(e) => setFormImageFile(e.target.files?.[0] || null)} />
                      </div>
                      <div>
                        <Label className="font-body text-sm">…ou URL d'image</Label>
                        <Input value={formImageUrl} onChange={(e) => setFormImageUrl(e.target.value)} placeholder="https://..." />
                      </div>
                      {formImageUrl && !formImageFile && (
                        <img src={formImageUrl} alt="Aperçu" className="rounded-lg max-h-40 object-cover border border-border" />
                      )}
                    </>
                  )}

                  <div>
                    <Label className="font-body text-sm">Catégorie</Label>
                    <Input value={formCategory} onChange={(e) => setFormCategory(e.target.value)} placeholder={tab === 'galerie' ? 'Infrastructures, Ateliers, Cérémonies...' : 'general'} />
                  </div>

                  <div className="flex items-center gap-2">
                    <Switch checked={formPublished} onCheckedChange={setFormPublished} />
                    <Label className="font-body text-sm">Publié (visible sur le site)</Label>
                  </div>

                  <Button
                    onClick={
                      tab === 'actualites' ? handleSaveActualite
                      : tab === 'galerie' ? handleSaveGallery
                      : handleSaveDocument
                    }
                    disabled={saving}
                  >
                    {saving ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Upload className="w-4 h-4 mr-1" />}
                    {editingId ? 'Enregistrer' : 'Publier'}
                  </Button>
                </div>
              </div>
            )}

            {loading ? (
              <div className="text-center py-12"><Loader2 className="w-6 h-6 animate-spin mx-auto text-primary" /></div>
            ) : tab === 'actualites' ? (
              <div className="space-y-3">
                {actualites.length === 0 && <p className="text-muted-foreground font-body text-sm text-center py-8">Aucune actualité pour le moment.</p>}
                {actualites.map((a) => (
                  <div key={a.id} className="bg-card rounded-lg border border-border/50 p-4 flex items-start justify-between gap-4">
                    <div className="min-w-0 flex items-start gap-3">
                      {a.image_url && (
                        <img src={a.image_url} alt="" className="w-14 h-14 rounded object-cover shrink-0" />
                      )}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-display font-bold text-foreground text-sm truncate">{a.title}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-body ${a.published ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground'}`}>
                            {a.published ? 'Publié' : 'Brouillon'}
                          </span>
                        </div>
                        <p className="text-muted-foreground font-body text-xs">
                          {new Date(a.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                          {a.category && a.category !== 'general' ? ` · ${a.category}` : ''}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <Button variant="ghost" size="sm" onClick={() => handleEditActualite(a)}>
                        <Pencil className="w-3.5 h-3.5" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDeleteActualite(a.id)} className="text-destructive hover:text-destructive">
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : tab === 'galerie' ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.length === 0 && <p className="text-muted-foreground font-body text-sm text-center py-8 col-span-full">Aucune image dans la galerie.</p>}
                {gallery.map((g) => (
                  <div key={g.id} className="bg-card rounded-lg border border-border/50 overflow-hidden group">
                    <div className="relative aspect-square">
                      <img src={g.image_url} alt={g.title} className="w-full h-full object-cover" />
                      {!g.published && (
                        <span className="absolute top-2 left-2 text-xs px-2 py-0.5 rounded-full font-body bg-muted text-muted-foreground">
                          Brouillon
                        </span>
                      )}
                    </div>
                    <div className="p-3">
                      <h3 className="font-body font-semibold text-foreground text-sm truncate">{g.title}</h3>
                      {g.category && g.category !== 'general' && (
                        <p className="text-muted-foreground font-body text-xs mb-2">{g.category}</p>
                      )}
                      <div className="flex gap-1 justify-end">
                        <Button variant="ghost" size="sm" onClick={() => handleEditGallery(g)}>
                          <Pencil className="w-3.5 h-3.5" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteGallery(g.id)} className="text-destructive hover:text-destructive">
                          <Trash2 className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {documents.length === 0 && <p className="text-muted-foreground font-body text-sm text-center py-8">Aucun document pour le moment.</p>}
                {documents.map((d) => (
                  <div key={d.id} className="bg-card rounded-lg border border-border/50 p-4 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-bold text-foreground text-sm truncate">{d.title}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-body ${d.published ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground'}`}>
                          {d.published ? 'Publié' : 'Brouillon'}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-body text-xs">
                        {new Date(d.created_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <Button variant="ghost" size="sm" onClick={() => handleEditDocument(d)}>
                        <Pencil className="w-3.5 h-3.5" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDeleteDocument(d.id)} className="text-destructive hover:text-destructive">
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

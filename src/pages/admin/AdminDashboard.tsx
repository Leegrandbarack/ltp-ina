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
  GraduationCap, LogOut, Plus, Pencil, Trash2, Newspaper, FileText,
  Loader2, X, Home, LayoutDashboard, Users, CalendarDays
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

const AdminDashboard = () => {
  const { user, loading: authLoading, logout } = useAdminAuth();
  const [tab, setTab] = useState<'dashboard' | 'actualites' | 'documents'>('dashboard');
  const [actualites, setActualites] = useState<Actualite[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  // Form states
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formContent, setFormContent] = useState('');
  const [formExcerpt, setFormExcerpt] = useState('');
  const [formCategory, setFormCategory] = useState('general');
  const [formPublished, setFormPublished] = useState(false);
  const [formImageUrl, setFormImageUrl] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formFile, setFormFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const [actRes, docRes] = await Promise.all([
      supabase.from('actualites').select('*').order('created_at', { ascending: false }),
      supabase.from('documents').select('*').order('created_at', { ascending: false }),
    ]);
    if (actRes.data) setActualites(actRes.data);
    if (docRes.data) setDocuments(docRes.data);
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
    setFormPublished(false);
    setFormImageUrl('');
    setFormDescription('');
    setFormFile(null);
  };

  const handleEditActualite = (a: Actualite) => {
    setTab('actualites');
    setEditingId(a.id);
    setFormTitle(a.title);
    setFormContent(a.content);
    setFormExcerpt(a.excerpt || '');
    setFormCategory(a.category || 'general');
    setFormPublished(a.published || false);
    setFormImageUrl(a.image_url || '');
    setShowForm(true);
  };

  const handleSaveActualite = async () => {
    if (!formTitle.trim() || !formContent.trim()) {
      toast.error('Le titre et le contenu sont obligatoires.');
      return;
    }
    setSaving(true);
    const payload = {
      title: formTitle.trim(),
      content: formContent.trim(),
      excerpt: formExcerpt.trim() || null,
      category: formCategory,
      published: formPublished,
      image_url: formImageUrl.trim() || null,
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

  const handleEditDocument = (d: Document) => {
    setTab('documents');
    setEditingId(d.id);
    setFormTitle(d.title);
    setFormDescription(d.description || '');
    setFormCategory(d.category || 'general');
    setFormPublished(d.published || false);
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
      if (error) toast.error('Erreur lors de l\'ajout.');
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
      {/* Header */}
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
        {/* Welcome */}
        <div className="bg-card rounded-xl border border-border/50 p-6 mb-8 shadow-soft">
          <h1 className="font-display text-xl font-bold text-foreground mb-1">
            Bienvenue dans l'espace administration
          </h1>
          <p className="text-muted-foreground font-body text-sm">
            Connecté en tant que <span className="font-semibold text-foreground">{user?.email}</span> · Gérez les contenus du site LTP INA depuis ce panneau.
          </p>
        </div>

        {/* Navigation tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          <Button
            variant={tab === 'dashboard' ? 'default' : 'outline'}
            size="sm"
            onClick={() => { setTab('dashboard'); resetForm(); }}
          >
            <LayoutDashboard className="w-4 h-4 mr-1" /> Tableau de bord
          </Button>
          <Button
            variant={tab === 'actualites' ? 'default' : 'outline'}
            size="sm"
            onClick={() => { setTab('actualites'); resetForm(); }}
          >
            <Newspaper className="w-4 h-4 mr-1" /> Actualités ({actualites.length})
          </Button>
          <Button
            variant={tab === 'documents' ? 'default' : 'outline'}
            size="sm"
            onClick={() => { setTab('documents'); resetForm(); }}
          >
            <FileText className="w-4 h-4 mr-1" /> Documents ({documents.length})
          </Button>
        </div>

        {/* Dashboard tab */}
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
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-foreground">{documents.length}</p>
                    <p className="text-muted-foreground font-body text-xs">Documents</p>
                  </div>
                </div>
                <p className="text-xs font-body text-muted-foreground">
                  {publishedDocuments.length} publié(s)
                </p>
              </div>

              <div className="bg-card rounded-xl border border-border/50 p-5 shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center">
                    <Users className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-foreground">1</p>
                    <p className="text-muted-foreground font-body text-xs">Administrateur</p>
                  </div>
                </div>
                <p className="text-xs font-body text-muted-foreground">Compte actif</p>
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
                <p className="text-xs font-body text-muted-foreground">Dernière connexion</p>
              </div>
            </div>

            {/* Recent items */}
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

        {/* Actualites / Documents tabs */}
        {(tab === 'actualites' || tab === 'documents') && (
          <>
            {!showForm && (
              <Button onClick={() => setShowForm(true)} className="mb-6">
                <Plus className="w-4 h-4 mr-1" />
                {tab === 'actualites' ? 'Nouvelle actualité' : 'Nouveau document'}
              </Button>
            )}

            {showForm && (
              <div className="bg-card rounded-xl border border-border/50 p-6 mb-6 shadow-soft">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display font-bold text-foreground">
                    {editingId ? 'Modifier' : 'Ajouter'} {tab === 'actualites' ? 'une actualité' : 'un document'}
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

                  {tab === 'actualites' ? (
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
                        <Label className="font-body text-sm">URL de l'image (optionnel)</Label>
                        <Input value={formImageUrl} onChange={(e) => setFormImageUrl(e.target.value)} placeholder="https://..." />
                      </div>
                    </>
                  ) : (
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

                  <div>
                    <Label className="font-body text-sm">Catégorie</Label>
                    <Input value={formCategory} onChange={(e) => setFormCategory(e.target.value)} placeholder="general" />
                  </div>

                  <div className="flex items-center gap-2">
                    <Switch checked={formPublished} onCheckedChange={setFormPublished} />
                    <Label className="font-body text-sm">Publié (visible sur le site)</Label>
                  </div>

                  <Button onClick={tab === 'actualites' ? handleSaveActualite : handleSaveDocument} disabled={saving}>
                    {saving ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : null}
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
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
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

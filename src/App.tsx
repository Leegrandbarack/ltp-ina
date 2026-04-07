import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import APropos from "./pages/APropos";
import Filieres from "./pages/Filieres";
import Actualites from "./pages/Actualites";
import Galerie from "./pages/Galerie";
import Contact from "./pages/Contact";
import Admissions from "./pages/Admissions";
import VieScolaire from "./pages/VieScolaire";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Admin routes (no Layout) */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* Public routes */}
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/a-propos" element={<Layout><APropos /></Layout>} />
          <Route path="/filieres" element={<Layout><Filieres /></Layout>} />
          <Route path="/actualites" element={<Layout><Actualites /></Layout>} />
          <Route path="/galerie" element={<Layout><Galerie /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/admissions" element={<Layout><Admissions /></Layout>} />
          <Route path="/inscription" element={<Layout><Admissions /></Layout>} />
          <Route path="/vie-scolaire" element={<Layout><VieScolaire /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

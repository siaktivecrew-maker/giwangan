import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "@/components/Layout/Layout";
import Home from "./pages/Home";
import Edukasi from "./pages/Edukasi";
import Tentang from "./pages/Tentang";
import Galeri from "./pages/Galeri";
import Berita from "./pages/Berita";
import BeritaDetail from "./pages/BeritaDetail";
import Harga from "./pages/Harga";
import Penjemputan from "./pages/Penjemputan";
import Kontak from "./pages/Kontak";
import Pendaftaran from "./pages/Pendaftaran";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edukasi" element={<Edukasi />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/berita/:id" element={<BeritaDetail />} />
            <Route path="/harga" element={<Harga />} />
            <Route path="/penjemputan" element={<Penjemputan />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/pendaftaran" element={<Pendaftaran />} />
            <Route path="/faq" element={<FAQ />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

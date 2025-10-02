import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  User, 
  Clock, 
  Tag,
  Search,
  TrendingUp,
  MessageCircle,
  Share,
  Eye,
  Newspaper
} from "lucide-react";

const Berita = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleShare = async (title: string, excerpt: string, articleId: number) => {
    const shareData = {
      title,
      text: excerpt,
      url: `${window.location.origin}/berita/${articleId}`
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert('Link berhasil disalin ke clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const articles = [
    {
      id: 1,
      title: "Workshop Daur Ulang Plastik Sukses Digelar",
      excerpt: "Bank Sampah Giwang Bersih 04 berhasil menggelar workshop daur ulang plastik yang diikuti 50 peserta dari berbagai kalangan.",
      content: "Workshop yang berlangsung selama 3 hari ini mengajarkan berbagai teknik mengubah sampah plastik menjadi produk bernilai ekonomis...",
      author: "Tim Admin",
      date: "2024-12-10",
      category: "kegiatan",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      views: 324,
      comments: 12,
      featured: true
    },
    {
      id: 2,
      title: "Harga Sampah Plastik Naik 15% di Bulan Desember",
      excerpt: "Meningkatnya permintaan daur ulang plastik membuat harga sampah plastik mengalami kenaikan signifikan.",
      content: "Kenaikan harga ini disebabkan oleh meningkatnya kesadaran masyarakat akan pentingnya daur ulang dan permintaan industri...",
      author: "Bu Sari",
      date: "2024-12-08",
      category: "harga",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
      views: 256,
      comments: 8,
      featured: false
    },
    {
      id: 3,
      title: "Tips Efektif Memilah Sampah di Rumah",
      excerpt: "Panduan lengkap cara memilah sampah dengan benar untuk memaksimalkan nilai ekonomis dan manfaat lingkungan.",
      content: "Memilah sampah yang benar adalah kunci sukses dalam mengelola limbah rumah tangga. Berikut adalah tips praktis...",
      author: "Pak Ahmad",
      date: "2024-12-05",
      category: "tips",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
      views: 189,
      comments: 15,
      featured: false
    },
    {
      id: 4,
      title: "Kolaborasi dengan Sekolah Dasar Terban",
      excerpt: "Program edukasi lingkungan meluas ke sekolah-sekolah untuk menanamkan kesadaran sejak dini.",
      content: "Kerjasama dengan SD Negeri Terban menghasilkan program edukasi berkelanjutan yang melibatkan siswa, guru, dan orang tua...",
      author: "Tim Edukasi",
      date: "2024-12-03",
      category: "kegiatan",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
      views: 167,
      comments: 6,
      featured: false
    },
    {
      id: 5,
      title: "Inovasi Kompos Cair dari Sampah Organik",
      excerpt: "Pengembangan teknologi baru untuk mengolah sampah organik menjadi pupuk cair berkualitas tinggi.",
      content: "Inovasi terbaru dalam pengolahan sampah organik ini dapat menghasilkan pupuk cair yang sangat bermanfaat untuk pertanian...",
      author: "Tim Penelitian",
      date: "2024-11-28",
      category: "inovasi",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
      views: 298,
      comments: 20,
      featured: false
    },
    {
      id: 6,
      title: "Pengumuman Libur Akhir Tahun 2024",
      excerpt: "Jadwal operasional Bank Sampah selama periode libur akhir tahun dan layanan darurat yang tersedia.",
      content: "Dalam rangka libur akhir tahun, kami informasikan jadwal operasional dan layanan yang tetap tersedia...",
      author: "Manajemen",
      date: "2024-11-25",
      category: "pengumuman",
      image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?w=600&h=400&fit=crop",
      views: 145,
      comments: 3,
      featured: false
    }
  ];

  const categories = [
    { value: "all", label: "Semua", count: articles.length },
    { value: "kegiatan", label: "Kegiatan", count: articles.filter(a => a.category === "kegiatan").length },
    { value: "tips", label: "Tips", count: articles.filter(a => a.category === "tips").length },
    { value: "harga", label: "Harga", count: articles.filter(a => a.category === "harga").length },
    { value: "inovasi", label: "Inovasi", count: articles.filter(a => a.category === "inovasi").length },
    { value: "pengumuman", label: "Pengumuman", count: articles.filter(a => a.category === "pengumuman").length }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      kegiatan: "bg-blue-100 text-blue-800",
      tips: "bg-green-100 text-green-800", 
      harga: "bg-yellow-100 text-yellow-800",
      inovasi: "bg-purple-100 text-purple-800",
      pengumuman: "bg-red-100 text-red-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <Newspaper className="h-8 w-8 text-primary" />
            Berita & Kegiatan
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ikuti perkembangan terbaru, tips berguna, dan berbagai kegiatan 
            Bank Sampah Giwang Bersih 04.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari berita atau kegiatan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="text-sm"
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <Card className="overflow-hidden border-2 border-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Artikel Utama
                </Badge>
              </div>
              <CardContent className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <Badge className={getCategoryColor(featuredArticle.category)}>
                    {featuredArticle.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredArticle.date).toLocaleDateString('id-ID')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {featuredArticle.views}
                    </div>
                   </div>
                   <Button 
                     size="lg" 
                     className="w-fit"
                     onClick={() => navigate(`/berita/${featuredArticle.id}`)}
                   >
                     Baca Selengkapnya
                   </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.filter(article => !article.featured).map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-3 left-3 ${getCategoryColor(article.category)}`}>
                  <Tag className="h-3 w-3 mr-1" />
                  {article.category}
                </Badge>
              </div>
              <CardHeader className="flex-grow">
                <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {new Date(article.date).toLocaleDateString('id-ID')}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {article.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {article.comments}
                      </div>
                    </div>
                     <div className="flex items-center gap-1">
                       <Button 
                         variant="ghost" 
                         size="sm"
                         onClick={() => handleShare(article.title, article.excerpt, article.id)}
                       >
                         <Share className="h-4 w-4" />
                       </Button>
                       <Button 
                         size="sm"
                         onClick={() => navigate(`/berita/${article.id}`)}
                       >
                         Baca
                       </Button>
                     </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tidak Ada Hasil</h3>
              <p className="text-muted-foreground">
                Tidak ditemukan artikel yang sesuai dengan pencarian Anda.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Reset Pencarian
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Newsletter Subscription */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Jangan Lewatkan Update Terbaru</h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Dapatkan informasi terbaru tentang harga sampah, tips ramah lingkungan, 
                dan berbagai kegiatan menarik langsung di WhatsApp Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <a 
                  href="https://wa.me/628123456789?text=Halo,%20saya%20ingin%20berlangganan%20update%20berita%20Bank%20Sampah%20Giwang%20Bersih%2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold/90 text-earth px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Berlangganan via WhatsApp
                </a>
                <a 
                  href="/kontak"
                  className="border border-primary-foreground/30 hover:bg-primary-foreground/10 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <User className="mr-2 h-4 w-4" />
                  Hubungi Admin
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Berita;
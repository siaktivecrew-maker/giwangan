import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  User, 
  ArrowLeft,
  Eye,
  MessageCircle,
  Share2,
  Tag
} from "lucide-react";

// Data berita yang sama dengan di Berita.tsx
const articles = [
  {
    id: 1,
    title: "Workshop Daur Ulang Plastik Sukses Digelar",
    excerpt: "Bank Sampah Giwang Bersih 04 berhasil menggelar workshop daur ulang plastik yang diikuti 50 peserta dari berbagai kalangan.",
    content: "Workshop yang berlangsung selama 3 hari ini mengajarkan berbagai teknik mengubah sampah plastik menjadi produk bernilai ekonomis. Peserta antusias belajar cara membuat tas, dompet, dan berbagai kerajinan dari plastik bekas. Para instruktur yang berpengalaman membagikan tips dan trik untuk menghasilkan produk berkualitas tinggi yang bisa dijual. Kegiatan ini merupakan bagian dari program peningkatan kapasitas nasabah bank sampah.",
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
    content: "Kenaikan harga ini disebabkan oleh meningkatnya kesadaran masyarakat akan pentingnya daur ulang dan permintaan industri yang semakin tinggi. Harga plastik jenis PET naik dari Rp 3.000 menjadi Rp 3.450 per kilogram, sementara plastik PP naik dari Rp 2.500 menjadi Rp 2.875 per kilogram. Ini adalah kabar baik bagi nasabah bank sampah karena dapat meningkatkan pendapatan mereka. Para pengepul juga memberikan apresiasi atas kualitas sampah plastik yang disetor oleh nasabah Giwang Bersih 04 yang selalu dalam kondisi bersih dan terpilah dengan baik.",
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
    content: "Memilah sampah yang benar adalah kunci sukses dalam mengelola limbah rumah tangga. Berikut adalah tips praktis yang bisa Anda terapkan: 1) Sediakan tempat sampah terpisah untuk organik, anorganik, dan B3. 2) Cuci dan keringkan sampah plastik sebelum menyimpan. 3) Lipat kardus dan kertas agar tidak memakan tempat. 4) Pisahkan tutup botol dari botol plastik. 5) Kumpulkan sampah logam seperti kaleng dalam wadah khusus. Dengan memilah yang benar, nilai jual sampah Anda akan lebih tinggi dan membantu petugas daur ulang bekerja lebih efisien.",
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
    content: "Kerjasama dengan SD Negeri Terban menghasilkan program edukasi berkelanjutan yang melibatkan siswa, guru, dan orang tua. Program ini mencakup workshop memilah sampah, kunjungan ke fasilitas daur ulang, dan kompetisi kreativitas dari barang bekas. Lebih dari 300 siswa telah berpartisipasi dalam program ini. Hasil yang dicapai sangat menggembirakan, dengan meningkatnya kesadaran siswa tentang pentingnya menjaga lingkungan. Banyak siswa yang kemudian mengajak keluarga mereka untuk menjadi nasabah bank sampah.",
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
    content: "Inovasi terbaru dalam pengolahan sampah organik ini dapat menghasilkan pupuk cair yang sangat bermanfaat untuk pertanian. Proses pembuatannya menggunakan metode fermentasi dengan bantuan mikroorganisme lokal (MOL) yang dikembangkan sendiri. Pupuk cair ini telah diuji pada berbagai tanaman dan menunjukkan hasil yang sangat baik. Produk ini juga telah mendapat sertifikasi organik dan mulai dipasarkan kepada petani lokal. Ini menjadi nilai tambah bagi bank sampah dalam mengolah sampah organik yang sebelumnya kurang bernilai ekonomis.",
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
    content: "Dalam rangka libur akhir tahun, kami informasikan jadwal operasional Bank Sampah Giwang Bersih 04: Tutup tanggal 24-26 Desember 2024 dan 31 Desember 2024 - 1 Januari 2025. Operasional normal dimulai kembali tanggal 2 Januari 2025. Untuk layanan penjemputan darurat, hubungi nomor WhatsApp 0812-3456-789. Kami mohon maaf atas ketidaknyamanan ini dan mengucapkan Selamat Hari Natal dan Tahun Baru kepada seluruh nasabah. Terima kasih atas pengertian dan kerjasamanya.",
    author: "Manajemen",
    date: "2024-11-25",
    category: "pengumuman",
    image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?w=600&h=400&fit=crop",
    views: 145,
    comments: 3,
    featured: false
  }
];

const getCategoryColor = (category: string) => {
  const colors = {
    kegiatan: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    tips: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200", 
    harga: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    inovasi: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    pengumuman: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
  };
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
};

const BeritaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleShare = async (platform?: 'whatsapp' | 'facebook' | 'twitter') => {
    const article = articles.find(a => a.id === parseInt(id || "1"));
    if (!article) return;

    const shareUrl = window.location.href;
    const shareText = `${article.title} - ${article.excerpt}`;

    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    } else {
      // Generic share
      try {
        if (navigator.share) {
          await navigator.share({
            title: article.title,
            text: article.excerpt,
            url: shareUrl
          });
        } else {
          await navigator.clipboard.writeText(shareUrl);
          alert('Link berhasil disalin ke clipboard!');
        }
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };
  
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Artikel Tidak Ditemukan</h1>
        <Button onClick={() => navigate("/berita")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Berita
        </Button>
      </div>
    );
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/berita")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Berita
        </Button>

        {/* Article Header */}
        <div className="space-y-4 mb-6">
          <Badge className={getCategoryColor(article.category)}>
            <Tag className="h-3 w-3 mr-1" />
            {article.category}
          </Badge>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {article.author}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(article.date).toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              {article.views} views
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              {article.comments} komentar
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <Card>
          <CardContent className="p-6 md:p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {article.content}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Share Buttons */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-6">
          <span className="text-sm font-semibold">Bagikan:</span>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => handleShare('whatsapp')}
          >
            <Share2 className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => handleShare('facebook')}
          >
            <Share2 className="h-4 w-4 mr-2" />
            Facebook
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => handleShare('twitter')}
          >
            <Share2 className="h-4 w-4 mr-2" />
            Twitter
          </Button>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Artikel Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Card 
                  key={related.id} 
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    navigate(`/berita/${related.id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={related.image} 
                      alt={related.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge className={`${getCategoryColor(related.category)} mb-2`}>
                      {related.category}
                    </Badge>
                    <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {new Date(related.date).toLocaleDateString('id-ID')}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeritaDetail;

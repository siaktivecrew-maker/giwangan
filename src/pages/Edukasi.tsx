import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Recycle, 
  Leaf, 
  AlertTriangle, 
  RotateCcw, 
  Minus, 
  RefreshCw,
  Trash2,
  Heart,
  Globe,
  DollarSign
} from "lucide-react";

const Edukasi = () => {
  const wasteTypes = [
    {
      icon: Leaf,
      title: "Sampah Organik",
      color: "bg-green-500",
      description: "Sampah yang berasal dari makhluk hidup dan dapat terurai secara alami",
      examples: ["Sisa makanan", "Daun kering", "Kulit buah", "Sayuran busuk", "Tulang ikan/ayam"],
      timeToDecompose: "2-6 bulan",
      impact: "Dapat menghasilkan gas metana jika tidak dikelola dengan baik"
    },
    {
      icon: Recycle,
      title: "Sampah Anorganik",
      color: "bg-blue-500", 
      description: "Sampah yang tidak berasal dari makhluk hidup dan sulit terurai",
      examples: ["Plastik", "Kertas", "Logam", "Kaca", "Karet"],
      timeToDecompose: "50-1000 tahun",
      impact: "Mencemari tanah dan air, berbahaya bagi kehidupan laut"
    },
    {
      icon: AlertTriangle,
      title: "Sampah B3",
      color: "bg-red-500",
      description: "Bahan Berbahaya dan Beracun yang memerlukan penanganan khusus",
      examples: ["Baterai", "Pestisida", "Cat", "Oli bekas", "Obat kadaluarsa"],
      timeToDecompose: "Tidak dapat terurai",
      impact: "Sangat berbahaya bagi kesehatan dan lingkungan"
    }
  ];

  const reduce3R = [
    {
      icon: Minus,
      title: "Reduce (Mengurangi)",
      color: "text-red-600",
      description: "Mengurangi penggunaan barang yang tidak perlu",
      tips: [
        "Gunakan tas belanja sendiri",
        "Bawa botol minum pribadi", 
        "Cetak dokumen seperlunya",
        "Matikan lampu yang tidak digunakan",
        "Beli produk dengan kemasan minimal"
      ]
    },
    {
      icon: RotateCcw,
      title: "Reuse (Menggunakan Kembali)",
      color: "text-yellow-600",
      description: "Menggunakan kembali barang yang masih bisa dipakai",
      tips: [
        "Gunakan botol bekas untuk pot tanaman",
        "Manfaatkan kertas bekas untuk notes",
        "Jadikan kardus bekas sebagai kotak penyimpanan",
        "Sumbangkan pakaian yang masih layak",
        "Gunakan jar kaca untuk wadah makanan"
      ]
    },
    {
      icon: RefreshCw,
      title: "Recycle (Mendaur Ulang)",
      color: "text-green-600", 
      description: "Mengolah sampah menjadi produk baru yang berguna",
      tips: [
        "Pilah sampah sesuai jenisnya",
        "Bersihkan wadah sebelum didaur ulang",
        "Kumpulkan sampah dalam jumlah yang cukup",
        "Setor ke bank sampah terdekat",
        "Buat kompos dari sampah organik"
      ]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Manfaat Ekonomi",
      description: "Menghasilkan pendapatan tambahan dari penjualan sampah",
      details: [
        "Sampah plastik: Rp 2.000-3.000/kg",
        "Kertas/kardus: Rp 1.500-2.200/kg", 
        "Kaleng aluminium: Rp 12.000/kg",
        "Rata-rata penghasilan: Rp 50.000-200.000/bulan"
      ]
    },
    {
      icon: Heart,
      title: "Manfaat Kesehatan",
      description: "Menciptakan lingkungan yang lebih bersih dan sehat",
      details: [
        "Mengurangi penyebaran penyakit",
        "Udara lebih bersih dari pembakaran sampah",
        "Mengurangi banjir akibat sampah",
        "Lingkungan bebas dari bau tidak sedap"
      ]
    },
    {
      icon: Globe,
      title: "Manfaat Lingkungan", 
      description: "Melestarikan bumi untuk generasi mendatang",
      details: [
        "Mengurangi pencemaran tanah dan air",
        "Menghemat sumber daya alam",
        "Mengurangi emisi gas rumah kaca",
        "Melestarikan ekosistem"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <Recycle className="h-8 w-8 text-primary" />
            Edukasi Pengelolaan Sampah
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pelajari cara mengelola sampah dengan benar untuk menciptakan lingkungan yang bersih, 
            sehat, dan berkelanjutan bagi masa depan.
          </p>
        </div>

        <Tabs defaultValue="jenis-sampah" className="space-y-6">
          <div className="w-full overflow-x-auto pb-2">
            <TabsList className="inline-flex w-full md:grid md:grid-cols-3 min-w-max md:min-w-0">
              <TabsTrigger value="jenis-sampah" className="flex-1 whitespace-nowrap">Jenis Sampah</TabsTrigger>
              <TabsTrigger value="3r" className="flex-1 whitespace-nowrap">Konsep 3R</TabsTrigger>
              <TabsTrigger value="manfaat" className="flex-1 whitespace-nowrap">Manfaat Bank Sampah</TabsTrigger>
            </TabsList>
          </div>

          {/* Jenis Sampah Tab */}
          <TabsContent value="jenis-sampah" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Mengenal Jenis-Jenis Sampah</h2>
              <p className="text-muted-foreground">
                Memahami jenis sampah adalah langkah pertama untuk pengelolaan yang tepat
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wasteTypes.map((waste, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-full ${waste.color} flex items-center justify-center mx-auto mb-4`}>
                      <waste.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-center">{waste.title}</CardTitle>
                    <CardDescription className="text-center">
                      {waste.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Contoh:</h4>
                      <div className="flex flex-wrap gap-1">
                        {waste.examples.map((example, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-semibold">Waktu Terurai:</span> {waste.timeToDecompose}
                      </div>
                      <div>
                        <span className="font-semibold">Dampak:</span> {waste.impact}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 3R Tab */}
          <TabsContent value="3r" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Konsep 3R: Reduce, Reuse, Recycle</h2>
              <p className="text-muted-foreground">
                Tiga prinsip dasar pengelolaan sampah yang dapat diterapkan sehari-hari
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {reduce3R.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                        <item.icon className={`h-6 w-6 ${item.color}`} />
                      </div>
                      <CardTitle className={item.color}>{item.title}</CardTitle>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Tips Praktis:</h4>
                    <ul className="space-y-2">
                      {item.tips.map((tip, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Manfaat Tab */}
          <TabsContent value="manfaat" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Manfaat Bergabung dengan Bank Sampah</h2>
              <p className="text-muted-foreground">
                Dapatkan keuntungan ekonomi, kesehatan, dan lingkungan dari pengelolaan sampah yang benar
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-center">{benefit.title}</CardTitle>
                    <CardDescription className="text-center">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Siap Menerapkan Hidup Berkelanjutan?</h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Mulai perjalanan Anda menuju gaya hidup yang lebih ramah lingkungan. 
                Bergabunglah dengan Bank Sampah Giwang Bersih 04 hari ini!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <a 
                  href="/pendaftaran"
                  className="bg-gold hover:bg-gold/90 text-earth px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Daftar Sekarang
                </a>
                <a 
                  href="/kontak"
                  className="border border-primary-foreground/30 hover:bg-primary-foreground/10 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Hubungi Kami
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Edukasi;
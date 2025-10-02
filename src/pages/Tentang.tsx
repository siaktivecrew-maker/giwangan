import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Leaf,
  Users,
  Target,
  Award,
  Heart,
  MapPin,
  Calendar,
  TrendingUp,
  Recycle,
} from 'lucide-react'

const Tentang = () => {
  const achievements = [
    {
      icon: Users,
      title: '500+ Nasabah Aktif',
      description: 'Telah bergabung dalam gerakan lingkungan bersih',
    },
    {
      icon: Recycle,
      title: '50 Ton Sampah',
      description: 'Berhasil didaur ulang sejak tahun 2021',
    },
    {
      icon: Award,
      title: 'Penghargaan Kelurahan',
      description: 'Bank sampah terbaik 2023',
    },
    {
      icon: TrendingUp,
      title: '95% Kepuasan',
      description: 'Tingkat kepuasan nasabah yang tinggi',
    },
  ]

  const values = [
    {
      icon: Leaf,
      title: 'Peduli Lingkungan',
      description:
        'Berkomitmen menjaga kelestarian alam untuk generasi mendatang',
    },
    {
      icon: Heart,
      title: 'Kepedulian Sosial',
      description:
        'Membangun kesadaran masyarakat tentang pentingnya pengelolaan sampah',
    },
    {
      icon: Users,
      title: 'Kekeluargaan',
      description: 'Menciptakan komunitas yang saling mendukung dan peduli',
    },
    {
      icon: Target,
      title: 'Transparansi',
      description: 'Menjalankan semua proses dengan jujur dan terbuka',
    },
  ]

  const timeline = [
    {
      year: '2021',
      title: 'Pendirian',
      description:
        'Bank Sampah Giwang Bersih 04 didirikan dengan 15 nasabah awal',
    },
    {
      year: '2022',
      title: 'Ekspansi',
      description: 'Membuka layanan penjemputan dan mencapai 100 nasabah',
    },
    {
      year: '2023',
      title: 'Penghargaan',
      description: 'Meraih penghargaan Bank Sampah Terbaik tingkat Kelurahan',
    },
    {
      year: '2024',
      title: 'Digitalisasi',
      description: 'Meluncurkan platform digital untuk kemudahan layanan',
    },
  ]

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <Leaf className="h-8 w-8 text-primary" />
            Tentang Giwang Bersih 04
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mengenal lebih dekat Bank Sampah yang berkomitmen menciptakan
            lingkungan bersih dan berkelanjutan di Yogyakarta.
          </p>
        </div>

        {/* Hero Story */}
        <Card className="bg-muted border-0">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <Badge className="mb-4">Cerita Kami</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Bermula dari Kepedulian Lingkungan
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Bank Sampah Giwang Bersih 04 lahir dari keprihatinan
                    sekelompok warga terhadap kondisi lingkungan yang semakin
                    tercemar sampah. Dengan semangat gotong royong dan kearifan
                    lokal, kami memulai gerakan kecil yang kini telah berkembang
                    menjadi komunitas besar yang peduli lingkungan.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Lokasi Strategis</div>
                    <div className="text-sm text-muted-foreground">
                      Gg. Tunggulmogo No.104, Giwangan, Kec. Umbulharjo, Kota
                      Yogyakarta, Daerah Istimewa Yogyakarta 55163 - mudah
                      dijangkau dari berbagai arah
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <div className="font-semibold">Beroperasi Sejak 2021</div>
                    <div className="text-sm text-muted-foreground">
                      3+ tahun pengalaman melayani masyarakat Yogyakarta
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-primary rounded-2xl p-8 flex items-center justify-center">
                  <Recycle className="h-32 w-32 text-primary-foreground opacity-80" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold rounded-full p-4">
                  <Award className="h-8 w-8 text-earth" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Pencapaian Kami
            </h2>
            <p className="text-muted-foreground">
              Bangga dengan kontribusi nyata untuk lingkungan dan masyarakat
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Visi Kami
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">
                Menjadi bank sampah terdepan di Yogyakarta yang menciptakan
                lingkungan bersih, sehat, dan berkelanjutan melalui pengelolaan
                sampah yang inovatif dan memberdayakan masyarakat.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Misi Kami
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>
                    Mengedukasi masyarakat tentang pentingnya pengelolaan sampah
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>
                    Menyediakan layanan pengelolaan sampah yang mudah dan
                    menguntungkan
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>
                    Membangun komunitas peduli lingkungan yang berkelanjutan
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>
                    Berkontribusi pada pengurangan dampak negatif sampah
                    terhadap lingkungan
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Nilai-Nilai Kami
            </h2>
            <p className="text-muted-foreground">
              Prinsip yang menjadi fondasi dalam setiap langkah kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Perjalanan Kami
            </h2>
            <p className="text-muted-foreground">
              Langkah demi langkah membangun masa depan yang lebih hijau
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-4">
                        <Badge className="mb-2">{item.year}</Badge>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative md:w-2/12 flex justify-center">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Bergabunglah dengan Gerakan Kami
              </h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Mari bersama-sama membangun masa depan yang lebih hijau dan
                berkelanjutan. Setiap langkah kecil Anda membuat perbedaan
                besar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <a
                  href="/pendaftaran"
                  className="bg-gold hover:bg-gold/90 text-earth px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Daftar Sekarang
                </a>
                <a
                  href="/kontak"
                  className="border border-primary-foreground/30 hover:bg-primary-foreground/10 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Kunjungi Kami
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Tentang

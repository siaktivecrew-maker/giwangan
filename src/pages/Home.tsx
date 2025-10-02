import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Recycle,
  Leaf,
  Users,
  MapPin,
  Truck,
  Award,
  Heart,
  DollarSign,
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Recycle,
      title: 'Daur Ulang Sampah',
      description:
        'Kelola sampah Anda dengan sistem yang terorganisir dan ramah lingkungan',
    },
    {
      icon: Truck,
      title: 'Layanan Penjemputan',
      description:
        'Nikmati kemudahan penjemputan sampah langsung ke rumah Anda',
    },
    {
      icon: DollarSign,
      title: 'Harga Transparan',
      description:
        'Dapatkan harga terbaik dengan sistem transparan untuk setiap jenis sampah',
    },
    {
      icon: Users,
      title: 'Komunitas Peduli',
      description:
        'Bergabung dengan komunitas yang peduli lingkungan dan masa depan bumi',
    },
  ]

  const stats = [
    { icon: Users, value: '500+', label: 'Nasabah Aktif' },
    { icon: Recycle, value: '50 Ton', label: 'Sampah Terdaur' },
    { icon: Award, value: '3 Tahun', label: 'Pengalaman' },
    { icon: Heart, value: '100%', label: 'Komitmen Lingkungan' },
  ]

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center 
        bg-green-600 dark:bg-green overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold 
                text-white leading-tight"
              >
                Bank Sampah <br />
                <span className="text-white">Giwang Bersih 04</span>
              </h1>
              <p
                className="text-xl md:text-2xl text-white/90 
                max-w-2xl mx-auto leading-relaxed"
              >
                Wujudkan lingkungan bersih dan sehat melalui pengelolaan sampah
                yang berkelanjutan dan menguntungkan bagi semua.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Button Hijau */}
              <Link to="/penjemputan">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 
                  text-white px-8 py-6 text-lg font-semibold 
                  shadow-xl hover:shadow-2xl transition-all"
                >
                  <Truck className="mr-2 h-5 w-5" />
                  Jadwal Penjemputan
                </Button>
              </Link>

              {/* Button Putih di Light Mode, Hitam di Dark Mode */}
              <Link to="/tentang">
                <Button
                  size="lg"
                  className="bg-white text-green-600 border border--600
    hover:bg-green-600 hover:text-white hover:border-green-600
    dark:bg-black dark:text-green-500 d
    dark:hover:bg-green-600 dark:hover:text-white
    px-8 py-6 text-lg font-semibold transition-all"
                >
                  <Leaf className="mr-2 h-5 w-5" />
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Leaf className="h-16 w-16 text-white animate-bounce" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Recycle className="h-12 w-12 text-white animate-pulse" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Mengapa Memilih Giwang Bersih 04?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan solusi lengkap untuk pengelolaan sampah yang
              mudah, menguntungkan, dan ramah lingkungan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 
                border-0 bg-card/50 backdrop-blur"
              >
                <CardHeader className="text-center">
                  <div
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center 
                    rounded-full bg-primary group-hover:scale-110 transition-transform"
                  >
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <stat.icon className="h-8 w-8 text-primary-foreground mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
              Siap Bergabung dengan Gerakan Lingkungan?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Daftarkan diri Anda sekarang dan mulai berkontribusi untuk
              lingkungan yang lebih bersih sambil mendapatkan keuntungan dari
              sampah Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Button Hijau */}
              <Link to="/pendaftaran">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white 
                  px-8 py-6 text-lg font-semibold shadow-xl"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Daftar Sebagai Nasabah
                </Button>
              </Link>

              {/* Button Putih di Light Mode, Hitam di Dark Mode */}
              <Link to="/kontak">
                <Button
                  size="lg"
                  className="bg-white text-green-600  
                  hover:bg-green-50 
                  dark:bg-black dark:text-white dark:border-white 
                  dark:hover:bg-green-900
                  px-8 py-6 text-lg font-semibold shadow-xl"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Lokasi & Kontak
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

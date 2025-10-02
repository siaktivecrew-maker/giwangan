import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Link } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Navigation,
  Facebook,
  Instagram,
  Users,
} from 'lucide-react'

const Kontak = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      details: [
        'Gg. Tunggulmogo No.104, Giwangan',
        'Kec. Umbulharjo, Kota Yogyakarta',
        'Daerah Istimewa Yogyakarta 55163',
      ],
      action: 'Buka Maps',
      link: 'https://maps.app.goo.gl/MagoYQq5iqfT8zbR9',
    },
    {
      icon: Phone,
      title: 'Telepon',
      details: ['+62 274 123456'],
      action: 'Hubungi',
      link: 'https://wa.me/628123456789',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['giwangbersih04@gmail.com'],
      action: 'Kirim Email',
      link: 'mailto:giwangbersih04@gmail.com',
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: ['Sabtu (Minggu Pertama dan Ketiga) 09:00 - 14:00 WIB'],
      action: '',
      link: '',
    },
  ]

  const teamMembers = [
    {
      name: 'Bapak Suryanto',
      role: 'Ketua Bank Sampah',
      phone: '+62 812-3456-789',
      photo:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Ibu Sri Wahyuni',
      role: 'Bendahara',
      phone: '+62 813-4567-890',
      photo:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Bapak Ahmad Riyadi',
      role: 'Koordinator Penjemputan',
      phone: '+62 814-5678-901',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
  ]

  const faqItems = [
    {
      question: 'Bagaimana cara mendaftar sebagai nasabah?',
      answer:
        'Anda dapat mendaftar melalui halaman pendaftaran di website ini atau datang langsung ke kantor kami dengan membawa KTP.',
    },
    {
      question: 'Berapa minimum sampah yang bisa disetor?',
      answer:
        'Minimum 2 kg per jenis sampah. Untuk layanan penjemputan minimum 5 kg total semua jenis sampah.',
    },
    {
      question: 'Kapan jadwal penjemputan sampah?',
      answer:
        'Penjemputan dilakukan setiap hari Senin-Sabtu. Anda bisa jadwalkan melalui website atau WhatsApp minimal H-1.',
    },
    {
      question: 'Bagaimana sistem pembayaran?',
      answer:
        'Pembayaran dilakukan cash setelah penimbangan atau transfer ke rekening nasabah yang terdaftar.',
    },
  ]

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <MessageCircle className="h-8 w-8 text-primary" />
            Hubungi Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ada pertanyaan atau butuh bantuan? Tim kami siap membantu Anda
            dengan pelayanan terbaik dan responsif.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informasi Kontak</CardTitle>
                <CardDescription>
                  Berbagai cara untuk menghubungi kami
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="font-semibold">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                      {info.action && info.link && (
                        <a
                          href={info.link}
                          target={
                            info.link.startsWith('http') ? '_blank' : '_self'
                          }
                          rel={
                            info.link.startsWith('http')
                              ? 'noopener noreferrer'
                              : ''
                          }
                        >
                          <Button variant="outline" size="sm" className="mt-2">
                            {info.action}
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Media Sosial</CardTitle>
                <CardDescription>
                  Ikuti kami di media sosial untuk update terbaru
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="https://facebook.com/giwangbersih04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <span>Facebook - Giwang Bersih 04</span>
                </a>
                <a
                  href="https://instagram.com/giwangbersih04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <Instagram className="h-5 w-5 text-pink-600" />
                  <span>Instagram - @giwangbersih04</span>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi formulir di bawah ini dan kami akan segera merespons
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input id="name" placeholder="Masukkan nama Anda" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Nomor WhatsApp</Label>
                      <Input id="phone" placeholder="08123456789" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="nama@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subjek</Label>
                    <Input
                      id="subject"
                      placeholder="Apa yang ingin Anda tanyakan?"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      placeholder="Tulis pesan Anda di sini..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5" />
                  Lokasi Kami
                </CardTitle>
                <CardDescription>
                  Kunjungi kantor Bank Sampah Giwang Bersih 04
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps?q=-7.8253,110.3879&hl=es;z=14&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '0.5rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Bank Sampah Giwang Bersih 04"
                  ></iframe>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">
                      Gg. Tunggulmogo No.104, Giwangan
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Kec. Umbulharjo, Kota Yogyakarta, Daerah Istimewa
                      Yogyakarta 55163
                    </p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/pD3msmfTVfpBQU42A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">
                      <Navigation className="mr-2 h-4 w-4" />
                      Buka di Maps
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Members */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Tim Pengurus
            </h2>
            <p className="text-muted-foreground">
              Kenali tim yang siap membantu Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground mb-3">{member.role}</p>
                  <a
                    href={`https://wa.me/${member.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-muted-foreground">
              Temukan jawaban untuk pertanyaan umum
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/faq">
              <Button variant="outline">Lihat FAQ Lengkap</Button>
            </Link>
          </div>
        </section>

        {/* Emergency Contact */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Butuh Bantuan Segera?</h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Untuk keperluan mendesak atau pertanyaan yang membutuhkan
                respons cepat, hubungi langsung WhatsApp admin kami.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <a
                  href="https://wa.me/628123456789?text=Halo,%20saya%20butuh%20bantuan%20mendesak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold/90 text-earth px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Admin
                </a>
                <a
                  href="tel:+622741234567"
                  className="border border-primary-foreground/30 hover:bg-primary-foreground/10 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Telepon Kantor
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Kontak

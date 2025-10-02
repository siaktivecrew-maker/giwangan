import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Leaf,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Clock,
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary border-t">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary-foreground">
                  Giwang Bersih 04
                </span>
                <span className="text-sm text-primary-foreground/80">
                  Bank Sampah
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Bank Sampah yang berkomitmen untuk menciptakan lingkungan bersih
              dan sejahtera melalui pengelolaan sampah yang berkelanjutan.
            </p>
            <div className="flex space-x-2">
              {/* Link to Facebook (optional) */}
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              {/* Link to Instagram */}
              <a
                href="https://www.instagram.com/giwangbersih04/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-foreground">
              Tautan Cepat
            </h3>
            <div className="space-y-2">
              {[
                { href: '/edukasi', label: 'Edukasi Sampah' },
                { href: '/tentang', label: 'Tentang Kami' },
                { href: '/galeri', label: 'Galeri' },
                { href: '/harga', label: 'Daftar Harga' },
                { href: '/penjemputan', label: 'Jadwal Penjemputan' },
              ].map((link) => (
                <Link key={link.href} to={link.href}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 justify-start p-0 h-auto"
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-foreground">
              Hubungi Kami
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary-foreground/80 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Gg. Tunggulmogo No.104, Giwangan, Kec. Umbulharjo, Kota
                  Yogyakarta, Daerah Istimewa Yogyakarta 55163
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">
                  +62 274 123456
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">
                  giwangbersih04@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-foreground">
              Jam Operasional
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">
                  Sabtu (Minggu Pertama dan Ketiga)
                </span>
              </div>
              <span className="text-primary-foreground/80 text-sm ml-6">
                09:00 - 14:00 WIB
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Giwang Bersih 04. Semua hak dilindungi.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link
                to="/privacy"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>

        {/* Add Developer Credit */}
        <div className="border-t border-primary-foreground/20 mt-6 pt-4">
          <div className="flex justify-center items-center">
            <p className="text-primary-foreground/60 text-sm">
              Developed by{' '}
              <span className="font-semibold text-primary-foreground">
                Siaktive
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

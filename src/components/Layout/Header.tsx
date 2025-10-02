import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/edukasi", label: "Edukasi" },
    { href: "/tentang", label: "Tentang" },
    { href: "/galeri", label: "Galeri" },
    { href: "/berita", label: "Berita" },
    { href: "/harga", label: "Harga" },
    { href: "/penjemputan", label: "Penjemputan" },
    { href: "/kontak", label: "Kontak" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="site-header sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Leaf className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">Giwang Bersih 04</span>
              <span className="text-sm text-muted-foreground">Bank Sampah</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href}>
                <Button
                  variant={isActive(item.href) ? "default" : "ghost"}
                  size="sm"
                  className="text-sm font-medium"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link to="/pendaftaran">
              <Button size="sm" className="ml-4 btn-primary">
                Daftar Sekarang
              </Button>
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant={isActive(item.href) ? "default" : "ghost"}
                  size="sm"
                  className="w-full justify-start text-sm font-medium"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link to="/pendaftaran" onClick={() => setIsMenuOpen(false)}>
              <Button size="sm" className="w-full mt-4 btn-primary">
                Daftar Sekarang
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
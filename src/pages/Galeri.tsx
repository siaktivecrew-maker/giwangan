import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Camera,
  Play,
  Star,
  Users,
  Quote,
  Calendar,
  Eye,
  Heart,
  Share,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from 'lucide-react'
import kegiatanData from '@/data/kegiatan.json'
import produkData from '@/data/produk.json'

interface Kegiatan {
  id: number
  judul: string
  tanggal: string
  peserta: number
  deskripsi: string
  foto: string[]
}

interface Produk {
  id: number
  kategori: string
  judul: string
  deskripsi: string
  views: number
  foto: string[]
}

const Galeri = () => {
  const [selectedKegiatan, setSelectedKegiatan] = useState<Kegiatan | null>(
    null
  )
  const [selectedProduk, setSelectedProduk] = useState<Produk | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (selectedProduk) {
      document.body.classList.add('lightbox-open')
    } else {
      document.body.classList.remove('lightbox-open')
    }
    return () => {
      document.body.classList.remove('lightbox-open')
    }
  }, [selectedProduk])

  const kegiatan: Kegiatan[] = kegiatanData
  const produk: Produk[] = produkData

  const handleOpenProduk = (produkItem: Produk) => {
    setSelectedProduk(produkItem)
    setCurrentImageIndex(0)
  }

  const handleCloseProduk = () => {
    setSelectedProduk(null)
    setCurrentImageIndex(0)
  }

  const handleNextImage = () => {
    if (selectedProduk && currentImageIndex < selectedProduk.foto.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') handleNextImage()
    if (e.key === 'ArrowLeft') handlePrevImage()
    if (e.key === 'Escape') handleCloseProduk()
  }

  const handleShare = async (title: string, text: string, url?: string) => {
    const shareData = {
      title,
      text,
      url: url || window.location.href,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        // Fallback: Copy link to clipboard
        await navigator.clipboard.writeText(shareData.url)
        alert('Link berhasil disalin ke clipboard!')
      }
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }

  const formatTanggal = (tanggal: string) => {
    const date = new Date(tanggal)
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  const testimonials = [
    {
      name: 'Ibu Sari Wahyuni',
      role: 'Nasabah sejak 2022',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      quote:
        'Bergabung dengan Bank Sampah Giwang Bersih 04 benar-benar mengubah cara pandang saya terhadap sampah. Sekarang sampah rumah tangga bisa jadi pendapatan tambahan!',
      rating: 5,
      income: 'Rp 150.000/bulan',
    },
    {
      name: 'Bapak Ahmad Susilo',
      role: 'Nasabah sejak 2021',
      photo:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      quote:
        'Pelayanan sangat memuaskan dan transparan. Tim penjemputan selalu tepat waktu dan harga yang diberikan sangat fair. Recommended!',
      rating: 5,
      income: 'Rp 200.000/bulan',
    },
    {
      name: 'Ibu Dewi Lestari',
      role: 'Nasabah sejak 2023',
      photo:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote:
        'Anak-anak jadi lebih sadar lingkungan sejak ikut kegiatan edukasi di sini. Mereka sekarang rajin memilah sampah di rumah.',
      rating: 5,
      income: 'Rp 80.000/bulan',
    },
    {
      name: 'Bapak Rudi Hartono',
      role: 'Nasabah sejak 2022',
      photo:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote:
        'Proses pendaftaran mudah, pengurus ramah, dan yang paling penting kontribusi nyata untuk lingkungan. Bangga jadi bagian dari komunitas ini!',
      rating: 5,
      income: 'Rp 120.000/bulan',
    },
  ]

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <Camera className="h-8 w-8 text-primary" />
            Galeri & Inspirasi
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat karya kreatif hasil daur ulang, kegiatan komunitas, dan cerita
            sukses dari nasabah Bank Sampah Giwang Bersih 04.
          </p>
        </div>

        <Tabs defaultValue="produk" className="space-y-6">
          <div className="w-full overflow-x-auto pb-2">
            <TabsList className="inline-flex w-full md:grid md:grid-cols-3 min-w-max md:min-w-0">
              <TabsTrigger value="produk" className="flex-1 whitespace-nowrap">
                Produk Daur Ulang
              </TabsTrigger>
              <TabsTrigger
                value="kegiatan"
                className="flex-1 whitespace-nowrap"
              >
                Kegiatan Komunitas
              </TabsTrigger>
              <TabsTrigger
                value="testimoni"
                className="flex-1 whitespace-nowrap"
              >
                Testimoni Nasabah
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Produk Daur Ulang Tab */}
          <TabsContent value="produk" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">
                Produk Kreatif Hasil Daur Ulang
              </h2>
              <p className="text-muted-foreground">
                Inspirasi kreativitas mengubah sampah menjadi barang berguna dan
                bernilai
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {produk.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => handleOpenProduk(product)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.foto[0]}
                      alt={product.judul}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary">{product.kategori}</Badge>
                    </div>
                    <div className="absolute top-2 right-2 bg-black/50 text-white rounded-full px-2 py-1 flex items-center gap-1 text-xs">
                      <Eye className="h-3 w-3" />
                      {product.views}
                    </div>
                    {product.foto.length > 1 && (
                      <div className="absolute bottom-2 right-2 bg-black/50 text-white rounded-full px-2 py-1 text-xs">
                        <Camera className="h-3 w-3 inline mr-1" />
                        {product.foto.length}
                      </div>
                    )}
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {product.judul}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.deskripsi}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Heart className="h-4 w-4" />
                        <span>Inspiratif</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleShare(
                            product.judul,
                            product.deskripsi,
                            `${window.location.origin}/galeri#produk-${product.id}`
                          )
                        }}
                      >
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Kegiatan Tab */}
          <TabsContent value="kegiatan" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Kegiatan Komunitas</h2>
              <p className="text-muted-foreground">
                Berbagai kegiatan edukasi dan pemberdayaan masyarakat yang telah
                kami lakukan
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {kegiatan.map((activity) => (
                <Card
                  key={activity.id}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={activity.foto[0]}
                      alt={activity.judul}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white rounded-lg px-3 py-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatTanggal(activity.tanggal)}
                      </div>
                    </div>
                    {activity.foto.length > 1 && (
                      <div className="absolute top-2 right-2 bg-black/50 text-white rounded-full px-2 py-1 text-xs">
                        <Camera className="h-3 w-3 inline mr-1" />
                        {activity.foto.length}
                      </div>
                    )}
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {activity.judul}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {activity.deskripsi}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-primary">
                        <Users className="h-4 w-4" />
                        <span>{activity.peserta} peserta</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedKegiatan(activity)}
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Lihat Detail
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Testimoni Tab */}
          <TabsContent value="testimoni" className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">Cerita Sukses Nasabah</h2>
              <p className="text-muted-foreground">
                Pengalaman nyata dari para nasabah yang telah merasakan manfaat
                bergabung dengan kami
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <Quote className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="bg-primary/10 text-primary"
                      >
                        Pendapatan: {testimonial.income}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span>Terverifikasi</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Ingin Berbagi Cerita Anda?</h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Bergabunglah dengan komunitas kami dan jadilah bagian dari
                galeri inspirasi untuk masa depan yang lebih hijau dan
                berkelanjutan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Link to="/pendaftaran">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-earth font-semibold"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Bergabung Sekarang
                  </Button>
                </Link>
                <Link to="/kontak">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto border border-primary-foreground/30 hover:bg-primary-foreground/10 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                  >
                    <Camera className="mr-2 h-4 w-4" />
                    Kirim Foto Karya
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dialog Detail Kegiatan */}
        <Dialog
          open={!!selectedKegiatan}
          onOpenChange={() => setSelectedKegiatan(null)}
        >
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {selectedKegiatan?.judul}
              </DialogTitle>
            </DialogHeader>

            {selectedKegiatan && (
              <div className="space-y-6">
                {/* Info Kegiatan */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs">Tanggal</p>
                      <p className="font-semibold text-foreground">
                        {formatTanggal(selectedKegiatan.tanggal)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs">Peserta</p>
                      <p className="font-semibold text-foreground">
                        {selectedKegiatan.peserta} orang
                      </p>
                    </div>
                  </div>
                </div>

                {/* Deskripsi */}
                <div>
                  <h4 className="font-semibold mb-2">Deskripsi Kegiatan</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedKegiatan.deskripsi}
                  </p>
                </div>

                {/* Galeri Foto dengan Carousel */}
                <div>
                  <h4 className="font-semibold mb-3">Galeri Foto</h4>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedKegiatan.foto.map((foto, index) => (
                        <CarouselItem key={index}>
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img
                              src={foto}
                              alt={`${selectedKegiatan.judul} - Foto ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {selectedKegiatan.foto.length > 1 && (
                      <>
                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />
                      </>
                    )}
                  </Carousel>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    {selectedKegiatan.foto.length} foto
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() =>
                      handleShare(
                        selectedKegiatan.judul,
                        selectedKegiatan.deskripsi,
                        `${window.location.origin}/galeri#kegiatan-${selectedKegiatan.id}`
                      )
                    }
                  >
                    <Share className="h-4 w-4 mr-2" />
                    Bagikan
                  </Button>
                  <Button className="flex-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    Lihat Lokasi
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Lightbox Produk - FULLSCREEN MODAL */}
        {selectedProduk &&
          ReactDOM.createPortal(
            <div
              className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
              onClick={handleCloseProduk}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={handleCloseProduk}
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Image Counter */}
              {selectedProduk.foto.length > 1 && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedProduk.foto.length}
                </div>
              )}

              {/* Main Image Container */}
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <img
                  src={selectedProduk.foto[currentImageIndex]}
                  alt={`${selectedProduk.judul} - ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Navigation Buttons */}
                {selectedProduk.foto.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 text-white hover:bg-white/20 disabled:opacity-30"
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePrevImage()
                      }}
                      disabled={currentImageIndex === 0}
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-8 w-8" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 text-white hover:bg-white/20 disabled:opacity-30"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleNextImage()
                      }}
                      disabled={
                        currentImageIndex === selectedProduk.foto.length - 1
                      }
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-8 w-8" />
                    </Button>
                  </>
                )}
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent pt-16 pb-4 md:pb-6 px-4 md:px-6 text-white">
                <div className="max-w-4xl mx-auto space-y-3">
                  <Badge variant="secondary" className="mb-2">
                    {selectedProduk.kategori}
                  </Badge>
                  <h3 className="text-lg md:text-2xl font-bold leading-tight">
                    {selectedProduk.judul}
                  </h3>
                  <p className="text-xs md:text-base text-white/90 leading-relaxed">
                    {selectedProduk.deskripsi}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2">
                    <div className="flex items-center gap-1 text-xs md:text-sm">
                      <Eye className="h-3 w-3 md:h-4 md:w-4" />
                      {selectedProduk.views} views
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20 h-8 px-3"
                    >
                      <Heart className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                      Suka
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20 h-8 px-3"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleShare(
                          selectedProduk.judul,
                          selectedProduk.deskripsi,
                          `${window.location.origin}/galeri#produk-${selectedProduk.id}`
                        )
                      }}
                    >
                      <Share className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                      Bagikan
                    </Button>
                  </div>
                </div>
              </div>

              {/* Keyboard Hint - Desktop only */}
              {selectedProduk.foto.length > 1 && (
                <div className="hidden md:block absolute bottom-4 left-4 text-white/60 text-xs">
                  Gunakan ← → untuk navigasi
                </div>
              )}
            </div>,
            document.body // Target render ke body
          )}
      </div>
    </div>
  )
}

export default Galeri

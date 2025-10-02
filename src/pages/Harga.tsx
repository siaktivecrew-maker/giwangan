import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import {
  DollarSign,
  Scale,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  Info,
  Calendar,
} from 'lucide-react'
import { wasteTypes, WasteType } from '@/data/wasteTypes'

const Harga = () => {
  const groupedWastes = wasteTypes.reduce(
    (acc, waste) => {
      if (!acc[waste.category]) {
        acc[waste.category] = []
      }
      acc[waste.category].push(waste)
      return acc
    },
    {} as Record<string, WasteType[]>
  )

  const categoryInfo = {
    organik: {
      title: 'Sampah Organik',
      color: 'bg-green-500',
      textColor: 'text-green-700',
      description: 'Sampah yang dapat terurai secara alami',
    },
    anorganik: {
      title: 'Sampah Anorganik',
      color: 'bg-blue-500',
      textColor: 'text-blue-700',
      description: 'Sampah yang dapat didaur ulang',
    },
    b3: {
      title: 'Bahan Berbahaya & Beracun',
      color: 'bg-red-500',
      textColor: 'text-red-700',
      description: 'Memerlukan penanganan khusus',
    },
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <DollarSign className="h-8 w-8 text-primary" />
            Daftar Harga Sampah
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Harga transparan untuk semua jenis sampah yang kami terima. Harga
            dapat berubah sewaktu-waktu sesuai kondisi pasar.
          </p>
        </div>

        {/* Last Updated */}
        <Card className="bg-accent/50">
          <CardContent className="pt-4">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              Terakhir diperbarui: 15 Desember 2024
            </div>
          </CardContent>
        </Card>

        {/* Price Tables by Category */}
        <div className="space-y-8">
          {Object.entries(groupedWastes).map(([category, wastes]) => {
            const categoryData =
              categoryInfo[category as keyof typeof categoryInfo]

            return (
              <Card key={category} className="overflow-hidden">
                <CardHeader className={`${categoryData.color} text-white`}>
                  <CardTitle className="flex items-center gap-3">
                    <Scale className="h-6 w-6" />
                    {categoryData.title}
                  </CardTitle>
                  <CardDescription className="text-white/90">
                    {categoryData.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px]">
                      <thead className="bg-muted">
                        <tr>
                          <th className="text-left p-3 md:p-4 font-semibold text-sm md:text-base">
                            Jenis Sampah
                          </th>
                          <th className="text-center p-3 md:p-4 font-semibold text-sm md:text-base whitespace-nowrap">
                            Harga per Kg
                          </th>
                          <th className="text-center p-3 md:p-4 font-semibold text-sm md:text-base">
                            Satuan
                          </th>
                          <th className="text-left p-3 md:p-4 font-semibold text-sm md:text-base">
                            Syarat Penerimaan
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {wastes.map((waste, index) => (
                          <tr
                            key={waste.id}
                            className={
                              index % 2 === 0 ? 'bg-background' : 'bg-muted/30'
                            }
                          >
                            <td className="p-3 md:p-4">
                              <div className="font-medium text-sm md:text-base">
                                {waste.name}
                              </div>
                            </td>
                            <td className="p-3 md:p-4 text-center">
                              {waste.pricePerKg > 0 ? (
                                <div className="font-bold text-base md:text-lg text-primary whitespace-nowrap">
                                  Rp {waste.pricePerKg.toLocaleString('id-ID')}
                                </div>
                              ) : (
                                <Badge variant="secondary">Gratis</Badge>
                              )}
                            </td>
                            <td className="p-3 md:p-4 text-center">
                              <Badge
                                variant="outline"
                                className="text-xs md:text-sm"
                              >
                                {waste.unit}
                              </Badge>
                            </td>
                            <td className="p-3 md:p-4">
                              <ul className="space-y-1">
                                {waste.conditions.map((condition, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2 text-xs md:text-sm"
                                  >
                                    <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span>{condition}</span>
                                  </li>
                                ))}
                              </ul>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Important Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <AlertCircle className="h-5 w-5" />
                Catatan Penting
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-orange-700">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                  <span>
                    Harga dapat berubah sewaktu-waktu sesuai kondisi pasar
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                  <span>Minimum penyetoran 2 kg per jenis sampah</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                  <span>Sampah harus dalam kondisi bersih dan kering</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                  <span>
                    Penimbangan dilakukan secara transparan di hadapan nasabah
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <TrendingUp className="h-5 w-5" />
                Tips Memaksimalkan Pendapatan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-blue-700">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>
                    Pisahkan sampah sesuai jenisnya untuk harga optimal
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>
                    Bersihkan wadah plastik dan kaleng sebelum disetor
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>Kumpulkan dalam jumlah yang cukup untuk efisiensi</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>Manfaatkan layanan penjemputan untuk kemudahan</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Calculator CTA */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="text-center py-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Hitung Potensi Pendapatan Anda
              </h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Gunakan layanan penjemputan kami untuk mengetahui berapa banyak
                yang bisa Anda dapatkan dari sampah Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Link to="/penjemputan">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-earth font-semibold"
                  >
                    <Scale className="mr-2 h-4 w-4" />
                    Hitung & Jadwalkan Penjemputan
                  </Button>
                </Link>
                <Link to="/kontak">
                  <Button className="w-full sm:w-auto border border-primary-foreground/30 hover:bg-primary-foreground/10 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                    <Info className="mr-2 h-4 w-4" />
                    Tanya Admin
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Harga

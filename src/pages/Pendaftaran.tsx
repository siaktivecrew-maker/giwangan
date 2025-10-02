import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { UserPlus, Check, Users, FileText } from "lucide-react";

const Pendaftaran = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <UserPlus className="h-8 w-8 text-primary" />
            Pendaftaran Nasabah
          </h1>
          <p className="text-lg text-muted-foreground">
            Bergabunglah dengan komunitas peduli lingkungan dan dapatkan keuntungan dari sampah Anda.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Formulir Pendaftaran</CardTitle>
            <CardDescription>
              Lengkapi data di bawah ini untuk menjadi nasabah Bank Sampah Giwang Bersih 04
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Nama Lengkap *</Label>
                  <Input id="fullName" placeholder="Sesuai KTP" />
                </div>
                <div>
                  <Label htmlFor="nik">NIK *</Label>
                  <Input id="nik" placeholder="16 digit NIK" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="address">Alamat Lengkap *</Label>
                <Input id="address" placeholder="Jl. Nama Jalan, RT/RW, Kelurahan" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Nomor WhatsApp *</Label>
                  <Input id="phone" placeholder="08123456789" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@domain.com" />
                </div>
              </div>

              <div>
                <Label htmlFor="occupation">Pekerjaan</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih pekerjaan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ibu-rumah-tangga">Ibu Rumah Tangga</SelectItem>
                    <SelectItem value="pegawai">Pegawai</SelectItem>
                    <SelectItem value="wiraswasta">Wiraswasta</SelectItem>
                    <SelectItem value="pelajar">Pelajar/Mahasiswa</SelectItem>
                    <SelectItem value="pensiunan">Pensiunan</SelectItem>
                    <SelectItem value="lainnya">Lainnya</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Persetujuan</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    Saya setuju dengan syarat dan ketentuan Bank Sampah Giwang Bersih 04
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="privacy" />
                  <Label htmlFor="privacy" className="text-sm">
                    Saya mengizinkan penggunaan data untuk keperluan operasional bank sampah
                  </Label>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <UserPlus className="mr-2 h-5 w-5" />
                Daftar Sekarang
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pendaftaran;
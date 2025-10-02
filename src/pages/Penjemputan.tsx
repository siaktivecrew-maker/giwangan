import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Truck, Calculator, MessageCircle, Navigation, Phone, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PickupMap from "@/components/Map/PickupMap";
import { wasteTypes, getWasteTypeById } from "@/data/wasteTypes";

const Penjemputan = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    wasteType: "",
    estimatedWeight: "",
    address: "",
    notes: "",
    phoneNumber: "",
    customerName: ""
  });
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | undefined>();
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [isGeocoding, setIsGeocoding] = useState(false); // State untuk loading alamat

  useEffect(() => {
    if (formData.wasteType && formData.estimatedWeight) {
      const wasteType = getWasteTypeById(formData.wasteType);
      if (wasteType) {
        const weight = parseFloat(formData.estimatedWeight);
        if (!isNaN(weight)) {
          setEstimatedPrice(weight * wasteType.pricePerKg);
        }
      }
    } else {
      setEstimatedPrice(0);
    }
  }, [formData.wasteType, formData.estimatedWeight]);

  const handleLocationSelect = async (lat: number, lng: number) => {
    setSelectedLocation({ lat, lng });
    setIsGeocoding(true);
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
      if (!response.ok) throw new Error("Gagal mengambil data alamat.");

      const data = await response.json();
      if (data && data.display_name) {
        setFormData(prev => ({ ...prev, address: data.display_name }));
      } else {
        throw new Error("Alamat tidak ditemukan.");
      }
    } catch (error) {
      console.error("Reverse geocoding error:", error);
      toast({
        title: "Gagal Mendapatkan Alamat",
        description: "Tidak dapat menemukan alamat. Mohon isi secara manual.",
        variant: "destructive",
      });
      setFormData(prev => ({ ...prev, address: "" }));
    } finally {
      setIsGeocoding(false);
    }
  };

  const getCurrentLocation = () => {
    setIsLoadingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          handleLocationSelect(latitude, longitude);
          setIsLoadingLocation(false);
          toast({
            title: "Lokasi Berhasil Dideteksi",
            description: "Alamat Anda telah diisi secara otomatis.",
          });
        },
        (error) => {
          setIsLoadingLocation(false);
          toast({
            title: "Gagal Mendapatkan Lokasi",
            description: "Pastikan Anda mengizinkan akses lokasi.",
            variant: "destructive",
          });
          console.error("Geolocation error:", error);
        }
      );
    } else {
      setIsLoadingLocation(false);
      toast({
        title: "Geolokasi Tidak Didukung",
        description: "Browser Anda tidak mendukung fitur ini.",
        variant: "destructive",
      });
    }
  };

  const handleSchedulePickup = () => {
    // ... (Fungsi ini tidak ada perubahan)
    if (!formData.customerName || !formData.phoneNumber || !formData.wasteType || !formData.estimatedWeight || !formData.address || !selectedLocation) {
        toast({
          title: "Data Tidak Lengkap",
          description: "Mohon lengkapi semua data yang diperlukan.",
          variant: "destructive",
        });
        return;
      }
  
      const wasteType = getWasteTypeById(formData.wasteType);
      if (!wasteType) return;
  
      const googleMapsLink = `https://maps.google.com/?q=${selectedLocation.lat},${selectedLocation.lng}`;
      const message = `*JADWAL PENJEMPUTAN SAMPAH*\n\n👤 *Nama:* ${formData.customerName}\n📱 *No. HP:* ${formData.phoneNumber}\n\n♻️ *Jenis Sampah:* ${wasteType.name}\n⚖️ *Perkiraan Berat:* ${formData.estimatedWeight} kg\n💰 *Harga per kg:* Rp ${wasteType.pricePerKg.toLocaleString('id-ID')}\n💵 *Estimasi Total:* Rp ${estimatedPrice.toLocaleString('id-ID')}\n\n📍 *Alamat Lengkap:* ${formData.address}\n🗺️ *Link Koordinat:* ${googleMapsLink}\n\n📝 *Catatan Tambahan:* ${formData.notes || "Tidak ada"}\n\nTerima kasih telah menggunakan layanan Bank Sampah Giwang Bersih 04! 🌱`;
  
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/628123456789?text=${encodedMessage}`;
  
      window.open(whatsappUrl, '_blank');
  
      toast({
        title: "Pesan WhatsApp Dibuka",
        description: "Silakan kirim pesan untuk mengonfirmasi jadwal penjemputan.",
      });
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-3">
            <Truck className="h-8 w-8 text-primary" />
            Jadwal Penjemputan Sampah
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nikmati kemudahan layanan penjemputan sampah langsung ke rumah Anda. 
            Isi formulir di bawah dan tentukan lokasi untuk dijadwalkan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section - DI SINI BAGIAN YANG LENGKAP */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Data Penjemputan
              </CardTitle>
              <CardDescription>
                Lengkapi formulir untuk memulai proses penjemputan sampah
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Customer Info */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="customerName">Nama Lengkap *</Label>
                  <Input
                    id="customerName"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>
                <div>
                  <Label htmlFor="phoneNumber">Nomor WhatsApp *</Label>
                  <Input
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="Contoh: 08123456789"
                  />
                </div>
              </div>

              {/* Waste Details */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="wasteType">Jenis Sampah *</Label>
                  <Select value={formData.wasteType} onValueChange={(value) => setFormData({ ...formData, wasteType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jenis sampah" />
                    </SelectTrigger>
                    <SelectContent>
                      {wasteTypes.map((waste) => (
                        <SelectItem key={waste.id} value={waste.id}>
                          {waste.name} - Rp {waste.pricePerKg.toLocaleString('id-ID')}/{waste.unit}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="estimatedWeight">Perkiraan Berat (kg) *</Label>
                  <Input
                    id="estimatedWeight"
                    type="number"
                    step="0.1"
                    min="0"
                    value={formData.estimatedWeight}
                    onChange={(e) => setFormData({ ...formData, estimatedWeight: e.target.value })}
                    placeholder="Contoh: 5.5"
                  />
                </div>

                {estimatedPrice > 0 && (
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-sm text-muted-foreground">Estimasi Pendapatan:</div>
                    <div className="text-2xl font-bold text-primary">
                      Rp {estimatedPrice.toLocaleString('id-ID')}
                    </div>
                  </div>
                )}
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address">Alamat Lengkap *</Label>
                <div className="relative">
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder={isGeocoding ? "Mencari alamat dari titik peta..." : "Geser peta atau isi manual"}
                    rows={3}
                    disabled={isGeocoding}
                  />
                  {isGeocoding && <Loader2 className="absolute top-3 right-3 h-5 w-5 animate-spin text-muted-foreground" />}
                </div>
              </div>

              {/* Notes */}
              <div>
                <Label htmlFor="notes">Catatan Tambahan</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Contoh: Sampah di depan rumah pagar biru"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* Map Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Tentukan Lokasi Penjemputan
              </CardTitle>
              <CardDescription>
                Klik atau geser ikon truk untuk menentukan titik penjemputan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={getCurrentLocation} 
                disabled={isLoadingLocation}
                className="w-full"
                variant="outline"
              >
                {isLoadingLocation ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Mendeteksi Lokasi...
                  </>
                ) : (
                  <>
                    <Navigation className="mr-2 h-4 w-4" />
                    Gunakan Lokasi Saya
                  </>
                )}
              </Button>

              <PickupMap 
                onLocationSelect={handleLocationSelect}
                selectedLocation={selectedLocation}
              />

              {selectedLocation && (
                <div className="text-sm text-muted-foreground">
                  <strong>Koordinat terpilih:</strong><br />
                  Lat: {selectedLocation.lat.toFixed(6)}, Lng: {selectedLocation.lng.toFixed(6)}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Submit Button */}
        <Card>
          <CardContent className="pt-6">
            <Button 
              onClick={handleSchedulePickup}
              size="lg"
              className="w-full btn-primary hover:shadow-lg transition-all"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Jadwalkan Penjemputan via WhatsApp
            </Button>
            <p className="text-sm text-muted-foreground text-center mt-3">
              Dengan mengklik tombol di atas, Anda akan diarahkan ke WhatsApp.
            </p>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="bg-accent/50">
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-lg font-semibold">
                <Phone className="h-5 w-5" />
                Kontak Admin Penjemputan
              </div>
              <p className="text-muted-foreground">
                WhatsApp: <strong>+62 812-3456-789</strong> | 
                Jam Operasional: <strong>Sabtu (Minggu Pertama dan Ketiga) 09:00 - 14:00 WIB</strong>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Penjemputan;
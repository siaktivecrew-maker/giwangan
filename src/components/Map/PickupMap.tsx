import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 1. Buat ikon kustom untuk truk
const truckIcon = new L.Icon({
  iconUrl: '/image/truck.png', // Path dari folder public
  iconSize: [40, 40],         // Ukuran ikon [lebar, tinggi] dalam piksel
  iconAnchor: [20, 40],       // Titik "jangkar" ikon (tengah bawah)
  popupAnchor: [0, -40]       // Titik popup relatif terhadap jangkar
});

// Kode L.Icon.Default tidak diperlukan lagi
// delete (L.Icon.Default.prototype as any)._getIconUrl; ...

interface PickupMapProps {
  onLocationSelect: (lat: number, lng: number) => void;
  selectedLocation?: { lat: number; lng: number };
}

const LocationMarker = ({ onLocationSelect, selectedLocation }: PickupMapProps) => {
  const [position, setPosition] = useState<LatLng | null>(
    selectedLocation ? new LatLng(selectedLocation.lat, selectedLocation.lng) : null
  );

  const map = useMapEvents({
    click(e) {
      const newPos = e.latlng;
      setPosition(newPos);
      onLocationSelect(newPos.lat, newPos.lng);
    },
  });

  useEffect(() => {
    if (selectedLocation) {
      const newPos = new LatLng(selectedLocation.lat, selectedLocation.lng);
      setPosition(newPos);
      map.setView(newPos, 15); // Zoom lebih dekat saat lokasi dipilih
    }
  }, [selectedLocation, map]);

  return position === null ? null : (
    <Marker
      position={position}
      draggable={true} // Marker sudah bisa digeser
      icon={truckIcon}    // 2. Gunakan ikon truk kustom di sini
      eventHandlers={{
        dragend: (e) => { // Event ini sudah benar
          const marker = e.target;
          const pos = marker.getLatLng();
          setPosition(pos);
          onLocationSelect(pos.lat, pos.lng); // Kirim koordinat baru ke parent
        },
      }}
    />
  );
};

const PickupMap = ({ onLocationSelect, selectedLocation }: PickupMapProps) => {
  const yogyakartaCenter: [number, number] = [-7.7956, 110.3695];

  return (
    <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg border">
      <MapContainer
        center={yogyakartaCenter}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker onLocationSelect={onLocationSelect} selectedLocation={selectedLocation} />
      </MapContainer>
    </div>
  );
};

export default PickupMap;
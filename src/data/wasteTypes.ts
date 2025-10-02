export interface WasteType {
  id: string;
  name: string;
  category: "organik" | "anorganik" | "b3";
  pricePerKg: number;
  unit: string;
  conditions: string[];
}

export const wasteTypes: WasteType[] = [
  // Organik
  {
    id: "org-food",
    name: "Sisa Makanan",
    category: "organik",
    pricePerKg: 500,
    unit: "kg",
    conditions: ["Tidak bercampur dengan plastik", "Tidak busuk berlebihan"]
  },
  {
    id: "org-leaves",
    name: "Daun Kering",
    category: "organik",
    pricePerKg: 300,
    unit: "kg",
    conditions: ["Dalam kondisi kering", "Bebas dari sampah non-organik"]
  },

  // Anorganik - Plastik
  {
    id: "plastic-bottle",
    name: "Botol Plastik (PET)",
    category: "anorganik",
    pricePerKg: 3000,
    unit: "kg",
    conditions: ["Bersih dari sisa cairan", "Label boleh tidak dilepas", "Tutup plastik dipisah"]
  },
  {
    id: "plastic-bag",
    name: "Kantong Plastik",
    category: "anorganik",
    pricePerKg: 2000,
    unit: "kg",
    conditions: ["Bersih dan kering", "Tidak tercampur dengan sampah lain"]
  },
  {
    id: "plastic-container",
    name: "Wadah Plastik",
    category: "anorganik",
    pricePerKg: 2500,
    unit: "kg",
    conditions: ["Dicuci bersih", "Tidak retak atau rusak parah"]
  },

  // Anorganik - Kertas
  {
    id: "cardboard",
    name: "Kardus/Karton",
    category: "anorganik",
    pricePerKg: 1500,
    unit: "kg",
    conditions: ["Tidak basah atau lembab", "Dilipat rapi", "Bebas dari lakban"]
  },
  {
    id: "newspaper",
    name: "Koran/Majalah",
    category: "anorganik",
    pricePerKg: 1800,
    unit: "kg",
    conditions: ["Kondisi kering", "Tidak sobek berlebihan"]
  },
  {
    id: "office-paper",
    name: "Kertas HVS/Fotokopi",
    category: "anorganik",
    pricePerKg: 2200,
    unit: "kg",
    conditions: ["Tidak terlalu kotor", "Bebas dari klip atau staples"]
  },

  // Anorganik - Logam
  {
    id: "aluminum-can",
    name: "Kaleng Aluminium",
    category: "anorganik",
    pricePerKg: 12000,
    unit: "kg",
    conditions: ["Dicuci bersih", "Dipress/dimampatkan lebih baik"]
  },
  {
    id: "steel-can",
    name: "Kaleng Besi",
    category: "anorganik",
    pricePerKg: 4000,
    unit: "kg",
    conditions: ["Bersih dari sisa makanan", "Tidak berkarat parah"]
  },

  // Anorganik - Kaca
  {
    id: "glass-bottle",
    name: "Botol Kaca",
    category: "anorganik",
    pricePerKg: 1000,
    unit: "kg",
    conditions: ["Utuh, tidak pecah", "Dicuci bersih", "Tutup/label tidak perlu dilepas"]
  },

  // B3 (Bahan Berbahaya dan Beracun)
  {
    id: "battery",
    name: "Baterai Bekas",
    category: "b3",
    pricePerKg: 0, // Biasanya tidak dibayar tapi diterima untuk pengelolaan yang benar
    unit: "unit",
    conditions: ["Dikumpulkan dalam wadah terpisah", "Jangan dicampur dengan sampah lain"]
  },
  {
    id: "electronic",
    name: "Komponen Elektronik",
    category: "b3",
    pricePerKg: 15000,
    unit: "kg",
    conditions: ["Komponen logam yang bisa didaur ulang", "Baterai dipisah terlebih dahulu"]
  }
];

export const getWasteTypesByCategory = (category: string) => {
  return wasteTypes.filter(waste => waste.category === category);
};

export const getWasteTypeById = (id: string) => {
  return wasteTypes.find(waste => waste.id === id);
};
export interface Package {
  id: string;
  name: string;
  description: string;
  equipment: string[];
  price: number;
  hasLighting: boolean;
  hasSound: boolean;
  capacity: string;
}

export const packages: Package[] = [
  {
    id: "basic",
    name: "MINI",
    description: "Za manjše zabave in druženja",
    capacity: "do 30 oseb",
    equipment: [
      "2x zvočnik 300W",
      "1x mikser",
      "1x mikrofon",
      "Kabli in stojala",
    ],
    price: 60,
    hasSound: true,
    hasLighting: false,
  },
  {
    id: "terasa",
    name: "TERASA",
    description: "Popoln za teraso ali manjši piknik",
    capacity: "do 50 oseb",
    equipment: [
      "2x zvočnik 500W",
      "1x mikser 8-kanalni",
      "2x mikrofon",
      "Kabli in stojala",
      "Bluetooth povezava",
    ],
    price: 90,
    hasSound: true,
    hasLighting: false,
  },
  {
    id: "terasa-osvetlitev",
    name: "TERASA + OSVETLITEV S",
    description: "Ozvočenje z osnovno osvetlitvijo",
    capacity: "do 50 oseb",
    equipment: [
      "2x zvočnik 500W",
      "1x mikser 8-kanalni",
      "2x mikrofon",
      "4x LED par reflektor",
      "Kabli in stojala",
    ],
    price: 120,
    hasSound: true,
    hasLighting: true,
  },
  {
    id: "piknik",
    name: "PIKNIK",
    description: "Profesionalno ozvočenje za večje dogodke",
    capacity: "do 100 oseb",
    equipment: [
      "4x zvočnik 500W",
      "2x subwoofer",
      "1x mikser 12-kanalni",
      "3x mikrofon",
      "6x LED par reflektor",
      "2x moving head",
      "Kabli in stojala",
    ],
    price: 180,
    hasSound: true,
    hasLighting: true,
  },
  {
    id: "premium",
    name: "PREMIUM",
    description: "Kompletna oprema za večje dogodke",
    capacity: "do 200 oseb",
    equipment: [
      "6x zvočnik 700W",
      "4x subwoofer",
      "1x mikser 16-kanalni",
      "4x mikrofon brezžični",
      "8x LED par reflektor",
      "4x moving head",
      "2x laser",
      "Smoke machine",
      "Kabli in stojala",
    ],
    price: 280,
    hasSound: true,
    hasLighting: true,
  },
];

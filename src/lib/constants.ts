// ============================================
// Warkop Rakyat Digital — Static Data
// ============================================

export const SITE = {
  name: "GameBrew Corner",
  tagline: "Ngopi Santai, Ngegame Sampai Pagi",
  brand: "GameBrew Corner",
  copyright: "© 2024 GameBrew Corner - Kopi, Game, & Kebersamaan",
  heroHeadline: "Nongkrong Rakyat, Hiburan Konglomerat.",
  heroSubtitle:
    "Warkop GameBrew Corner — Tempatnya ngopi santai sambil mabar PS di meja masing-masing. Tinggal pilih meja, buka koper, langsung main!",
  philosophy:
    "Kami percaya kebahagiaan itu sederhana. Segelas kopi tubruk dan satu ronde FIFA bersama kawan adalah kemewahan yang bisa dinikmati siapa saja.",
  availableTables: 4,
  waNumber: "6281234567890",
  address: "Jl. Warkop Raya No. 123, Bandung",
};

export const NAV_ITEMS = [
  { label: "Beranda", href: "/" },
  { label: "Menu", href: "/warung-menu" },
  { label: "Paket", href: "/paket-mabar" },
];

// ---- Landing v2 ----
export const LANDING_V2 = {
  features: [
    {
      icon: "electric_bolt",
      title: "Zero Lag",
      description: "Internet kencang buat update game atau streaming lancar.",
    },
    {
      icon: "inventory_2",
      title: "Game Box Portable",
      description: "Buka kopernya, layar monitor dan console sudah siap sedia.",
    },
  ],
  promo: {
    title: "PROMO HARI INI",
    name: "Paket Mabar 3 Jam",
    bonus: "Gratis 2 Kopi Susu & 1 Porsi Pisang Goreng Keju.",
    price: 45000,
    hashtag: "#VibeRakyat",
  },
  community: {
    title: "Komunitas Warkop",
    description:
      "Gabung grup WhatsApp kami untuk info turnamen mingguan berhadiah kopi gratis sebulan!",
  },
};

// ---- Warung Menu ----
export const WARUNG_MENU = {
  subtitle: "Kelezatan merakyat, kenyamanan maksimal. Pilihan menu favorit untuk teman ngopi dan mabar Anda.",
  drinks: {
    title: "Kopi & Minuman",
    icon: "coffee",
    items: [
      { icon: "coffee", name: "Kopi Hitam", price: 5000 },
      { icon: "local_cafe", name: "Es Teh", price: 5000 },
      { icon: "coffee", name: "Kopi Susu", price: 7000 },
    ],
  },
  snacks: {
    title: "Camilan",
    icon: "bakery_dining",
    items: [
      { icon: "bakery_dining", name: "Gorengan Hangat", badge: "Panas!", price: 2000 },
      { icon: "ramen_dining", name: "Indomie Telur", badge: "Populer", price: 10000 },
      { icon: "restaurant", name: "Pisang Goreng", badge: "Manis", price: 8000 },
    ],
  },
  combo: {
    label: "DIOLAH DENGAN KASIH",
    title: "Paket Mabar Rakyat",
    description: "Nikmati Kopi Susu + Indomie Telur + Sesi Gaming 2 Jam hanya seharga Rp 25rb. Kebersamaan tanpa batas, harga bersahabat.",
    price: 25000,
    cta: "Ambil Paket Ini",
  },
};

// ---- Paket Mabar ----
export const PAKET_MABAR = {
  subtitle: "Kenyamanan nongkrong khas warkop dengan fasilitas gaming modern. Pilih paket yang pas di kantong, main sepuasnya bareng kawan.",
  packages: [
    {
      id: "tanggal-tua",
      title: "Paket Tanggal Tua",
      price: 10000,
      features: [
        { icon: "coffee", label: "1 Kopi Hitam" },
        { icon: "videogame_asset", label: "1 Jam Main PS" },
      ],
      cta: "Pilih Paket",
    },
    {
      id: "bos-muda",
      title: "Paket Bos Muda",
      price: 35000,
      badge: "Terlaris",
      features: [
        { icon: "coffee", label: "2 Kopi Susu Mantap" },
        { icon: "lunch_dining", label: "1 Indomie Double Spesial" },
        { icon: "sports_esports", label: "2 Jam Main PS Premium" },
      ],
      cta: "Ambil Paket Sultan",
    },
    {
      id: "sewa-console",
      title: "Sewa Console Doang",
      price: 5000,
      priceUnit: "/ jam",
      features: [
        { icon: "joystick", label: "Akses Console Pilihan" },
        { icon: "groups", label: "Bisa Mabar s/d 4 Orang" },
      ],
      cta: "Pesan Jam",
    },
  ],
  notes: [
    "Paket Mabar berlaku setiap hari jam 10.00 - 22.00.",
    "Wajib menjaga kebersihan stick dan meja (ojo kemproh).",
    "Update game terbaru tersedia di semua console.",
    "Bisa pesan snack tambahan langsung di tempat.",
  ],
  quote: '"Main tenang, kopi kenceng, dompet seneng."',
};

export const FOOTER_LINKS = [
  { label: "Hubungi via WhatsApp", href: "#wa" },
  { label: "Alamat Kami", href: "#alamat" },
  { label: "Kebijakan Privasi", href: "#privasi" },
];

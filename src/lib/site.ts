/**
 * Pusat data MamCheck.
 * GANTI nilai bertanda  TODO  dengan data asli sebelum go-live.
 */

export const site = {
  brand: "MamCheck",
  /** Domain produksi — dipakai untuk canonical, sitemap, og:url, JSON-LD. */
  url: "https://mamcheck.my.id",
  /** Video hero, taruh file di public/ lalu isi mis. "/hero.mp4". Kosong = hero teks biasa. */
  heroVideo: "/hero.mp4",
  heroVideoPoster: "/hero-poster.webp",
  tagline:
    "Masakan Bali rumahan — bumbu digerus harian, dimasak sesuai pesanan",
  city: "Gempol, Pasuruan",
  whatsapp: "6282142312999", // nomor WA admin format 62xxx (tanpa + / 0 / spasi)
  whatsappDisplay: "+62 821-4231-2999", // tampilan nomor untuk pelanggan
  instagram: "https://instagram.com/", // TODO: akun IG
  jam: "Setiap hari, 08.00 – 21.00 WIB",
  alamat:
    "Jl. Lapangan Tembak, Dsn. Ngelawang, Watukosek No. 36, RT 003/RW 001, Gempol, Pasuruan",
  mapsQuery: "Jl. Lapangan Tembak, Watukosek, Gempol, Pasuruan",
  /** ringkasan pengiriman — dipakai di blok pengiriman & footer */
  kirimRingkas: "Pasuruan & Sidoarjo · radius ±25 km",
};

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type Disain = {
  id: string;
  nama: string;
  /** satu kalimat saja — halaman ini dibaca di HP */
  deskripsi: string;
  /** varian yang bisa dipilih pembeli */
  opsi: string[];
  /** true = contoh kacang bali: harga tidak dicantumkan */
  hargaViaAdmin?: boolean;
  label?: string;
  art: string;
  /** foto asli (di /public) — dipakai kalau ada, menggantikan ilustrasi SVG */
  foto?: string;
  fotoAlt?: string;
};

export const menu: Disain[] = [
  {
    id: "ayam-betutu",
    nama: "Ayam Betutu",
    deskripsi:
      "Ayam berbumbu base genep khas Bali, dikukus perlahan lalu dipanggang dalam balutan daun pisang.",
    opsi: ["Original (gurih)", "Pedas khas Bali"],
    label: "Paling dicari",
    art: "betutu",
    foto: "/menu/ayam-betutu.webp",
    fotoAlt:
      "Ayam betutu Bali berbumbu kuning di atas daun pisang, lengkap dengan cah kangkung, kacang goreng, dan sambal matah",
  },
  {
    id: "sate-manis-ayam",
    nama: "Sate Manis Ayam",
    deskripsi:
      "Paha ayam dimarinasi bumbu Bali, dibakar di atas arang, disajikan dengan sambal kecap dan limau.",
    opsi: ["10 tusuk", "20 tusuk"],
    art: "sate",
    foto: "/menu/sate-manis-ayam.webp",
    fotoAlt:
      "Sate manis ayam MamCheck dipanggang dengan arang, disajikan di atas daun pisang bersama sambal kecap pedas dan limau",
  },
  {
    id: "sate-lilit",
    nama: "Sate Lilit",
    deskripsi:
      "Daging berbumbu kelapa dililitkan pada batang bambu, dibakar hingga harum.",
    opsi: ["10 tusuk", "20 tusuk"],
    art: "lilit",
    foto: "/menu/sate-lilit.webp",
    fotoAlt:
      "Sate lilit Bali — daging berbumbu kelapa dililitkan pada batang bambu, dibakar di atas arang, disajikan di atas daun pisang dalam tampah bambu",
  },
  {
    id: "tim-ayam",
    nama: "Tum Ayam",
    deskripsi:
      "Ayam cincang berbumbu rempah, santan, dan telur; dibungkus daun pisang lalu dikukus.",
    opsi: ["Paha bawah", "Dada"],
    label: "Ringan & hangat",
    art: "tim",
    foto: "/menu/tum-ayam.webp",
    fotoAlt:
      "Tum ayam Bali — ayam cincang berbumbu dibungkus daun pisang, disajikan dengan irisan cabai dan daun jeruk di atas talenan kayu",
  },
  {
    id: "soup-iga",
    nama: "Soup Iga",
    deskripsi:
      "Iga sapi direbus lambat dalam kaldu rempah hingga empuk dan mudah lepas dari tulang.",
    opsi: ["Porsi reguler", "Porsi jumbo"],
    art: "soup",
    foto: "/menu/soup-iga.webp",
    fotoAlt:
      "Soup iga sapi MamCheck — kuah kaldu bening dengan iga empuk, tomat, daun bawang, dan bawang goreng, disajikan dengan sambal dan jeruk nipis",
  },
  {
    id: "kacang-bali",
    nama: "Kacang Bali",
    deskripsi:
      "Kacang tanah sangrai berbumbu Bali — gurih, pedas lembut, sedikit manis, dan tahan lama.",
    opsi: ["200 gram", "500 gram", "1 kg"],
    label: "Bisa kirim luar kota",
    hargaViaAdmin: true,
    art: "kacang",
  },
];

/** pesanan porsi besar: catering, nasi kotak, hajatan */
export const layanan = [
  {
    judul: "Catering harian & kantor",
    isi: "Menu Bali dalam porsi tray atau per orang untuk makan siang tim, arisan, dan rapat kantor. Mulai 10 porsi, konfirmasi H-1.",
    cta: "Halo MamCheck, mau tanya catering untuk … porsi, tanggal …",
    label: "Mulai 10 porsi",
  },
  {
    judul: "Nasi kotak",
    isi: "Nasi kotak siap antar untuk rapat, syukuran, dan pembagian ke warga. Lauk dapat dipilih: betutu, sate, tum ayam, atau soup iga.",
    cta: "Halo MamCheck, mau pesan nasi kotak … kotak untuk tanggal …",
    label: "Bisa pilih lauk",
  },
  {
    judul: "Hajatan & acara keluarga",
    isi: "Pesanan porsi besar untuk pernikahan, selamatan, dan hajatan. Jadwal masak serta pengiriman disusun bersama admin.",
    cta: "Halo MamCheck, ada hajatan tanggal …, mau tanya menu dan estimasi biaya.",
    label: "Diskusi jadwal",
  },
];

/** tiga baris pengiriman */
export const kirim = [
  {
    judul: "Pasuruan & Sidoarjo",
    isi: "Kurir instan/sameday, radius ±25 km dari dapur.",
  },
  {
    judul: "Ambil sendiri",
    isi: "Gratis, langsung di dapur Watukosek, Gempol.",
  },
  {
    judul: "Frozen & Kacang Bali",
    isi: "Dapat dikirim lebih jauh melalui paket kargo.",
  },
];

export const langkah = [
  {
    no: "01",
    judul: "Hubungi admin",
    isi: "Sampaikan menu, jumlah, tanggal, dan alamat melalui WhatsApp.",
  },
  {
    no: "02",
    judul: "Konfirmasi pesanan",
    isi: "Admin menghitung ongkos kirim, jadwal masak, dan total pesanan.",
  },
  {
    no: "03",
    judul: "Dapur memasak",
    isi: "Pesanan dimasak pada hari yang disepakati, lalu dikirim atau diambil.",
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: "Mengapa tidak ada daftar harga?",
    a: "Harga menyesuaikan ukuran porsi dan jumlah pesanan, termasuk Kacang Bali. Total akan dihitung admin setelah Anda menyampaikan menu dan jumlahnya.",
  },
  {
    q: "Apakah bisa dikirim ke luar kota?",
    a: "Masakan siap santap hanya untuk Pasuruan & Sidoarjo (radius ±25 km). Frozen dan Kacang Bali dapat dikirim lebih jauh melalui paket kargo.",
  },
  {
    q: "Berapa lama pesanan disiapkan?",
    a: "Seluruh pesanan dimasak setelah pesanan masuk. Untuk porsi besar atau acara, mohon konfirmasi minimal H-1.",
  },
  {
    q: "Bisakah ambil sendiri di dapur?",
    a: "Bisa, tanpa biaya tambahan. Alamat dapur tercantum pada bagian kontak di bawah halaman ini.",
  },
  {
    q: "Apakah Ayam Betutu punya pilihan level pedas?",
    a: "Tersedia dua pilihan: Original (gurih) dan Pedas khas Bali. Silakan sampaikan pilihan Anda saat memesan.",
  },
  {
    q: "Apakah menerima pesanan hajatan atau nasi kotak?",
    a: "Ya. Sampaikan tanggal, jumlah porsi atau kotak, dan lokasi. Untuk porsi besar mohon konfirmasi minimal H-1, dan untuk hajatan sebaiknya lebih awal agar jadwal dapur dapat disiapkan.",
  },
  {
    q: "Apakah ada minimal order untuk catering?",
    a: "Catering dan nasi kotak mulai 10 porsi. Untuk jumlah lebih besar, susunan menu dan waktu pengiriman dibahas bersama admin.",
  },
  {
    q: "Bagaimana cara pembayarannya?",
    a: "Transfer bank atau e-wallet. Untuk pesanan besar, berlaku uang muka (DP) sebagai tanda pesanan diproses.",
  },
];

/**
 * Pusat data MamCheck.
 * GANTI nilai bertanda  TODO  dengan data asli sebelum go-live.
 */

export const site = {
  brand: "MamCheck",
  tagline: "Masakan Bali rumahan — made by order",
  city: "Gempol, Pasuruan",
  whatsapp: "6282142312999", // nomor WA admin format 62xxx (tanpa + / 0 / spasi)
  whatsappDisplay: "+62 821-4231-2999", // tampilan nomor untuk pelanggan
  instagram: "https://instagram.com/", // TODO: akun IG
  jam: "Setiap hari, 08.00 – 21.00 WIB",
  alamat:
    "Jl. Lapangan Tembak, Dsn. Ngelawang, Watukosek No. 36, RT 003/RW 001, Gempol, Pasuruan",
  mapsQuery: "Jl. Lapangan Tembak, Watukosek, Gempol, Pasuruan",
  radius: "radius ±10 km dari dapur (kurir instan / sameday)", // TODO: radius asli
};

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type Disain = {
  id: string;
  nama: string;
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
  catatan?: string;
};

export const menu: Disain[] = [
  {
    id: "ayam-betutu",
    nama: "Ayam Betutu",
    deskripsi:
      "Ayam dibalut base genep khas Bali, dikukus lalu dipanggang dalam balutan daun pisang sampai bumbu meresap ke tulang.",
    opsi: ["Original (gurih)", "Pedas khas Bali"],
    label: "Paling dicari",
    art: "betutu",
    catatan: "Siap santap • pengiriman area lokal",
  },
  {
    id: "sate-manis-ayam",
    nama: "Sate Manis Ayam",
    deskripsi:
      "Paha ayam segar dimarinasi bumbu, ditusuk rapi lalu dipanggang di atas arang sampai harum — disajikan dengan sambal kecap pedas dan limau.",
    opsi: ["10 tusuk", "20 tusuk"],
    art: "sate",
    foto: "/menu/sate-manis-ayam.webp",
    fotoAlt:
      "Sate manis ayam MamCheck dipanggang dengan arang, disajikan di atas daun pisang bersama sambal kecap pedas dan limau",
    catatan: "Siap santap • pengiriman area lokal",
  },
  {
    id: "sate-lilit",
    nama: "Sate Lilit",
    deskripsi:
      "Daging dicampur bumbu dan kelapa parut, dililitkan pada batang serai — aroma wangi waktu dibakar.",
    opsi: ["10 tusuk", "20 tusuk"],
    art: "lilit",
    catatan: "Siap santap • pengiriman area lokal",
  },
  {
    id: "tim-ayam",
    nama: "Tim Ayam",
    deskripsi:
      "Ayam dikukus perlahan dengan jahe, jeruk limau, dan bumbu ringan. Kuah bening, rasa bersih, cocok untuk yang sedang kurang enak badan.",
    opsi: ["Paha bawah", "Dada"],
    label: "Ringan & hangat",
    art: "tim",
    catatan: "Siap santap • pengiriman area lokal",
  },
  {
    id: "soup-iga",
    nama: "Soup Iga",
    deskripsi:
      "Iga sapi direbus lambat berjam-jam dengan rempah, kuah bening kaldu dalam sampai daging lepas dari tulang.",
    opsi: ["Porsi reguler", "Porsi jumbo"],
    art: "soup",
    catatan: "Siap santap • pengiriman area lokal",
  },
  {
    id: "kacang-bali",
    nama: "Kacang Bali",
    deskripsi:
      "Kacang tanah sangrai dengan bumbu khas Bali: gurih, pedas, sedikit manis. Tahan lama, jadi oleh-oleh paling aman dibawa jauh.",
    opsi: ["200 gram", "500 gram", "1 kg"],
    label: "Bisa kirim luar kota",
    hargaViaAdmin: true,
    art: "kacang",
    catatan: "Ekspedisi antar kota",
  },
];

export const faq: { q: string; a: string }[] = [
  {
    q: "Kenapa Kacang Bali tidak ada harganya?",
    a: "Harga Kacang Bali menyesuaikan ukuran kemasan dan jumlah pesanan. Admin akan hitungkan harga terbaik begitu kamu sebutkan ukuran dan jumlahnya di WhatsApp.",
  },
  {
    q: "Apakah makanan bisa dikirim ke luar kota?",
    a: "Untuk sekarang tidak. Ayam Betutu, sate, tim ayam, dan soup iga hanya untuk area lokal karena disajikan matang siap santap dan paling enak dimakan segar. Kacang Bali justru aman dikirim antar kota pakai ekspedisi.",
  },
  {
    q: "Berapa lama pesanan dibuat?",
    a: "Semua dimasak setelah pesanan masuk (made by order), jadi bukan stok simpanan. Untuk pesanan porsi besar atau acara, mohon konfirmasi minimal H-1 agar dapur bisa menyiapkan bumbu dan jadwal masak.",
  },
  {
    q: "Ayam Betutu ada level pedasnya?",
    a: "Ada dua pilihan: Original yang gurih dan Pedas khas Bali. Sebutkan saat chat supaya admin catat di pesananmu.",
  },
  {
    q: "Apakah bisa memesan untuk acara keluarga?",
    a: "Bisa. Ceritakan jumlah porsi, tanggal, dan lokasi acaranya via WhatsApp — admin akan bantu hitung kebutuhan porsi dan waktu pengirimannya.",
  },
  {
    q: "Bagaimana cara pembayarannya?",
    a: "Transfer bank atau e-wallet. Untuk pesanan dalam jumlah besar, berlaku DP terlebih dahulu sebagai tanda pesanan diproses.",
  },
];

export const langkah = [
  {
    no: "01",
    judul: "Chat admin",
    isi: "Klik tombol WhatsApp, sebutkan menu, jumlah, tanggal, dan alamat pengiriman.",
  },
  {
    no: "02",
    judul: "Konfirmasi pesanan",
    isi: "Admin cek ketersediaan bahan, jadwal masak, dan biaya kirim. Semua dihitung di chat.",
  },
  {
    no: "03",
    judul: "Dapur mulai masak",
    isi: "Setelah pesanan dikonfirmasi dan pembayaran/DP diterima, bahan disiapkan dan dimasak hari itu.",
  },
  {
    no: "04",
    judul: "Sampai di meja",
    isi: "Diambil sendiri, dikirim kurir area lokal, atau dikemas rapi untuk ekspedisi (kacang Bali).",
  },
];

export const momen = [
  {
    judul: "Kumpul keluarga",
    isi: "Nampan besar isi betutu, sate, dan soup iga untuk makan bersama di rumah.",
    art: "betutu",
  },
  {
    judul: "Syukuran & arisan",
    isi: "Pesanan jumlah banyak dengan jadwal masak yang diatur supaya datang pas waktu acara.",
    art: "sate",
  },
  {
    judul: "Oleh-oleh luar kota",
    isi: "Kacang Bali dikemas kuat, dikirim ekspedisi, sampai dalam kondisi utuh.",
    art: "kacang",
  },
];

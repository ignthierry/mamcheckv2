import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Art";
import HeroCloth from "./HeroCloth";
import { Shell } from "./Section";

const fakta = ["Halal, tanpa pengawet", "Bumbu digerus hari itu", "Ambil sendiri atau kirim ±25 km"];

export default function Hero() {
  return (
    <section id="atas" className="relative overflow-hidden">
      {/* latar: kain noren ThreeUI bergerak */}
      <HeroCloth />

      {/* selubung cream supaya teks terbaca di atas kain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream/90 via-cream/55 to-cream/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-cream/90 via-cream/55 to-transparent lg:block"
      />

      <Shell className="relative flex min-h-[30rem] flex-col justify-center py-14 sm:min-h-[34rem] sm:py-20 lg:min-h-[38rem]">
        <h1 className="max-w-2xl font-display text-[2.1rem] leading-[1.08] tracking-tight text-forest sm:text-5xl lg:text-[3.3rem]">
          Masakan Bali rumahan, dimasak setelah kamu pesan.
        </h1>

        <p className="mt-5 max-w-xl text-[1rem] leading-relaxed text-moss/90">
          Ayam betutu, sate lilit, tim ayam, sampai soup iga — diolah dadakan di dapur {site.city}
          {" "}dan dikirim hari itu juga.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={waLink(`Halo ${site.brand}, saya mau pesan masakan Bali. Boleh dibantu?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-forest px-7 py-3.5 text-[0.95rem] font-semibold text-cream shadow-warm transition-colors hover:bg-moss"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pesan via WhatsApp
          </a>
          <a
            href="#menu"
            className="inline-flex items-center rounded-full border border-forest/25 px-6 py-3.5 text-[0.95rem] font-semibold text-forest transition-colors hover:border-gold hover:text-gold"
          >
            Lihat menu
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
          {fakta.map((f) => (
            <li key={f} className="flex items-center gap-2 text-[0.84rem] font-medium text-moss">
              <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-gold" />
              {f}
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-md text-[0.72rem] leading-relaxed text-moss/60">
          Kain noren di latar halaman ini bergerak selama dapur masih mengerjakan pesanan hari ini.
        </p>
      </Shell>
    </section>
  );
}

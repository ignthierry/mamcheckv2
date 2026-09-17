import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Art";
import { Shell } from "./Section";

const fakta = ["Halal, tanpa pengawet", "Bumbu digerus hari itu", "Ambil sendiri atau kirim ±25 km"];

const pesanAwal = (isi: string) => waLink(isi);

/** CTA + fakta singkat — dipakai versi terang maupun versi di atas video. */
function Aksi({ terang }: { terang: boolean }) {
  return (
    <>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={pesanAwal(`Halo ${site.brand}, saya mau pesan masakan Bali. Boleh dibantu?`)}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[0.95rem] font-semibold shadow-warm transition-colors ${
            terang ? "bg-gold text-ink hover:bg-goldsoft" : "bg-forest text-cream hover:bg-moss"
          }`}
        >
          <WhatsAppIcon className="h-5 w-5" />
          Pesan via WhatsApp
        </a>
        <a
          href="#menu"
          className={`inline-flex items-center rounded-full border px-6 py-3.5 text-[0.95rem] font-semibold transition-colors ${
            terang
              ? "border-cream/45 text-cream hover:border-goldsoft hover:text-goldsoft"
              : "border-forest/25 text-forest hover:border-gold hover:text-gold"
          }`}
        >
          Lihat menu
        </a>
      </div>

      <ul className="mt-9 flex flex-wrap gap-x-5 gap-y-2">
        {fakta.map((f) => (
          <li
            key={f}
            className={`flex items-center gap-2 text-[0.84rem] font-medium ${
              terang ? "text-honey/90" : "text-moss"
            }`}
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-gold" />
            {f}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Hero() {
  const video = site.heroVideo;

  /* --- Versi dengan video: full-bleed, teks di atas lapisan gelap --- */
  if (video) {
    return (
      <section id="atas" className="relative overflow-hidden bg-forest">
        <video
          className="hero-video absolute inset-0 h-full w-full object-cover"
          poster={site.heroVideoPoster || undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* lapisan gelap supaya teks tetap terbaca */}
        <div aria-hidden="true" className="absolute inset-0 bg-forest/70" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-forest via-forest/70 to-forest/35"
        />

        <Shell className="relative flex min-h-[34rem] flex-col justify-end py-16 sm:min-h-[38rem] sm:py-20 lg:min-h-[42rem] lg:justify-center">
          <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-goldsoft uppercase [text-shadow:0_2px_10px_rgba(7,33,26,0.75)]">
            {site.city} · made by order
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[2.2rem] leading-[1.06] tracking-tight text-cream [text-shadow:0_3px_18px_rgba(7,33,26,0.7)] sm:text-5xl lg:text-[3.5rem]">
            Masakan Bali rumahan, dimasak setelah kamu pesan.
          </h1>
          <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-honey/95 [text-shadow:0_2px_12px_rgba(7,33,26,0.8)]">
            Ayam betutu, sate lilit, tum ayam, sampai soup iga — diolah dadakan di dapur{" "}
            {site.city} dan dikirim hari itu juga.
          </p>
          <Aksi terang />
        </Shell>
      </section>
    );
  }

  /* --- Versi cadangan: tanpa video, hero teks di atas cream --- */
  return (
    <section id="atas" className="relative overflow-hidden border-b border-gold/20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_0%,#f6ecd9_0%,rgba(247,240,227,0)_62%)]"
      />

      <Shell className="relative flex min-h-[26rem] flex-col justify-center py-16 sm:min-h-[30rem] sm:py-20 lg:min-h-[32rem]">
        <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-gold uppercase">
          {site.city} · made by order
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[2.2rem] leading-[1.06] tracking-tight text-forest sm:text-5xl lg:text-[3.5rem]">
          Masakan Bali rumahan, dimasak setelah kamu pesan.
        </h1>
        <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-moss/90">
          Ayam betutu, sate lilit, tum ayam, sampai soup iga — diolah dadakan di dapur {site.city}{" "}
          dan dikirim hari itu juga.
        </p>
        <Aksi terang={false} />
      </Shell>
    </section>
  );
}

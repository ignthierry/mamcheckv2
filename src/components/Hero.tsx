import { site, waLink } from "@/lib/site";
import { AyamBetutu, KacangBali, SateLilit, OrnamentBand, TumpalBorder, WhatsAppIcon } from "./Art";
import HeroCloth from "./HeroCloth";
import { Shell } from "./Section";

const jaminan = ["Halal & tanpa pengawet", "Dimasak setelah dipesan", "Bumbu base genep segar"];

export default function Hero() {
  return (
    <section id="atas" className="relative overflow-hidden">
      {/* latar utama: kain noren ThreeUI bergerak */}
      <HeroCloth />

      {/* selubung cream supaya teks tetap terbaca di atas kain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream/88 via-cream/45 to-transparent sm:from-cream/85 sm:via-cream/30 sm:to-transparent"
      />
      {/* scrim tambahan di kolom teks (kiri) supaya kain tetap terbaca di kanan/bawah */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-cream/88 via-cream/50 to-transparent lg:block"
      />

      {/* latar hangat */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grain opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-24 h-[26rem] w-[26rem] rounded-full bg-honey/45 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-jade/15 blur-3xl"
      />

      <Shell className="relative grid items-center gap-14 pt-12 pb-28 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-20 lg:pb-48">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/70 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.18em] text-moss uppercase">
            Masakan Bali rumahan · made by order
          </span>

          <h1 className="mt-6 font-display text-[2.15rem] leading-[1.08] tracking-tight text-forest sm:text-5xl lg:text-[3.4rem]">
            Masakan Bali, dimasak{" "}
            <span className="relative inline-block text-gold">
              setelah
              <svg
                viewBox="0 0 200 12"
                className="absolute -bottom-1.5 left-0 h-2.5 w-full text-goldsoft"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8c40-6 92-7 196-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            kamu pesan.
          </h1>

          <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-moss/90">
            Ayam betutu, sate lilit, tim ayam, sampai soup iga — diolah dadakan di dapur rumahan
            {" "}{site.city} dengan bumbu yang digerus hari itu, jadi yang sampai di meja kamu
            benar-benar baru matang.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={waLink(
                `Halo ${site.brand}, saya mau pesan masakan Bali. Boleh dibantu?`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-forest px-7 py-4 text-[0.95rem] font-semibold text-cream shadow-warm transition-colors hover:bg-moss"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pesan via WhatsApp
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border border-forest/25 px-6 py-4 text-[0.95rem] font-semibold text-forest transition-colors hover:border-gold hover:text-gold"
            >
              Lihat menu
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {jaminan.map((j) => (
              <li key={j} className="flex items-center gap-2 text-sm font-medium text-moss">
                <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-gold" />
                {j}
              </li>
            ))}
          </ul>

          <p className="mt-7 flex items-start gap-2.5 text-[0.85rem] leading-relaxed text-moss/85">
            <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-jade/70" />
            <span>
              Kain noren di latar halaman ini bergerak selama dapur {site.city} masih mengerjakan
              pesanan hari ini — kalau tirai berhenti, artinya pesanan sudah tutup.
            </span>
          </p>

          <p className="mt-7 rounded-2xl border border-gold/30 bg-cream/60 px-5 py-3.5 text-[0.83rem] leading-relaxed text-moss/85">
            <strong className="font-semibold text-forest">Catatan:</strong> karena semua dimasak
            setelah pesanan masuk, untuk porsi besar atau acara mohon konfirmasi minimal H-1
            supaya dapur bisa atur jadwal masak.
          </p>
        </div>

        {/* komposisi visual */}
        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-goldsoft/50 bg-forest p-6 shadow-warm sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.13]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, #F3D89A 0 2px, transparent 3px), radial-gradient(circle at 70% 60%, #F3D89A 0 2px, transparent 3px)",
                backgroundSize: "34px 34px, 48px 48px",
              }}
            />
            <div className="relative">
              <p className="font-display text-2xl text-cream">Ayam Betutu</p>
              <p className="mt-1 text-sm text-honey/75">Pilihan original & pedas khas Bali</p>

              <span className="absolute -top-1 right-0 grid h-20 w-20 -rotate-8 place-items-center rounded-full border border-dashed border-goldsoft/70 bg-forest/70 text-center text-[0.58rem] leading-tight font-semibold tracking-[0.14em] text-honey uppercase backdrop-blur-sm sm:h-24 sm:w-24">
                Made
                <br />
                by
                <br />
                order
              </span>

              <AyamBetutu className="drift mx-auto mt-6 h-auto w-full max-w-[19rem] sm:mt-2 sm:max-w-[21rem]" />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-5 border-t border-goldsoft/25 pt-5">
              <div className="flex items-center gap-3">
                <KacangBali className="h-16 w-16 shrink-0" />
                <p className="text-[0.8rem] leading-snug text-honey/85">
                  Kacang Bali siap dikirim
                  <br />
                  ke luar kota lewat ekspedisi
                </p>
              </div>
              <div className="flex items-center gap-3">
                <SateLilit className="h-16 w-16 shrink-0" />
                <p className="text-[0.8rem] leading-snug text-honey/85">
                  Sate lilit dibakar
                  <br />
                  dengan batang serai
                </p>
              </div>
            </div>
          </div>

          <OrnamentBand className="mt-4 h-4 w-full text-gold/40" />
          <p className="mt-3 text-center text-[0.72rem] tracking-[0.14em] text-moss/60 uppercase">
            Ilustrasi menu · foto asli segera menyusul
          </p>
        </div>
      </Shell>

      <TumpalBorder className="relative h-4 w-full text-forest/85" />
    </section>
  );
}

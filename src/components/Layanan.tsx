import { layanan, waTanya } from "@/lib/site";
import { WhatsAppIcon } from "./Art";
import { CeplokField, Kamboja } from "./Bali";
import { SectionHead, Shell } from "./Section";

export default function Layanan() {
  return (
    <section id="catering" className="relative overflow-hidden">
      <CeplokField id="ceplok-layanan" className="text-forest/[0.055]" />
      <Kamboja className="pointer-events-none absolute top-12 right-4 h-20 w-20 text-gold/15 sm:h-28 sm:w-28" />

      <Shell className="relative py-14 sm:py-20">
        <SectionHead
          eyebrow="Pesanan besar"
          title="Menerima catering, nasi kotak, dan hajatan."
          lead="Selain pesanan harian, dapur MamCheck melayani pesanan porsi besar. Sampaikan tanggal, jumlah, dan lokasi — admin menyusun menu beserta perhitungannya."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {layanan.map((l, i) => (
            <article
              key={l.judul}
              style={{ transitionDelay: `${i * 60}ms` }}
              className="reveal flex flex-col rounded-2xl border border-gold/25 bg-sand/50 p-5"
            >
              <span className="w-fit rounded-full bg-forest/95 px-2.5 py-1 text-[0.58rem] font-semibold tracking-[0.1em] text-honey uppercase">
                {l.label}
              </span>
              <h3 className="mt-4 font-display text-[1.25rem] leading-snug text-forest">
                {l.judul}
              </h3>
              <p className="mt-1.5 flex-1 text-[0.88rem] leading-relaxed text-moss/85">
                {l.isi}
              </p>
              <a
                href={waTanya(l.cta, l.ctaDetail)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${l.ctaLabel}: ${l.judul}`}
                className="mt-5 inline-flex w-fit items-center gap-1.5 text-[0.85rem] font-semibold text-forest underline decoration-gold/60 decoration-2 underline-offset-4 transition-colors hover:text-gold"
              >
                {l.ctaLabel}
                <WhatsAppIcon className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-6 text-[0.85rem] text-moss/75">
          Untuk hajatan, sebaiknya menghubungi lebih awal agar jadwal dapur dan
          pengiriman dapat disiapkan —{" "}
          <a
            href={waTanya(
              "jadwal catering / nasi kotak / hajatan",
              "Tanggal acara: \nPerkiraan jumlah tamu: \nLokasi: ",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-forest underline decoration-gold/60 decoration-2 underline-offset-4 hover:text-gold"
          >
            chat admin
            <WhatsAppIcon className="h-3.5 w-3.5" />
          </a>
        </p>
      </Shell>
    </section>
  );
}

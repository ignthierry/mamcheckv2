import { momen, site, waLink } from "@/lib/site";
import { artMap, WhatsAppIcon } from "./Art";
import { SectionHead, Shell } from "./Section";

export default function Momen() {
  return (
    <section id="momen" className="relative">
      <Shell className="py-20 sm:py-28">
        <SectionHead
          eyebrow="Untuk acara"
          title="Dari makan malam keluarga sampai oleh-oleh lintas pulau."
          lead="Ceritakan rencanamu, admin bantu atur jumlah porsi dan jadwal masaknya."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {momen.map((m, i) => {
            const Art = artMap[m.art];
            return (
              <article
                key={m.judul}
                style={{ transitionDelay: `${i * 80}ms` }}
                className="reveal flex flex-col rounded-3xl border border-moss/20 bg-cream p-6 text-center shadow-warm"
              >
                <div className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-sand/70">
                  {Art ? <Art className="h-28 w-28" /> : null}
                </div>
                <h3 className="mt-5 font-display text-[1.25rem] text-forest">{m.judul}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-moss/85">{m.isi}</p>
              </article>
            );
          })}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href={waLink(
              `Halo ${site.brand}, mau tanya untuk kebutuhan acara:\n- Jenis acara: \n- Jumlah porsi: \n- Tanggal: \n- Lokasi: `,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-forest/25 px-7 py-3.5 text-[0.92rem] font-semibold text-forest transition-colors hover:border-gold hover:text-gold"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Konsultasi pesanan acara
          </a>
        </div>
      </Shell>
    </section>
  );
}

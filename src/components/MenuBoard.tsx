import { menu, site, waLink } from "@/lib/site";
import { artMap, TumpalBorder, WhatsAppIcon } from "./Art";
import { SectionHead, Shell } from "./Section";

export default function MenuBoard() {
  return (
    <section id="menu" className="relative bg-forest">
      <TumpalBorder className="absolute top-0 h-4 w-full rotate-180 text-forest" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grain opacity-100" />

      <Shell className="relative py-20 sm:py-28">
        <SectionHead
          tone="light"
          eyebrow="Papan menu"
          title={
            <>
              Semua dimasak dadakan.
              <br className="hidden sm:block" /> Pesan lewat admin, bukan checkout otomatis.
            </>
          }
          lead={`Tulis menu yang kamu mau beserta jumlah dan tanggalnya di WhatsApp — admin hitungkan total termasuk ongkos kirim ke alamatmu.`}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((m, i) => {
            const Art = artMap[m.art];
            return (
              <article
                key={m.id}
                style={{ transitionDelay: `${i * 70}ms` }}
                className="reveal group flex h-full flex-col rounded-3xl border border-goldsoft/35 bg-cream p-5 shadow-warm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl bg-sand/70">
                    {Art ? <Art className="h-auto w-full" /> : null}
                  </div>
                  {m.label ? (
                    <span className="absolute top-3 left-3 rounded-full bg-forest px-3 py-1 text-[0.62rem] font-semibold tracking-[0.12em] text-honey uppercase">
                      {m.label}
                    </span>
                  ) : null}
                  {m.hargaViaAdmin ? (
                    <span className="absolute top-3 right-3 rounded-full bg-gold px-3 py-1 text-[0.62rem] font-semibold tracking-[0.12em] text-ink uppercase">
                      Harga tanya admin
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-5 font-display text-[1.4rem] leading-snug text-forest">
                  {m.nama}
                </h3>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-moss/85">{m.deskripsi}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {m.opsi.map((o) => (
                    <span
                      key={o}
                      className="rounded-full border border-moss/25 bg-cream px-3 py-1 text-[0.72rem] font-medium text-moss"
                    >
                      {o}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5">
                  {m.catatan ? (
                    <p className="mb-3 text-[0.72rem] tracking-[0.06em] text-moss/60 uppercase">
                      {m.catatan}
                    </p>
                  ) : null}
                  <a
                    href={waLink(
                      `Halo ${site.brand}, saya mau pesan *${m.nama}*.\nJumlah & pilihan: \nTanggal: \nAlamat: `,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-forest/20 bg-forest px-5 py-3 text-[0.88rem] font-semibold text-cream transition-colors group-hover:bg-moss"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Tanya / pesan
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <p className="reveal mt-10 text-center text-[0.82rem] leading-relaxed text-honey/70">
          Belum ada daftar harga di halaman ini? Betul — di MamCheck, admin yang hitungkan harga
          sesuai pilihan ukuran dan jumlah pesananmu, supaya kamu dapat penawaran yang pas.
        </p>
      </Shell>
    </section>
  );
}

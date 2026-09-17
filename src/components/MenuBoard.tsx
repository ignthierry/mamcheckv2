import Image from "next/image";

import { menu, waPesan, waTanyaHarga } from "@/lib/site";
import { artMap, WhatsAppIcon } from "./Art";
import { SectionHead, Shell } from "./Section";

export default function MenuBoard() {
  return (
    <section id="menu" className="relative">
      <Shell className="py-14 sm:py-20">
        <SectionHead
          eyebrow="Menu"
          title="Enam sajian khas Bali, dimasak setelah pesanan masuk."
          lead="Sampaikan menu, jumlah, tanggal, dan alamat melalui WhatsApp — admin menghitung total termasuk ongkos kirim."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((m, i) => {
            const Art = artMap[m.art];
            return (
              <article
                key={m.id}
                style={{ transitionDelay: `${i * 60}ms` }}
                className="reveal lift group flex flex-col rounded-2xl bg-sand/50 p-4"
              >
                <div className="relative aspect-[2/1] overflow-hidden rounded-xl bg-cream">
                  {m.foto ? (
                    <Image
                      src={m.foto}
                      alt={m.fotoAlt ?? m.nama}
                      width={1600}
                      height={800}
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="h-full w-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                    />
                  ) : Art ? (
                    <div className="flex h-full w-full items-center justify-center">
                      <Art className="h-[92%] w-auto" />
                    </div>
                  ) : null}
                  {m.label ? (
                    <span className="pop-badge absolute top-2.5 left-2.5 rounded-full bg-forest/95 px-2.5 py-1 text-[0.58rem] font-semibold tracking-[0.1em] text-honey uppercase">
                      {m.label}
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-4 font-display text-[1.25rem] leading-snug text-forest">
                  {m.nama}
                </h3>
                <p className="mt-1.5 text-[0.88rem] leading-relaxed text-moss/85">
                  {m.deskripsi}
                </p>

                {/* pil opsi = tombol pesan: pilihannya ikut terbawa ke WhatsApp */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {m.opsi.map((o) => (
                    <a
                      key={o}
                      href={
                        m.hargaViaAdmin
                          ? waTanyaHarga(m.nama, o)
                          : waPesan(m.nama, o)
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.hargaViaAdmin ? "Tanya harga" : "Pesan"} ${m.nama} ${o}`}
                      className="cursor-pointer rounded-full border border-moss/25 bg-sand/60 px-2.5 py-1 text-[0.7rem] font-medium text-moss transition-colors hover:border-gold hover:bg-gold/25 hover:text-forest"
                    >
                      {o}
                    </a>
                  ))}
                </div>

                <a
                  href={
                    m.hargaViaAdmin ? waTanyaHarga(m.nama) : waPesan(m.nama)
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[0.85rem] font-semibold text-forest underline decoration-gold/60 decoration-2 underline-offset-4 transition-colors hover:text-gold"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {m.hargaViaAdmin ? "Tanya harga" : `Pesan ${m.nama}`}
                </a>
              </article>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}

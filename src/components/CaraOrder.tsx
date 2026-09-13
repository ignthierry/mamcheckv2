import { langkah, site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Art";
import { SectionHead, Shell } from "./Section";

export default function CaraOrder() {
  return (
    <section id="cara-pesan" className="relative">
      <Shell className="py-20 sm:py-28">
        <SectionHead
          eyebrow="Cara pesan"
          title="Empat langkah, semuanya lewat WhatsApp."
          lead="Tanpa akun, tanpa keranjang belanja. Cukup chat admin — biar bisa tanya-tanya dulu soal porsi, level pedas, atau jadwal kirim."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {langkah.map((l, i) => (
            <li
              key={l.no}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal relative rounded-3xl border border-gold/25 bg-cream p-6 shadow-warm"
            >
              <span className="font-display text-4xl text-goldsoft">{l.no}</span>
              <h3 className="mt-3 font-display text-[1.22rem] text-forest">{l.judul}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-moss/85">{l.isi}</p>
              {i < langkah.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 -right-3 hidden h-px w-6 border-t border-dashed border-gold/60 lg:block"
                />
              ) : null}
            </li>
          ))}
        </ol>

        <div className="reveal mt-12 flex flex-col items-center gap-4 rounded-3xl border border-gold/30 bg-forest px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-[1.35rem] text-cream">
              Sudah tahu mau pesan apa?
            </p>
            <p className="mt-1.5 text-[0.9rem] text-honey/80">
              Sebutkan menu, jumlah, tanggal, dan alamat — admin lanjut hitung.
            </p>
          </div>
          <a
            href={waLink(
              `Halo ${site.brand}, saya mau pesan:\n- Menu: \n- Jumlah: \n- Tanggal: \n- Alamat: `,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-gold px-6 py-3.5 text-[0.92rem] font-semibold text-ink transition-colors hover:bg-goldsoft"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Buka WhatsApp
          </a>
        </div>
      </Shell>
    </section>
  );
}

import { langkah, site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Art";
import { SectionHead, Shell } from "./Section";

export default function CaraOrder() {
  return (
    <section id="cara-pesan" className="relative bg-forest">
      <Shell className="py-14 sm:py-20">
        <SectionHead
          tone="light"
          eyebrow="Cara pesan"
          title="Tiga langkah, semuanya lewat WhatsApp."
          lead="Tanpa akun, tanpa keranjang belanja — tanya dulu soal porsi atau level pedas juga boleh."
        />

        <ol className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {langkah.map((l, i) => (
            <li key={l.no} style={{ transitionDelay: `${i * 60}ms` }} className="reveal">
              <span className="font-display text-[1.6rem] text-goldsoft">{l.no}</span>
              <h3 className="mt-2 font-display text-[1.15rem] text-cream">{l.judul}</h3>
              <p className="mt-1.5 text-[0.88rem] leading-relaxed text-honey/80">{l.isi}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-[0.85rem] leading-relaxed text-honey/70">
            Pesanan acara atau porsi besar: konfirmasi minimal H-1 supaya dapur bisa atur jadwal
            masak.
          </p>
          <a
            href={waLink(
              `Halo ${site.brand}, saya mau pesan:\n- Menu: \n- Jumlah: \n- Tanggal: \n- Alamat: `,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-gold px-6 py-3.5 text-[0.92rem] font-semibold text-ink transition-colors hover:bg-goldsoft"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Buka WhatsApp
          </a>
        </div>
      </Shell>
    </section>
  );
}

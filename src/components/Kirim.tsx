import { kirim, site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Art";
import { SectionHead, Shell } from "./Section";

export default function Kirim() {
  return (
    <section id="pengiriman" className="relative">
      <Shell className="py-14 sm:py-20">
        <SectionHead
          eyebrow="Pengiriman"
          title="Kirim dekat, ambil sendiri, atau kargo untuk frozen."
        />

        <dl className="mt-10 divide-y divide-gold/20 border-y border-gold/20">
          {kirim.map((k, i) => (
            <div
              key={k.judul}
              style={{ transitionDelay: `${i * 60}ms` }}
              className="reveal flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <dt className="w-full font-display text-[1.2rem] text-forest sm:w-64 sm:shrink-0">
                {k.judul}
              </dt>
              <dd className="text-[0.92rem] leading-relaxed text-moss/85">{k.isi}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 text-[0.85rem] text-moss/75">
          Ongkos kirim dihitung admin sesuai jarak atau tarif ekspedisi —{" "}
          <a
            href={waLink(`Halo ${site.brand}, mau tanya ongkir ke alamat saya.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-forest underline decoration-gold/60 decoration-2 underline-offset-4 hover:text-gold"
          >
            cek ongkir
            <WhatsAppIcon className="h-3.5 w-3.5" />
          </a>
        </p>
      </Shell>
    </section>
  );
}

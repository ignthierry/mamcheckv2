import { faq, site, waLink } from "@/lib/site";
import { ChevronIcon, WhatsAppIcon } from "./Art";
import { SectionHead, Shell } from "./Section";

export default function Faq() {
  return (
    <section id="tanya" className="relative bg-sand/40">
      <Shell className="py-14 sm:py-20">
        <SectionHead eyebrow="Tanya" title="Yang paling sering ditanya." />

        <div className="mt-8 max-w-3xl divide-y divide-gold/25 border-y border-gold/25">
          {faq.map((f, i) => (
            <details key={f.q} className="group py-4" style={{ transitionDelay: `${i * 40}ms` }}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5">
                <h3 className="font-display text-[1.05rem] leading-snug text-forest">{f.q}</h3>
                <ChevronIcon className="mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-moss/85">{f.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-6 text-[0.85rem] text-moss/75">
          Belum terjawab?{" "}
          <a
            href={waLink(`Halo ${site.brand}, saya mau tanya-tanya dulu ya.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-forest underline decoration-gold/60 decoration-2 underline-offset-4 hover:text-gold"
          >
            tanya admin
            <WhatsAppIcon className="h-3.5 w-3.5" />
          </a>
        </p>
      </Shell>
    </section>
  );
}

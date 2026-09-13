import { faq, site, waLink } from "@/lib/site";
import { ChevronIcon, WhatsAppIcon } from "./Art";
import { SectionHead, Shell } from "./Section";

export default function Faq() {
  return (
    <section id="tanya" className="relative bg-sand/60">
      <Shell className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHead
              eyebrow="Pertanyaan"
              title="Yang paling sering ditanya."
              lead="Kalau jawabannya belum ada di sini, langsung tanya admin — dijawab manusia, bukan bot."
            />
            <a
              href={waLink(`Halo ${site.brand}, saya mau tanya-tanya dulu ya.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal mt-8 inline-flex items-center gap-2.5 rounded-full bg-forest px-6 py-3.5 text-[0.9rem] font-semibold text-cream transition-colors hover:bg-moss"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Tanya admin
            </a>
          </div>

          <div className="reveal divide-y divide-gold/25 border-y border-gold/25">
            {faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5">
                  <h3 className="font-display text-[1.08rem] leading-snug text-forest">{f.q}</h3>
                  <ChevronIcon className="mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 max-w-2xl text-[0.9rem] leading-relaxed text-moss/85">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Shell>
    </section>
  );
}

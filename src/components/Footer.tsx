import { site, waLink } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon } from "./Art";
import { Logo } from "./Nav";
import { Shell } from "./Section";

export default function Footer() {
  const tahun = new Date().getFullYear();
  return (
    <footer className="relative bg-forest text-cream">
      <Shell className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-[0.88rem] leading-relaxed text-honey/80">
              Dapur rumahan masakan Bali. Semua menu dibuat setelah pesanan
              masuk.
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href={waLink(`Halo ${site.brand}, saya mau pesan.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[0.85rem] font-semibold text-ink transition-colors hover:bg-goldsoft"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat admin
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram MamCheck"
                className="grid h-10 w-10 place-items-center rounded-full border border-goldsoft/40 text-honey transition-colors hover:bg-moss"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <ul className="space-y-3 text-[0.88rem] text-honey/85 sm:max-w-xs">
            <li>
              <span className="block text-[0.7rem] tracking-[0.2em] text-goldsoft uppercase">
                WhatsApp
              </span>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-cream underline decoration-goldsoft/50 underline-offset-4"
              >
                {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <span className="block text-[0.7rem] tracking-[0.2em] text-goldsoft uppercase">
                Jam buka
              </span>
              {site.jam}
            </li>
            <li>
              <span className="block text-[0.7rem] tracking-[0.2em] text-goldsoft uppercase">
                Dapur
              </span>
              {site.alamat}
            </li>
          </ul>
        </div>

        <div className="mt-10 border-t border-goldsoft/20 pt-5 text-[0.78rem] text-honey/60">
          © {tahun} {site.brand} · {site.city} · {site.kirimRingkas}
        </div>
      </Shell>
    </footer>
  );
}

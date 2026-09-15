import { site, waLink } from "@/lib/site";
import { InstagramIcon, MeruSilhouette, OrnamentBand, WhatsAppIcon } from "./Art";
import { Logo } from "./Nav";
import { Shell } from "./Section";

export default function Footer() {
  const tahun = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-forest text-cream">
      <OrnamentBand className="h-4 w-full text-goldsoft/40" />
      <MeruSilhouette className="pointer-events-none absolute -bottom-2 left-1/2 h-32 w-[22rem] -translate-x-1/2 text-goldsoft/10" />

      <Shell className="relative py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-[0.9rem] leading-relaxed text-honey/80">
              Dapur rumahan masakan Bali. Semua menu dibuat setelah pesanan masuk, dengan bumbu
              yang disiapkan hari itu.
            </p>
            <div className="mt-6 flex gap-3">
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

          <div>
            <h2 className="text-[0.7rem] font-semibold tracking-[0.24em] text-goldsoft uppercase">
              Kontak
            </h2>
            <ul className="mt-4 space-y-3 text-[0.9rem] text-honey/85">
              <li>
                WhatsApp
                <br />
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-cream underline decoration-goldsoft/50 underline-offset-4"
                >
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>Jam operasional
                <br />
                <span className="text-cream">{site.jam}</span>
              </li>
              <li>Dapur
                <br />
                <span className="text-cream">{site.alamat}</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[0.7rem] font-semibold tracking-[0.24em] text-goldsoft uppercase">
              Halaman
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.9rem] text-honey/85">
              {[
                { href: "#menu", label: "Menu" },
                { href: "#cara-pesan", label: "Cara pesan" },
                { href: "#pengiriman", label: "Pengiriman" },
                { href: "#momen", label: "Pesanan acara" },
                { href: "#tanya", label: "Pertanyaan umum" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-goldsoft">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-goldsoft/20 pt-6 text-[0.78rem] text-honey/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {tahun} {site.brand}. Masakan Bali rumahan · {site.city}.
          </p>
          <p className="text-honey/50">
            Ilustrasi menu masih gambar sementara — foto asli produk menyusul.
          </p>
        </div>
      </Shell>
    </footer>
  );
}

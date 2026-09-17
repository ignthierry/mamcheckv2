import Image from "next/image";
import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Art";
import { PolengTrim } from "./Bali";

const nav = [
  { href: "#menu", label: "Menu" },
  { href: "#catering", label: "Catering" },
  { href: "#cara-pesan", label: "Cara pesan" },
  { href: "#pengiriman", label: "Pengiriman" },
  { href: "#lokasi", label: "Lokasi" },
  { href: "#tanya", label: "Tanya" },
];

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  return (
    <span className="flex items-center gap-2">
      <Image
        src={
          dark ? "/logo/mamcheck-avatar.png" : "/logo/mamcheck-avatar-light.png"
        }
        alt="Logo Olshop MamCheck"
        width={512}
        height={435}
        sizes="56px"
        quality={95}
        priority
        className="h-[46px] w-[54px] shrink-0 rounded-xl"
      />
      <span className="leading-none">
        <span
          className={`block font-display text-[1.2rem] font-semibold tracking-tight ${
            dark ? "text-forest" : "text-cream"
          }`}
        >
          Mam<span className="text-gold">Check</span>
        </span>
        <span
          className={`mt-0.5 block text-[0.58rem] tracking-[0.2em] uppercase ${
            dark ? "text-moss/70" : "text-honey/70"
          }`}
        >
          Masakan Bali
        </span>
      </span>
    </span>
  );
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-cream/92 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <a href="#atas" aria-label={`${site.brand} — ke atas`}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-moss transition-colors hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink(
            `Halo ${site.brand}, saya mau pesan masakan Bali. Mohon dibantu cek ketersediaan hari ini.\n\nMenu: \nJumlah: \nTanggal: `,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2.5 text-[0.82rem] font-semibold text-cream transition-colors hover:bg-moss sm:px-5"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Chat admin
        </a>
      </div>

      <PolengTrim id="poleng-nav" />
    </header>
  );
}

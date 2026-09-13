"use client";

import { useEffect, useState } from "react";
import { site, waLink } from "@/lib/site";
import { OrnamentBand, WhatsAppIcon } from "./Art";

const nav = [
  { href: "#menu", label: "Menu" },
  { href: "#cara-pesan", label: "Cara pesan" },
  { href: "#pengiriman", label: "Pengiriman" },
  { href: "#momen", label: "Untuk acara" },
  { href: "#tanya", label: "Tanya" },
];

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`grid h-10 w-10 place-items-center rounded-xl border ${
          tone === "dark" ? "border-gold/50 bg-forest text-honey" : "border-goldsoft/60 bg-cream text-forest"
        }`}
      >
        <span className="font-display text-[1.35rem] leading-none font-semibold">M</span>
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[1.28rem] font-semibold tracking-tight ${
            tone === "dark" ? "text-forest" : "text-cream"
          }`}
        >
          Mam<span className="text-gold">Check</span>
        </span>
        <span
          className={`mt-0.5 block text-[0.6rem] tracking-[0.24em] uppercase ${
            tone === "dark" ? "text-moss/70" : "text-honey/70"
          }`}
        >
          Masakan Bali
        </span>
      </span>
    </span>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-gold/25 bg-cream/92 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <OrnamentBand className="h-3 w-full text-gold/40" />
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#atas" aria-label="MamCheck — ke atas">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
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

        <div className="flex items-center gap-2">
          <a
            href={waLink(`Halo MamCheck, saya mau tanya soal menu.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-moss sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat admin
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Buka menu navigasi"
            className="grid h-10 w-10 place-items-center rounded-xl border border-gold/40 text-forest lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-transform ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute top-1.5 left-0 h-0.5 w-5 bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-transform ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-gold/25 bg-cream/97 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-gold/15 py-3 text-[0.95rem] font-medium text-forest last:border-0"
              >
                {n.label}
              </a>
            ))}
            <a
              href={waLink(`Halo ${site.brand}, saya mau tanya soal menu.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="my-4 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat admin via WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

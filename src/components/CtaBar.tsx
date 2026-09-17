"use client";

import { useEffect, useRef } from "react";

import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Art";

/**
 * Bar aksi khusus layar kecil — tombol pesan selalu terjangkau jempol.
 * Muncul meluncur dari bawah setelah hero terlewati, dan menghilang lagi
 * saat footer sudah terlihat supaya tidak menutupi tombol di dalam footer.
 */
export default function CtaBar() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bar.current;
    if (!el) return;
    const hero = document.querySelector("#atas");
    const footer = document.querySelector("footer");
    let raf = 0;

    const cek = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const lewat = hero
          ? hero.getBoundingClientRect().bottom < window.innerHeight * 0.6
          : window.scrollY > 320;
        const footerTerlihat = footer
          ? footer.getBoundingClientRect().top < window.innerHeight * 0.92
          : false;
        el.classList.toggle("is-shown", lewat && !footerTerlihat);
      });
    };

    cek();
    window.addEventListener("scroll", cek, { passive: true });
    window.addEventListener("resize", cek);
    return () => {
      window.removeEventListener("scroll", cek);
      window.removeEventListener("resize", cek);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={bar}
      className="ctabar fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-cream/95 px-4 py-3 backdrop-blur-md lg:hidden"
    >
      <a
        href={waLink(
          `Halo ${site.brand}, saya mau pesan masakan Bali.\n\nMenu: \nJumlah: \nTanggal: \nAlamat: `,
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-push flex w-full items-center justify-center gap-2 rounded-full bg-forest py-3.5 text-[0.92rem] font-semibold text-cream"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Chat admin — buka 08.00–21.00
      </a>
    </div>
  );
}

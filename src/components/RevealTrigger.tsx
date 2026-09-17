"use client";

import { useEffect } from "react";

/**
 * Pengendali gerak halaman:
 * 1. menyalakan animasi masuk untuk semua elemen `reveal*` (fade, geser, skala, blur);
 * 2. bilah kemajuan gulir tipis di paling atas;
 * 3. menu navigasi menandai bagian yang sedang dibaca (garis emas);
 * 4. bayangan halus pada header setelah halaman digulir.
 * Semua dihentikan bila pengguna memilih "reduce motion".
 */

const SELEKTOR_REVEAL = '[class*="reveal"]';

export default function RevealTrigger() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /* --- 1. animasi masuk --- */
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(SELEKTOR_REVEAL),
    );
    let io: IntersectionObserver | undefined;

    if (reduce) {
      nodes.forEach((n) => n.classList.add("is-in"));
    } else if (nodes.length) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).classList.add("is-in");
              io?.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
      );
      nodes.forEach((n) => io?.observe(n));
    }

    /* --- 2. bilah kemajuan gulir --- */
    const bar = document.querySelector<HTMLElement>(".scroll-progress");
    const header = document.querySelector<HTMLElement>("header");
    let raf = 0;

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const p = max > 0 ? Math.min(1, doc.scrollTop / max) : 0;
        bar?.style.setProperty("--p", p.toFixed(4));
        header?.classList.toggle("is-scrolled", doc.scrollTop > 12);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* --- 3. penanda bagian aktif di navigasi --- */
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("header nav a[href^='#']"),
    );
    const bagian = links
      .map((a) => document.querySelector<HTMLElement>(a.getAttribute("href")!))
      .filter((el): el is HTMLElement => Boolean(el));

    let ioNav: IntersectionObserver | undefined;
    if (bagian.length) {
      ioNav = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const id = `#${(e.target as HTMLElement).id}`;
            links.forEach((a) =>
              a.classList.toggle("is-active", a.getAttribute("href") === id),
            );
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
      );
      bagian.forEach((el) => ioNav?.observe(el));
    }

    /* --- 4. sorot emas mengikuti kursor (hanya perangkat berpenunjuk) --- */
    const halus = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const onMove = (e: PointerEvent) => {
      const kartu = (e.target as HTMLElement)?.closest?.(".lift");
      if (!kartu) return;
      const r = kartu.getBoundingClientRect();
      (kartu as HTMLElement).style.setProperty(
        "--mx",
        `${Math.round(e.clientX - r.left)}px`,
      );
      (kartu as HTMLElement).style.setProperty(
        "--my",
        `${Math.round(e.clientY - r.top)}px`,
      );
    };
    if (halus && !reduce) {
      document.addEventListener("pointermove", onMove, { passive: true });
    }

    return () => {
      io?.disconnect();
      ioNav?.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (halus) document.removeEventListener("pointermove", onMove);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}

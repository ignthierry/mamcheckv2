"use client";

import { useEffect, useRef, useState } from "react";

import { site, waLink } from "@/lib/site";
import { WovenCloth } from "@/shaders/woven-cloth/WovenCloth";
import "@/shaders/threeui.css";

import { Shell } from "./Section";

/* Full-bleed "noren" band: the ThreeUI <WovenCloth variant="washi" /> document
   (indigo kozo noren, deckle edge, three panels) run inside its own isolated
   iframe host exactly as the component ships it. The iframe is mounted only
   once the band approaches the viewport, so the simulation never costs
   anything while the page sits at the top. */
export default function NorenBand() {
  const holder = useRef<HTMLDivElement | null>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const node = holder.current;
    if (!node || live) return;
    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setLive(true));
      return () => cancelAnimationFrame(id);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) setLive(true);
      },
      { rootMargin: "320px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [live]);

  return (
    <section id="tirai" className="relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-forest/70 to-transparent"
      />
      <Shell className="relative py-20 sm:py-28">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-goldsoft uppercase">
            <span className="h-px w-8 bg-current opacity-60" />
            Tirai dapur
          </div>
          <h2 className="mt-4 font-display text-3xl leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-[2.6rem]">
            Kain yang tergantung di depan dapur — bergerak selama pesanan dikerjakan.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-honey/80">
            Dapur kami bekerja menurut pesanan yang masuk, jadi jumlah pesanan tiap hari kami batasi
            supaya rasa dan porsinya tetap sama. Kalau tirai ini masih bergerak, dapur masih masak.
          </p>
        </div>

        <div className="mt-12 rounded-[28px] border border-goldsoft/30 bg-[#0d0a07] p-2 shadow-warm">
          <div
            ref={holder}
            className="shader-frame relative aspect-[4/5] overflow-hidden rounded-[22px] sm:aspect-[3/2] lg:aspect-[1500/980]"
          >
            {live ? (
              <WovenCloth variant="washi" hue={0} saturation={1.0} brightness={1.0} />
            ) : (
              <div className="grain absolute inset-0 bg-[#0d0a07]" />
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <dl className="flex flex-wrap gap-x-10 gap-y-3 text-[0.85rem] text-honey/80">
            <div>
              <dt className="text-[0.7rem] tracking-[0.22em] text-goldsoft/80 uppercase">Jam dapur</dt>
              <dd className="mt-1 font-semibold text-cream">{site.jam}</dd>
            </div>
            <div>
              <dt className="text-[0.7rem] tracking-[0.22em] text-goldsoft/80 uppercase">
                Jangkauan
              </dt>
              <dd className="mt-1 font-semibold text-cream">{site.radius}</dd>
            </div>
          </dl>
          <a
            href={waLink(`Halo ${site.brand}, saya mau pesan untuk hari ini.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition hover:bg-goldsoft"
          >
            Chat dapur sekarang
          </a>
        </div>
      </Shell>
    </section>
  );
}

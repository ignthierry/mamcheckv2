"use client";

import { useEffect, useRef, useState } from "react";

import { WovenCloth } from "@/shaders/woven-cloth/WovenCloth";
import "@/shaders/threeui.css";

/* Hero backdrop: the ThreeUI <WovenCloth variant="washi" /> document (indigo kozo
   noren, deckle edge, three swaying panels) rendered edge to edge behind the hero
   copy. The iframe mounts as soon as the hero is in view — it is the first paint,
   so there is nothing to defer — and the panel keeps its own lifecycle from there. */
export default function HeroCloth({ className = "" }: { className?: string }) {
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
      { rootMargin: "0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [live]);

  return (
    <div
      ref={holder}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
    >
      {/* .shader-frame is plain CSS in globals.css, so it must not sit on this
          absolute wrapper (unlayered CSS beats Tailwind's `absolute`). */}
      <div className="shader-frame h-full w-full">
        {live ? (
          <WovenCloth variant="washi" hue={0} saturation={1.0} brightness={1.0} />
        ) : (
          <div className="grain absolute inset-0 bg-[#0d0a07]" />
        )}
      </div>
    </div>
  );
}

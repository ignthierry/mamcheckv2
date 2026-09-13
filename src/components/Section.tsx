import type { ReactNode } from "react";
import { OrnamentBand } from "./Art";

export function Shell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <div
        className={`flex items-center gap-3 text-xs font-semibold tracking-[0.28em] uppercase ${
          isLight ? "text-goldsoft" : "text-gold"
        } ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-current opacity-60" />
        {eyebrow}
      </div>
      <h2
        className={`mt-4 font-display text-3xl leading-[1.15] tracking-tight sm:text-4xl md:text-[2.6rem] ${
          isLight ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            isLight ? "text-honey/80" : "text-moss/85"
          }`}
        >
          {lead}
        </p>
      ) : null}
      <OrnamentBand
        className={`mt-6 h-4 ${align === "center" ? "mx-auto max-w-xs" : "max-w-[220px]"} ${
          isLight ? "text-goldsoft/50" : "text-gold/45"
        }`}
      />
    </div>
  );
}

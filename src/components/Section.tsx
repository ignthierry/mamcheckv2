import type { ReactNode } from "react";

export function Shell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-5xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  tone = "dark",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <div className="max-w-2xl">
      <p
        className={`text-[0.7rem] font-semibold tracking-[0.24em] uppercase ${
          isLight ? "text-goldsoft" : "text-gold"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-display text-[1.75rem] leading-[1.15] tracking-tight sm:text-4xl ${
          isLight ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-3 text-[0.95rem] leading-relaxed ${
            isLight ? "text-honey/80" : "text-moss/85"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

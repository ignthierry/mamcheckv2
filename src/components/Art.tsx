import type { SVGProps } from "react";

/*
 * Semua ilustrasi di bawah ini digambar sendiri (SVG vektor).
 * Alasan: belum ada foto & logo resmi, jadi ilustrasi dipakai sebagai
 * placeholder yang tetap rapi, ringan, dan konsisten — bukan stock photo.
 */

const C = {
  forest: "#0B3327",
  moss: "#12503B",
  leaf: "#1B6E51",
  jade: "#2E9C74",
  gold: "#BD882A",
  goldsoft: "#E0B45F",
  honey: "#F3D89A",
  cream: "#FCF7EC",
  sand: "#F1E5CE",
  clay: "#A9502A",
  sambal: "#BF3A1E",
};

type ArtProps = SVGProps<SVGSVGElement>;

function Plate({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <circle cx="100" cy="104" r="86" fill={C.sand} />
      <circle
        cx="100"
        cy="104"
        r="86"
        fill="none"
        stroke={C.goldsoft}
        strokeWidth="3"
      />
      <circle
        cx="100"
        cy="104"
        r="72"
        fill="none"
        stroke={C.goldsoft}
        strokeWidth="1.2"
        strokeDasharray="3 7"
      />
      {children}
    </>
  );
}

function Steam({
  x = 100,
  y = 46,
  delay = 0,
}: {
  x?: number;
  y?: number;
  delay?: number;
}) {
  return (
    <g
      className="steam-puff"
      style={{ animationDelay: `${delay}s`, transformOrigin: `${x}px ${y}px` }}
      stroke={C.goldsoft}
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
      opacity="0.7"
    >
      <path d={`M${x - 14} ${y + 16} c -6 -8 6 -12 0 -20`} />
      <path d={`M${x + 2} ${y + 20} c -6 -9 7 -13 1 -22`} />
      <path d={`M${x + 17} ${y + 15} c -5 -8 6 -12 0 -19`} />
    </g>
  );
}

export function AyamBetutu(props: ArtProps) {
  return (
    <svg viewBox="0 0 200 200" {...props} aria-hidden="true">
      <Plate />
      {/* daun pisang */}
      <path
        d="M34 118c22-34 74-46 120-22 12 6 14 14 4 18-40 16-104 14-124 4z"
        fill={C.leaf}
      />
      <path
        d="M40 116c26-26 78-36 118-18"
        fill="none"
        stroke={C.jade}
        strokeWidth="2.5"
      />
      <path d="M62 96c-10-16-4-30 10-36 4 14 8 24 6 36z" fill={C.moss} />
      <path d="M136 78c14-10 28-8 32 4-13 2-22 6-32 10z" fill={C.moss} />
      {/* ayam panggang */}
      <path
        d="M62 108c0-22 20-38 46-38s44 16 44 36c0 18-20 26-46 26s-44-6-44-24z"
        fill={C.goldsoft}
      />
      <path
        d="M76 84c14-10 40-12 58-2"
        fill="none"
        stroke={C.gold}
        strokeWidth="2.5"
      />
      <path
        d="M74 118c22 8 52 8 74-2"
        fill="none"
        stroke={C.gold}
        strokeWidth="2.5"
      />
      {/* paha + tulang */}
      <path d="M136 96c14-4 26 2 26 12s-12 14-22 10" fill={C.goldsoft} />
      <circle
        cx="170"
        cy="104"
        r="7"
        fill={C.cream}
        stroke={C.gold}
        strokeWidth="2"
      />
      <circle
        cx="184"
        cy="112"
        r="6"
        fill={C.cream}
        stroke={C.gold}
        strokeWidth="2"
      />
      {/* sambal */}
      <ellipse cx="58" cy="140" rx="22" ry="9" fill={C.sambal} />
      <ellipse cx="52" cy="138" rx="6" ry="2.6" fill="#E8694A" />
      <path
        d="M148 142c8-10 20-12 26-4"
        fill="none"
        stroke={C.jade}
        strokeWidth="3"
      />
    </svg>
  );
}

export function SateManis(props: ArtProps) {
  return (
    <svg viewBox="0 0 200 200" {...props} aria-hidden="true">
      <Plate />
      {[
        { x: 0, y: 0 },
        { x: 22, y: 14 },
        { x: -22, y: 16 },
      ].map((o, i) => (
        <g key={i} transform={`translate(${o.x} ${o.y})`}>
          <line
            x1="30"
            y1="152"
            x2="150"
            y2="48"
            stroke="#8A6A3A"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {[0, 1, 2, 3].map((k) => {
            const t = 44 + k * 28 + i * 2;
            const x = t;
            const y = 146 - (t - 30) * 0.86;
            return (
              <g key={k}>
                <rect
                  x={x - 15}
                  y={y - 18}
                  width="30"
                  height="26"
                  rx="7"
                  fill={k % 2 ? C.goldsoft : "#D79A45"}
                  transform={`rotate(-41 ${x} ${y})`}
                />
                <path
                  d={`M${x - 12} ${y - 6} h24`}
                  stroke={C.clay}
                  strokeWidth="2.5"
                  transform={`rotate(-41 ${x} ${y})`}
                  opacity="0.55"
                />
              </g>
            );
          })}
        </g>
      ))}
      <path
        d="M46 150c30 10 74 8 100-6"
        fill="none"
        stroke={C.gold}
        strokeWidth="2.5"
      />
      <ellipse cx="152" cy="132" rx="16" ry="7" fill={C.sambal} />
      <path
        d="M38 132c8-8 18-9 24-2"
        fill="none"
        stroke={C.jade}
        strokeWidth="3"
      />
    </svg>
  );
}

export function SateLilit(props: ArtProps) {
  // tiga batang serai, daging dililitkan seperti lilitan tali
  const baris = [
    { y: 92, x: -6 },
    { y: 120, x: 6 },
    { y: 148, x: -4 },
  ];
  return (
    <svg viewBox="0 0 200 200" {...props} aria-hidden="true">
      <Plate />
      {baris.map((b, i) => (
        <g key={i} transform={`translate(${b.x} 0)`}>
          {/* batang serai */}
          <rect
            x="34"
            y={b.y - 6}
            width="132"
            height="12"
            rx="6"
            fill={C.cream}
            stroke={C.goldsoft}
            strokeWidth="2"
          />
          {/* ujung daun serai */}
          <path d={`M34 ${b.y}c-12-6-18-2-20 6 8 2 14 2 20-1z`} fill={C.leaf} />
          <path
            d={`M34 ${b.y + 1}c-9-3-14-1-16 4`}
            stroke={C.jade}
            strokeWidth="1.6"
            fill="none"
          />
          {/* lilitan daging */}
          <ellipse
            cx="104"
            cy={b.y}
            rx="44"
            ry="14"
            fill="#C98A55"
            stroke={C.clay}
            strokeWidth="2"
          />
          {[74, 90, 106, 122].map((x) => (
            <path
              key={x}
              d={`M${x} ${b.y - 13} c -6 12 6 14 0 26`}
              stroke={C.clay}
              strokeWidth="2"
              fill="none"
              opacity="0.75"
            />
          ))}
        </g>
      ))}
      <ellipse cx="152" cy="70" rx="16" ry="7" fill={C.sambal} />
      <path
        d="M44 170c12-9 26-9 34 0"
        fill="none"
        stroke={C.jade}
        strokeWidth="3"
      />
    </svg>
  );
}

export function TimAyam(props: ArtProps) {
  return (
    <svg viewBox="0 0 200 200" {...props} aria-hidden="true">
      <Plate />
      <Steam x={88} y={38} />
      <Steam x={116} y={32} delay={1.4} />
      <path d="M40 108h120c0 34-27 56-60 56s-60-22-60-56z" fill={C.leaf} />
      <ellipse cx="100" cy="108" rx="60" ry="14" fill={C.moss} />
      <ellipse cx="100" cy="107" rx="52" ry="11" fill={C.honey} />
      <path
        d="M74 106c0-14 12-22 26-22s26 8 26 22c0 8-12 12-26 12s-26-4-26-12z"
        fill={C.goldsoft}
      />
      <path
        d="M78 100c12-6 32-6 44 0"
        fill="none"
        stroke={C.gold}
        strokeWidth="2.5"
      />
      <circle
        cx="66"
        cy="104"
        r="7"
        fill={C.sand}
        stroke={C.gold}
        strokeWidth="2"
      />
      <path
        d="M136 106c8-6 16-6 22-1"
        fill="none"
        stroke={C.jade}
        strokeWidth="3"
      />
      <path
        d="M92 130h18"
        stroke={C.jade}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SoupIga(props: ArtProps) {
  return (
    <svg viewBox="0 0 200 200" {...props} aria-hidden="true">
      <Plate />
      <Steam x={92} y={34} />
      <Steam x={114} y={40} delay={1.8} />
      <path d="M40 108h120c0 34-27 56-60 56s-60-22-60-56z" fill={C.clay} />
      <ellipse cx="100" cy="108" rx="60" ry="14" fill="#8E411F" />
      <ellipse cx="100" cy="107" rx="52" ry="11" fill={C.honey} />
      {/* iga */}
      <path
        d="M68 106c0-16 14-26 32-26s32 10 32 26c0 8-14 12-32 12s-32-4-32-12z"
        fill="#E7C98F"
        stroke={C.gold}
        strokeWidth="2.5"
      />
      <ellipse
        cx="100"
        cy="98"
        rx="11"
        ry="8"
        fill={C.cream}
        stroke={C.gold}
        strokeWidth="2"
      />
      <circle cx="100" cy="98" r="4" fill={C.sambal} />
      <ellipse cx="66" cy="102" rx="8" ry="5" fill={C.leaf} />
      <ellipse cx="136" cy="104" rx="8" ry="5" fill={C.leaf} />
      <path
        d="M84 128c10 4 22 4 32 0"
        stroke={C.honey}
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}

export function KacangBali(props: ArtProps) {
  return (
    <svg viewBox="0 0 200 200" {...props} aria-hidden="true">
      <Plate />
      {/* kemasan kraft */}
      <path
        d="M58 70h84v72a14 14 0 0 1-14 14H72a14 14 0 0 1-14-14z"
        fill={C.goldsoft}
      />
      <path d="M58 70l14-18h56l14 18z" fill={C.gold} />
      <path
        d="M72 52h56"
        stroke={C.cream}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="72" y="88" width="56" height="34" rx="6" fill={C.cream} />
      <path
        d="M80 98h40M80 108h26"
        stroke={C.gold}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* kacang tumpah */}
      {[
        { x: 74, y: 168, r: -14 },
        { x: 100, y: 174, r: 8 },
        { x: 126, y: 168, r: -6 },
        { x: 90, y: 160, r: 20 },
        { x: 114, y: 162, r: -22 },
      ].map((k, i) => (
        <g key={i} transform={`translate(${k.x} ${k.y}) rotate(${k.r})`}>
          <ellipse
            rx="13"
            ry="9"
            fill="#CDA468"
            stroke={C.clay}
            strokeWidth="1.8"
          />
          <path
            d="M-6 -3c4-2 8-2 12 0M-6 3c4-2 8-2 12 0"
            stroke={C.clay}
            strokeWidth="1.4"
            fill="none"
          />
        </g>
      ))}
    </svg>
  );
}

export const artMap: Record<string, (p: ArtProps) => React.JSX.Element> = {
  betutu: AyamBetutu,
  sate: SateManis,
  lilit: SateLilit,
  tim: TimAyam,
  soup: SoupIga,
  kacang: KacangBali,
};

/* ---------- ornamen etnik Bali ---------- */

/** Motif patra tunggal (daun melengkung) untuk aksen. */
export function Patra(props: ArtProps) {
  return (
    <svg viewBox="0 0 48 48" {...props} aria-hidden="true">
      <path
        d="M24 4c10 6 16 14 16 22s-6 14-16 18c-10-4-16-10-16-18S14 10 24 4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M24 10v30M24 20c5-3 9-3 12 0M24 20c-5-3-9-3-12 0M24 30c4-2 7-2 10 1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

/** Pita ornamen berulang (pengganti garis pemisah biasa). */
export function OrnamentBand({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 24"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="patra-band"
          width="40"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M20 3c6 4 9 8 9 12s-3 8-9 10c-6-2-9-6-9-10s3-8 9-12z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path d="M20 7v16" stroke="currentColor" strokeWidth="1" />
          <circle cx="20" cy="15" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="240" height="24" fill="url(#patra-band)" />
    </svg>
  );
}

/** Baris segitiga tumpal — border khas kain Bali. */
export function TumpalBorder({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 16"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="tumpal"
          width="24"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <path d="M0 16L12 0l12 16z" fill="currentColor" opacity="0.9" />
          <path d="M12 6l5 8h-10z" fill="#FCF7EC" opacity="0.55" />
        </pattern>
      </defs>
      <rect width="240" height="16" fill="url(#tumpal)" />
    </svg>
  );
}

/** Siluet meru (pura) untuk footer. */
export function MeruSilhouette(props: ArtProps) {
  return (
    <svg viewBox="0 0 320 120" {...props} aria-hidden="true">
      <g fill="currentColor">
        <rect x="152" y="96" width="16" height="24" />
        <path d="M132 96l28-14 28 14z" />
        <path d="M138 80l22-12 22 12z" />
        <path d="M144 64l16-10 16 10z" />
        <path d="M150 48l10-8 10 8z" />
        <path d="M158 0l2 30 2-30z" />
        <rect x="34" y="104" width="12" height="16" />
        <path d="M20 104l20-12 20 12z" />
        <path d="M26 90l14-9 14 9z" />
        <rect x="274" y="104" width="12" height="16" />
        <path d="M260 104l20-12 20 12z" />
        <path d="M266 90l14-9 14 9z" />
      </g>
      <path d="M0 118h320" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

/* ---------- ikon UI ---------- */

export function WhatsAppIcon(props: ArtProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M12.04 2.02c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.28 4.86L2 22.02l5.32-1.34a9.92 9.92 0 0 0 4.72 1.2c5.5 0 9.96-4.46 9.96-9.96S17.54 2.02 12.04 2.02zm0 18.1a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.16.8.82-3.08-.2-.32a8.12 8.12 0 0 1-1.24-4.32 8.14 8.14 0 1 1 8.24 8.24zm4.5-6.1c-.24-.12-1.46-.72-1.68-.8-.22-.08-.38-.12-.54.12-.16.24-.62.8-.76.96-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.38.1-.5.12-.12.26-.3.38-.46.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.74-1.8-.2-.46-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.7 4.12 3.68 2.02.82 2.42.66 2.86.62.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
    </svg>
  );
}

export function InstagramIcon(props: ArtProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props} aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 5.68a4.16 4.16 0 1 0 0 8.32 4.16 4.16 0 0 0 0-8.32zm0 6.86a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4zm5.3-7.02a.97.97 0 1 1-1.94 0 .97.97 0 0 1 1.94 0z" />
    </svg>
  );
}

export function ChevronIcon(props: ArtProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      {...props}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

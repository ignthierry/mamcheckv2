/**
 * Ornamen Bali — dipakai tipis saja: aksen, bukan hiasan penuh.
 * Semua digambar sebagai SVG (tanpa file gambar) supaya tajam dan ringan.
 * Palet mengikuti globals.css: forest #0b3327, gold #bd882a, goldsoft #e0b45f,
 * honey #f3d89a, cream #fcf7ec.
 */

/** Kain poleng (kotak-kotak khas Bali) sebagai pita pemisah antar bagian. */
export function PolengTrim({
  className = "",
  id = "poleng",
}: {
  className?: string;
  id?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`h-2.5 w-full overflow-hidden ${className}`}
    >
      <svg
        className="h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 40 10"
      >
        <defs>
          <pattern id={id} width="10" height="10" patternUnits="userSpaceOnUse">
            <rect width="10" height="10" fill="#0b3327" />
            <rect width="5" height="5" fill="#fcf7ec" />
            <rect x="5" y="5" width="5" height="5" fill="#fcf7ec" />
            <rect
              width="10"
              height="0.9"
              y="4.55"
              fill="#bd882a"
              opacity="0.75"
            />
          </pattern>
        </defs>
        <rect width="40" height="10" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

/**
 * Ukiran pemisah — motif patra Bali yang disederhanakan: dua pilin cermin
 * (satu path, kiri = cermin dari kanan jadi pasti simetris) dan belah ketupat
 * bersarang di tengah. `small` dipakai sebagai tanda kecil di atas label bagian.
 */
const PILIN =
  "M120 14c0-7 6.2-11.2 13.4-11.2 6 0 10.8 3.3 10.8 7.9 0 4-3.1 6.8-7 6.8-3.1 0-5.2-2-5.2-4.5 0-2 1.5-3.5 3.4-3.5";

export function UkirDivider({
  className = "",
  small = false,
}: {
  className?: string;
  small?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 28"
      className={`block ${small ? "h-[14px] w-[120px]" : "h-[20px] w-[220px] sm:h-[24px] sm:w-[260px]"} ${className}`}
      fill="none"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      >
        {!small && (
          <>
            <path d="M0 14h58" strokeWidth="1" opacity="0.28" />
            <path d="M182 14h58" strokeWidth="1" opacity="0.28" />
          </>
        )}
        <path d={PILIN} />
        <path d={PILIN} transform="translate(240 0) scale(-1 1)" />
        <circle
          cx="74"
          cy="14"
          r="1.6"
          fill="currentColor"
          stroke="none"
          opacity="0.5"
        />
        <circle
          cx="166"
          cy="14"
          r="1.6"
          fill="currentColor"
          stroke="none"
          opacity="0.5"
        />
      </g>
      <path d="M120 3.6l6.4 10.4-6.4 10.4-6.4-10.4z" fill="currentColor" />
      <path
        d="M120 9.2l2.9 4.8-2.9 4.8-2.9-4.8z"
        fill="#fcf7ec"
        opacity="0.92"
      />
    </svg>
  );
}

/** Kamboja (kembang jepun) — bunga yang selalu ada di upacara & dapur Bali. */
export function Kamboja({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      className={`block ${className}`}
      fill="none"
    >
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="20"
          cy="10.6"
          rx="4.3"
          ry="8.6"
          transform={`rotate(${deg} 20 20)`}
          fill="currentColor"
          opacity="0.9"
        />
      ))}
      <circle cx="20" cy="20" r="3.2" fill="#bd882a" />
    </svg>
  );
}

/** Motif ceplok/ukiran geometris sebagai tekstur latar sangat tipis. */
export function CeplokField({
  className = "",
  id = "ceplok",
}: {
  className?: string;
  id?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{
        maskImage:
          "radial-gradient(58% 58% at 70% 25%, #000 0%, transparent 78%)",
        WebkitMaskImage:
          "radial-gradient(58% 58% at 70% 25%, #000 0%, transparent 78%)",
      }}
    >
      <defs>
        <pattern id={id} width="56" height="56" patternUnits="userSpaceOnUse">
          <path
            d="M28 3.5l24.5 24.5L28 52.5 3.5 28z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
          />
          <path
            d="M28 17.5L38.5 28 28 38.5 17.5 28z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
          />
          <circle cx="28" cy="28" r="2.4" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

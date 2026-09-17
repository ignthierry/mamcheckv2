import { site, waTanya } from "@/lib/site";
import { Kamboja } from "./Bali";
import { WhatsAppIcon } from "./Art";
import { SectionHead, Shell } from "./Section";

/** Pin kecil di dalam kartu alamat. */
function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ArrowOutIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M17 7H9.5M17 7v7.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Lokasi() {
  const waRute = waTanya(
    "rute ke dapur Watukosek, Gempol",
    "Titik awal saya: (boleh kirim lokasi) \nRencana ambil/antar: ",
  );

  return (
    <section id="lokasi" className="relative">
      <Shell className="py-14 sm:py-20">
        <SectionHead
          eyebrow="Lokasi"
          title="Dapur kami di Watukosek, Gempol."
          lead="Silakan mampir untuk ambil sendiri, atau minta admin menghitung ongkos kirim dari titik ini ke alamat Anda."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.45fr_1fr]">
          {/* Peta */}
          <div className="reveal relative overflow-hidden rounded-2xl border border-gold/30 bg-sand/50 shadow-warm">
            <iframe
              src={site.mapsEmbed}
              title={`Peta lokasi ${site.brand} — ${site.alamat}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[300px] w-full sm:h-[380px] lg:h-[440px] [filter:saturate(0.92)_contrast(1.02)]"
            />
            {/* penanda kecil di atas peta, tidak menghalangi interaksi */}
            <span className="pointer-events-none absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-forest/95 px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.08em] text-honey uppercase shadow-warm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-goldsoft opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-goldsoft" />
              </span>
              Dapur {site.brand}
            </span>
          </div>

          {/* Alamat & aksi */}
          <div className="reveal relative flex flex-col overflow-hidden rounded-2xl bg-forest p-6 text-cream sm:p-7">
            <Kamboja className="pointer-events-none absolute -top-4 -right-5 h-28 w-28 text-goldsoft/10" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.24em] text-goldsoft uppercase">
                <PinIcon className="h-4 w-4" />
                Alamat dapur
              </span>
              <p className="mt-3 font-display text-[1.15rem] leading-snug text-cream">
                {site.alamat}
              </p>
              <dl className="mt-5 space-y-3 border-t border-goldsoft/20 pt-5 text-[0.88rem] text-honey/85">
                <div>
                  <dt className="text-[0.68rem] tracking-[0.2em] text-goldsoft uppercase">
                    Jam buka
                  </dt>
                  <dd className="mt-0.5">{site.jam}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] tracking-[0.2em] text-goldsoft uppercase">
                    Patokan
                  </dt>
                  <dd className="mt-0.5">
                    Sebelah utara Lapangan Tembak Watukosek. Silakan hubungi
                    admin sebelum datang agar pesanan sudah siap.
                  </dd>
                </div>
              </dl>
            </div>

            <div className="relative mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <a
                href={waRute}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-5 py-3 text-[0.9rem] font-semibold text-ink transition-colors hover:bg-goldsoft"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Minta rute via WhatsApp
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-goldsoft/50 px-5 py-3 text-[0.9rem] font-semibold text-honey transition-colors hover:border-goldsoft hover:bg-moss/60 hover:text-cream"
              >
                Buka di Google Maps
                <ArrowOutIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
}

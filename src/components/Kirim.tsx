import { site, waLink } from "@/lib/site";
import { KacangBali, SoupIga, WhatsAppIcon } from "./Art";
import { SectionHead, Shell } from "./Section";

function ScooterIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="35" r="6" />
      <circle cx="37" cy="35" r="6" />
      <path d="M11 35h10l6-16h6M27 19h7l3 16M20 24h9" />
    </svg>
  );
}

function BoxIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 16l18-8 18 8v16l-18 8-18-8z" />
      <path d="M6 16l18 8 18-8M24 24v16" />
    </svg>
  );
}

export default function Kirim() {
  return (
    <section id="pengiriman" className="relative bg-sand/60">
      <Shell className="py-20 sm:py-28">
        <SectionHead
          eyebrow="Pengiriman"
          title="Dua jalur: area lokal untuk masakan matang, ekspedisi untuk Kacang Bali."
          lead="Masakan berkuah dan siap santap paling enak dimakan segar, jadi kami batasi pengirimannya. Kacang Bali sebaliknya — tahan lama dan aman dikirim jauh."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="reveal flex flex-col rounded-3xl border border-gold/30 bg-cream p-7 shadow-warm">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-forest text-honey">
                <ScooterIcon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-[1.35rem] text-forest">Siap santap · area lokal</h3>
                <p className="text-[0.85rem] text-moss/75">
                  Ayam betutu · sate · tim ayam · soup iga
                </p>
              </div>
            </div>
            <p className="mt-5 text-[0.92rem] leading-relaxed text-moss/90">
              Dikirim kurir instan/sameday, atau kamu bisa ambil sendiri di dapur. Cakupan saat ini{" "}
              {site.radius}.
            </p>
            <div className="mt-5 flex items-start gap-4 rounded-2xl bg-sand/70 p-4">
              <SoupIga className="h-16 w-16 shrink-0" />
              <p className="text-[0.85rem] leading-relaxed text-moss/85">
                Biar kuah dan teksturnya tetap bagus, pengiriman disarankan untuk alamat yang
                jaraknya bisa ditempuh cepat. Untuk alamat yang lebih jauh, admin akan bilang
                terus terang apakah masih aman dikirim.
              </p>
            </div>
          </article>

          <article className="reveal flex flex-col rounded-3xl border border-goldsoft/40 bg-forest p-7 shadow-warm">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-ink">
                <BoxIcon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-[1.35rem] text-cream">
                  Ekspedisi · antar kota
                </h3>
                <p className="text-[0.85rem] text-honey/75">Khusus Kacang Bali</p>
              </div>
            </div>
            <p className="mt-5 text-[0.92rem] leading-relaxed text-honey/85">
              Dikemas rapat, dilapisi, lalu dikirim lewat ekspedisi reguler ke luar kota — pas untuk
              oleh-oleh atau stok camilan di rumah.
            </p>
            <div className="mt-5 flex items-start gap-4 rounded-2xl bg-moss/40 p-4">
              <KacangBali className="h-16 w-16 shrink-0" />
              <p className="text-[0.85rem] leading-relaxed text-honey/85">
                Tersedia ukuran 200 gram, 500 gram, dan 1 kg. Bisa juga kirim langsung ke penerima
                (nama & alamat penerima ditulis saat chat).
              </p>
            </div>
          </article>
        </div>

        <p className="reveal mt-8 text-center text-[0.85rem] text-moss/75">
          Ongkos kirim dihitung terpisah sesuai jarak atau tarif ekspedisi —{" "}
          <a
            href={waLink(`Halo ${site.brand}, mau tanya ongkir ke alamat saya.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-gold underline decoration-goldsoft decoration-2 underline-offset-4"
          >
            cek ongkir via WhatsApp
            <WhatsAppIcon className="h-3.5 w-3.5" />
          </a>
        </p>
      </Shell>
    </section>
  );
}

import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Art";

/** Bar aksi khusus layar kecil — supaya tombol pesan selalu terjangkau jempol. */
export default function CtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-cream/95 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[0.78rem] font-semibold text-forest">
            Pesanan dimasak setelah kamu pesan
          </p>
          <p className="truncate text-[0.7rem] text-moss/70">{site.jam}</p>
        </div>
        <a
          href={waLink(`Halo ${site.brand}, saya mau pesan.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-forest px-5 py-3 text-[0.85rem] font-semibold text-cream"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Pesan sekarang
        </a>
      </div>
    </div>
  );
}

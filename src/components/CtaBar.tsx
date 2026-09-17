import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Art";

/** Bar aksi khusus layar kecil — tombol pesan selalu terjangkau jempol. */
export default function CtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-cream/95 px-4 py-3 backdrop-blur-md lg:hidden">
      <a
        href={waLink(
          `Halo ${site.brand}, saya mau pesan masakan Bali.\n\nMenu: \nJumlah: \nTanggal: \nAlamat: `,
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-forest py-3.5 text-[0.92rem] font-semibold text-cream"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Chat admin — buka 08.00–21.00
      </a>
    </div>
  );
}

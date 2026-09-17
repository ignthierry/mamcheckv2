import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.brand} — Masakan Bali Rumahan, Made by Order`,
  description:
    "Ayam betutu, sate manis, sate lilit, tum ayam, soup iga, dan Kacang Bali. Semua dimasak setelah pesanan masuk. Pesan langsung via WhatsApp.",
  keywords: [
    "masakan Bali",
    "ayam betutu",
    "sate lilit",
    "kacang Bali",
    "soup iga",
    "catering rumahan",
    site.city,
  ],
  openGraph: {
    title: `${site.brand} — Masakan Bali Rumahan, Made by Order`,
    description:
      "Dapur rumahan masakan Bali. Made by order, bumbu segar, siap santap untuk area lokal, Kacang Bali bisa kirim antar kota.",
    type: "website",
    locale: "id_ID",
    siteName: site.brand,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.brand,
  description:
    "Dapur rumahan masakan Bali. Made by order: ayam betutu, sate manis ayam, sate lilit, tum ayam, soup iga, dan Kacang Bali.",
  servesCuisine: ["Balinese", "Indonesian"],
  address: { "@type": "PostalAddress", streetAddress: site.alamat, addressCountry: "ID" },
  areaServed: ["Pasuruan", "Sidoarjo"],
  openingHours: site.jam,
  telephone: `+${site.whatsapp}`,
  hasMenu: "#menu",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <a
          href="#menu"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-sm focus:text-cream"
        >
          Lewati ke menu
        </a>
        <Nav />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

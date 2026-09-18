import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

const gambarMenu = [
  "/menu/ayam-betutu.webp",
  "/menu/sate-manis-ayam.webp",
  "/menu/sate-lilit.webp",
  "/menu/tum-ayam.webp",
  "/menu/soup-iga.webp",
];

/** Daftar halaman untuk Google (sitemap.xml). */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      // ikut mendaftarkan foto menu agar muncul di Google Images
      images: [
        `${site.url}/logo/mamcheck-lockup.png`,
        ...gambarMenu.map((g) => `${site.url}${g}`),
      ],
    },
  ];
}
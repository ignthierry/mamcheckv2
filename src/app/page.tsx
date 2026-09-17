import CaraOrder from "@/components/CaraOrder";
import CtaBar from "@/components/CtaBar";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Kirim from "@/components/Kirim";
import Layanan from "@/components/Layanan";
import Lokasi from "@/components/Lokasi";
import MenuBoard from "@/components/MenuBoard";
import RevealTrigger from "@/components/RevealTrigger";

export default function Home() {
  return (
    <>
      <main className="pb-20 lg:pb-0">
        <Hero />
        <MenuBoard />
        <Layanan />
        <CaraOrder />
        <Kirim />
        <Lokasi />
        <Faq />
      </main>
      <Footer />
      <CtaBar />
      <RevealTrigger />
    </>
  );
}

import CaraOrder from "@/components/CaraOrder";
import CtaBar from "@/components/CtaBar";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Kirim from "@/components/Kirim";
import MenuBoard from "@/components/MenuBoard";
import Momen from "@/components/Momen";
import NorenBand from "@/components/NorenBand";
import RevealTrigger from "@/components/RevealTrigger";

export default function Home() {
  return (
    <>
      <main className="pb-20 lg:pb-0">
        <Hero />
        <MenuBoard />
        <CaraOrder />
        <Kirim />
        <Momen />
        <NorenBand />
        <Faq />
      </main>
      <Footer />
      <CtaBar />
      <RevealTrigger />
    </>
  );
}

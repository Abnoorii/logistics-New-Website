import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { TradeNetwork } from "@/components/sections/trade-network";
import { Services } from "@/components/sections/services";
import { Reliability } from "@/components/sections/reliability";
import { Why } from "@/components/sections/why";
import { Testimonials } from "@/components/sections/testimonials";
import { Partners } from "@/components/sections/partners";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <TradeNetwork />
      <Services />
      <Reliability />
      <Why />
      <Testimonials />
      <Partners />
      <FAQ />
      <CTA />
    </>
  );
}

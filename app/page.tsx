import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import {
  BeanSection,
  RoastingSection,
  GrindingSection,
  BrewingSection,
  CupSection,
  CafeSection,
} from "@/components/StorySections";
import { FeaturedMenu } from "@/components/FeaturedMenu";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Act One — the cinematic story */}
        <Hero />
        <BeanSection />
        <RoastingSection />
        <GrindingSection />
        <BrewingSection />
        <CupSection />
        <CafeSection />

        {/* Act Two — the business site */}
        <FeaturedMenu />
        <Gallery />
        <About />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
    </>
  );
}

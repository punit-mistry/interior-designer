import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Transformation from "@/components/Transformation";
import Marquee from "@/components/Marquee";
import Blueprint from "@/components/Blueprint";
import Sunlight from "@/components/Sunlight";
import Materials from "@/components/Materials";
import BeforeAfter from "@/components/BeforeAfter";
import FloorPlan from "@/components/FloorPlan";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <Cursor />
      <main>
        <Hero />
        <Transformation />
        <Marquee />
        <Blueprint />
        <Sunlight />
        <Materials />
        <BeforeAfter />
        <FloorPlan />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
      </main>
    </SmoothScroll>
  );
}

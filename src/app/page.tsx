import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import FreeResources from "@/components/sections/FreeResources";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIDo />
        <Services />
        <Portfolio />
        <FreeResources />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

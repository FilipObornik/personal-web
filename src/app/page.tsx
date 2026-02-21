import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import InstagramFeed from "@/components/sections/InstagramFeed";
import FreeResources from "@/components/sections/FreeResources";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import WorkshopBanner from "@/components/sections/WorkshopBanner";
import { getLatestEpisodeId, getSpotifyEmbedUrl } from "@/lib/spotify";

export default async function Home() {
  const latestEpisodeId = await getLatestEpisodeId();
  const spotifyEmbedUrl = getSpotifyEmbedUrl(latestEpisodeId);

  return (
    <>
      <Header />
      <WorkshopBanner />
      <main>
        <Hero />
        <WhatIDo />
        <Services />
        <Portfolio />
        <InstagramFeed />
        <FreeResources spotifyEmbedUrl={spotifyEmbedUrl} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

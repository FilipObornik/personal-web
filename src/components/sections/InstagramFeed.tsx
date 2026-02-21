import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import InstagramCarousel from "@/components/ui/InstagramCarousel";
import WaveSeparator from "@/components/ui/WaveSeparator";
import { getInstagramPosts } from "@/lib/instagram";

export default async function InstagramFeed() {
  const posts = await getInstagramPosts(9);

  // Don't render section if no posts available
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4"
          >
            <Instagram size={16} />
            Z Instagramu
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Akce & Události<span className="text-primary">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg"
          >
            Workshopy, přednášky a eventy, kde jsem měl možnost sdílet znalosti o AI
          </motion.p>
        </div>

        {/* Carousel */}
        <div className="max-w-7xl mx-auto">
          <InstagramCarousel posts={posts} />
        </div>
      </div>

      <WaveSeparator fillColor="white" variant={1} />
    </section>
  );
}

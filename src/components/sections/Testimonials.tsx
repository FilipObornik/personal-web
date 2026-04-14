"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { getTestimonials } from "@/lib/data";
import type { Testimonial } from "@/lib/data";
import WaveSeparator from "@/components/ui/WaveSeparator";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative bg-white rounded-2xl md:rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-500 w-80 flex-shrink-0">
      <div className="absolute -top-4 -left-2 text-8xl font-serif text-primary/10 select-none leading-none">
        &ldquo;
      </div>
      <div className="relative w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Quote className="text-white" size={16} />
      </div>
      <p className="relative text-secondary/80 text-sm leading-relaxed mb-6">
        {testimonial.content}
      </p>
      <div className="flex items-center gap-3">
        <div className="relative flex-shrink-0">
          {testimonial.imageUrl ? (
            <img src={testimonial.imageUrl} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
          ) : (
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold text-sm">
              {testimonial.name.split(" ").map((n) => n[0]).join("").slice(0, 2).replace(/[\[\]]/g, "")}
            </div>
          )}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div>
          {testimonial.linkedinUrl ? (
            <a href={testimonial.linkedinUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-secondary text-sm hover:text-primary transition-colors">
              {testimonial.name.replace(/[\[\]]/g, "")}
            </a>
          ) : (
            <p className="font-semibold text-secondary text-sm">{testimonial.name.replace(/[\[\]]/g, "")}</p>
          )}
          <p className="text-muted text-xs">
            {testimonial.role}
            {testimonial.company && (
              testimonial.companyUrl
                ? <a href={testimonial.companyUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors"> · {testimonial.company}</a>
                : <span className="text-primary"> · {testimonial.company}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const all = getTestimonials();

  return (
    <section id="reference" className="section-padding bg-section-alt relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container-narrow mx-auto relative mb-12 md:mb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-primary text-primary" />
            ))}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-secondary mb-6"
          >
            Co říkají klienti<span className="text-primary">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-lg max-w-xl mx-auto"
          >
            Zpětná vazba od lidí, se kterými jsem spolupracoval
          </motion.p>
        </div>
      </div>

      {/* Single row — scrolls left */}
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
        <div className="flex items-center gap-4 animate-marquee-left w-max px-2">
          {[...all, ...all].map((t, i) => (
            <TestimonialCard key={`r1-${t.id}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      <WaveSeparator fillColor="white" variant={4} />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";
import WaveSeparator from "@/components/ui/WaveSeparator";

export default function Services() {
  return (
    <section id="sluzby" className="section-padding pt-8 md:pt-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container-narrow mx-auto relative">
        {/* Section Header - Left aligned */}
        <div className="mb-16 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
          >
            Jak vám mohu pomoci
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-secondary mb-6"
          >
            Služby na míru
            <span className="text-primary">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted text-lg"
          >
            Vyberte si formu, která vám nejvíce vyhovuje. Nicméně každá spolupráce je unikátní - pokud zde nenaleznete, co hledáte, rezervujte si nezávaznou schůzku a probereme, jak mohu pomoci přímo Vám.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index === 0 || index === 3;
            const isFullWidth = index === 4;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={isFullWidth ? 'md:col-span-2 lg:col-span-3' : isLarge ? 'lg:col-span-2' : ''}
              >
                <Link
                  href={`/sluzby/${service.slug}`}
                  className={`group relative overflow-hidden rounded-2xl md:rounded-3xl p-6 md:p-8 card-lift cursor-pointer block h-full
                  ${isFullWidth ? 'bg-white border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)]' : isLarge ? 'bg-secondary text-white' : 'bg-white border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)]'}
                `}
                >
                {/* Hover gradient overlay for large cards */}
                {isLarge && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                {/* Decorative arcs */}
                <div className="absolute -top-12 -right-12 pointer-events-none">
                  <div className={`w-24 h-24 rounded-full border-2 ${isLarge ? 'border-white/10' : 'border-secondary/10'}`} />
                  <div className={`absolute top-3 left-3 w-[72px] h-[72px] rounded-full border-2 ${isLarge ? 'border-white/[0.07]' : 'border-secondary/[0.07]'}`} />
                  <div className={`absolute top-6 left-6 w-12 h-12 rounded-full border-2 ${isLarge ? 'border-white/4' : 'border-secondary/4'}`} />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300
                    ${isLarge
                      ? 'bg-white/10 group-hover:bg-primary'
                      : 'bg-primary/10 group-hover:bg-primary'
                    }
                  `}>
                    <Icon
                      className={`transition-colors duration-300
                        ${isLarge
                          ? 'text-primary group-hover:text-secondary'
                          : 'text-primary group-hover:text-white'
                        }
                      `}
                      size={26}
                    />
                  </div>

                  {/* Content */}
                  <h3 className={`font-bold text-xl md:text-2xl mb-3
                    ${isLarge ? 'text-white' : 'text-secondary'}
                  `}>
                    {service.title}
                  </h3>

                  <p className={`text-sm md:text-base leading-relaxed mb-6
                    ${isLarge ? 'text-white/70' : 'text-muted'}
                  `}>
                    {service.shortDescription}
                  </p>

                  {/* Link */}
                  <div className={`inline-flex items-center gap-2 font-medium text-sm transition-all duration-300 group-hover:gap-3
                    ${isLarge ? 'text-primary' : 'text-secondary group-hover:text-primary'}
                  `}>
                    Zjistit více
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 bg-section-alt rounded-full">
            <span className="text-muted px-4">Nevíte, co vybrat?</span>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Domluvme si hovor
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      <WaveSeparator fillColor="#05121f" variant={1} />
    </section>
  );
}

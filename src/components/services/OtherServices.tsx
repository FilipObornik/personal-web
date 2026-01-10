"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";

interface OtherServicesProps {
  currentSlug: string;
}

export default function OtherServices({ currentSlug }: OtherServicesProps) {
  const otherServices = services.filter((service) => service.slug !== currentSlug);

  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-secondary mb-4"
          >
            Další služby<span className="text-primary">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted max-w-xl mx-auto"
          >
            Prohlédněte si i další způsoby, jak vám mohu pomoci
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={`/sluzby/${service.slug}`}
                  className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <Icon
                        className="text-primary group-hover:text-white transition-colors duration-300"
                        size={24}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-secondary text-lg mb-1 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted text-sm line-clamp-2">
                        {service.shortDescription}
                      </p>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface PricingPackageProps {
  name: string;
  price: string;
  format: string;
  forWhom: string;
  goal?: string;
  form: string;
  output: string;
  features?: string[];
  highlighted?: boolean;
  ctaLabel?: string;
  onCtaClick?: () => void;
  index?: number;
}

export default function PricingPackage({
  name,
  price,
  format,
  forWhom,
  goal,
  form,
  output,
  features,
  highlighted = false,
  ctaLabel = "Poptat balíček",
  onCtaClick,
  index = 0,
}: PricingPackageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative rounded-3xl p-8 flex flex-col h-full ${
        highlighted
          ? "bg-primary/5 border-2 border-primary shadow-xl shadow-primary/10"
          : "bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
            Nejoblíbenější
          </span>
        </div>
      )}

      <div className="mb-6">
        <span className="text-xs font-bold text-primary uppercase tracking-widest">
          {name}
        </span>
        <div className="mt-2">
          <span className="text-3xl font-bold text-secondary">{price}</span>
        </div>
        <div className="mt-3">
          <span className="px-3 py-1 bg-secondary/5 rounded-full text-xs text-muted font-medium">
            {format}
          </span>
        </div>
      </div>

      <div className="space-y-4 flex-1">
        <div>
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
            Pro koho
          </p>
          <p className="text-secondary text-sm leading-relaxed">{forWhom}</p>
        </div>
        {goal && (
          <div>
            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
              Cíl
            </p>
            <p className="text-secondary text-sm leading-relaxed">{goal}</p>
          </div>
        )}
        <div>
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
            Forma
          </p>
          <p className="text-secondary text-sm leading-relaxed">{form}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
            Výstup
          </p>
          <p className="text-secondary text-sm leading-relaxed">{output}</p>
        </div>

        {features && features.length > 0 && (
          <ul className="space-y-2 pt-2 border-t border-gray-100">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-secondary">
                <CheckCircle2
                  size={16}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={onCtaClick}
        className={`mt-6 w-full py-3.5 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 group transition-all ${
          highlighted
            ? "bg-primary text-white hover:bg-primary-dark"
            : "bg-secondary text-white hover:bg-secondary-light"
        }`}
      >
        {ctaLabel}
        <ArrowRight
          size={16}
          className="group-hover:translate-x-1 transition-transform"
        />
      </button>
    </motion.div>
  );
}

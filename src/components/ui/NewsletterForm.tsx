"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

interface NewsletterFormProps {
  variant: "section" | "footer";
}

export default function NewsletterForm({ variant }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
      } else {
        const data = await response.json();
        throw new Error(data.error || "Něco se pokazilo.");
      }
    } catch (err) {
      console.error("Newsletter form error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Nepodařilo se přihlásit. Zkuste to prosím později."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === "footer") {
    return (
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-green-400 text-sm"
          >
            <CheckCircle2 size={16} />
            <span>Skvěle! Váš e-mail byl úspěšně přidán.</span>
          </motion.div>
        ) : (
          <motion.div key="form" exit={{ opacity: 0 }}>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vas@email.cz"
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/10 rounded-lg text-white placeholder-white/40 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary-dark disabled:opacity-50 text-secondary px-5 py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-1.5 whitespace-nowrap"
              >
                {isSubmitting ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <>
                    <Mail size={14} />
                    Odebírat
                  </>
                )}
              </button>
            </form>
            {error && (
              <p className="text-red-400 text-xs mt-2">{error}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-green-600 justify-center py-4"
        >
          <CheckCircle2 size={20} />
          <span>Skvěle! Váš e-mail byl úspěšně přidán.</span>
        </motion.div>
      ) : (
        <motion.div key="form" exit={{ opacity: 0 }}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="relative flex-1">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                size={18}
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vas@email.cz"
                className="w-full pl-11 pr-4 py-4 bg-section-alt border-0 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-secondary"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary-dark disabled:opacity-50 text-secondary px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              {isSubmitting ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  Chci vědět více
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}
            </button>
          </form>
          {error && (
            <p className="text-red-600 text-sm text-center mt-3">{error}</p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

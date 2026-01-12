"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Calendar, ArrowRight, CheckCircle2, Linkedin, MessageSquare } from "lucide-react";
import { siteConfig, services } from "@/lib/data";

type TabType = "calendar" | "form";

export default function Contact() {
  const [activeTab, setActiveTab] = useState<TabType>("calendar");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form submitted:", formData);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const tabs = [
    { id: "calendar" as const, label: "Rezervace hovoru", icon: Calendar },
    { id: "form" as const, label: "Kontaktní formulář", icon: MessageSquare },
  ];

  return (
    <section id="kontakt" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block"
          >
            Pojďme spolupracovat
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ozvěte se mi<span className="text-primary">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-xl mx-auto"
          >
            Máte projekt nebo nápad? Rád si poslechnu, s čím vám mohu pomoci.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex bg-white/5 backdrop-blur-sm rounded-2xl p-1.5 border border-white/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-secondary shadow-lg"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <tab.icon size={20} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Calendar Tab */}
          {activeTab === "calendar" && (
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Calendar className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-secondary font-bold text-xl">
                    Vyberte si termín
                  </h3>
                  <p className="text-muted text-sm">
                    15minutový úvodní hovor zdarma
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1_9GuxtdMSenskvP4AMBfLJYelAMs5W1wa3vJ_EnwKSMLsxWzxzV5NTweVMhNXj-nU1HPmKFD9?gv=true"
                  style={{ border: 0 }}
                  width="100%"
                  className="h-[800px] md:h-[600px]"
                  title="Rezervace termínu"
                />
              </div>
            </div>
          )}

          {/* Contact Form Tab */}
          {activeTab === "form" && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Contact Form - Takes 3 columns */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="text-green-600" size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-secondary mb-3">
                        Zpráva odeslána!
                      </h3>
                      <p className="text-muted mb-6">
                        Děkuji za váš zájem. Ozvu se vám co nejdříve.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-primary font-medium hover:underline"
                      >
                        Odeslat další zprávu
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-secondary mb-2">
                            Jméno
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-4 bg-section-alt border-0 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-secondary"
                            placeholder="Vaše jméno"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">
                            E-mail
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-4 bg-section-alt border-0 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-secondary"
                            placeholder="vas@email.cz"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-secondary mb-2">
                          Mám zájem o
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-4 bg-section-alt border-0 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all text-secondary"
                        >
                          <option value="">Vyberte službu (nepovinné)</option>
                          {services.map((service) => (
                            <option key={service.id} value={service.slug}>
                              {service.title}
                            </option>
                          ))}
                          <option value="other">Jiné</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-secondary mb-2">
                          Zpráva
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-4 bg-section-alt border-0 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all resize-none text-secondary"
                          placeholder="Popište váš projekt nebo dotaz..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-secondary hover:bg-secondary-light disabled:opacity-50 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-3 group"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Odesílám...
                          </>
                        ) : (
                          <>
                            Odeslat zprávu
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Right side - Direct contact */}
              <div className="lg:col-span-2">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/10">
                  <h3 className="text-white font-semibold text-lg mb-6">Přímý kontakt</h3>

                  <div className="space-y-4">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Mail className="text-primary group-hover:text-secondary transition-colors" size={20} />
                      </div>
                      <div>
                        <div className="text-white/50 text-xs mb-1">E-mail</div>
                        <div className="text-white font-medium">{siteConfig.email}</div>
                      </div>
                    </a>

                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Linkedin className="text-primary group-hover:text-secondary transition-colors" size={20} />
                      </div>
                      <div>
                        <div className="text-white/50 text-xs mb-1">LinkedIn</div>
                        <div className="text-white font-medium">Filip Oborník</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

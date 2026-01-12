"use client";

import Image from "next/image";
import { siteConfig, services } from "@/lib/data";
import { GraduationCap, MessageSquare, Cpu, Users, Handshake } from "lucide-react";

// OG Image optimized page - 1200x630px
export default function OgImagePage() {
  const iconMap: Record<string, React.ReactNode> = {
    "webinare-a-workshopy": <GraduationCap className="w-8 h-8" />,
    "konzultace": <MessageSquare className="w-8 h-8" />,
    "ai-implementace": <Cpu className="w-8 h-8" />,
    "mentoring": <Users className="w-8 h-8" />,
    "partnerske-projekty": <Handshake className="w-8 h-8" />,
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: '1200px',
        height: '630px',
        background: 'linear-gradient(135deg, #05121F 0%, #0A1F33 50%, #05121F 100%)',
      }}
    >
      {/* Grid pattern overlay - full width */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232, 143, 49, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 143, 49, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Orange glow - centered behind portrait */}
      <div
        className="absolute top-1/2 rounded-full opacity-25"
        style={{
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '900px',
          background: 'radial-gradient(circle, #E88F31 0%, transparent 70%)',
          zIndex: 1,
        }}
      />

      {/* Profile photo - right side, no background */}
      <Image
        src="/images/portrait.png"
        alt={siteConfig.name}
        width={500}
        height={630}
        className="absolute right-0 top-0 bottom-0 object-cover object-top"
        style={{ zIndex: 2 }}
        priority
      />

      {/* Content - left side */}
      <div className="relative z-20 flex flex-col justify-between h-full p-12" style={{ maxWidth: '750px' }}>
        {/* Name and title */}
        <div>
          <h1
            className="text-8xl font-bold mb-3 tracking-tight"
            style={{
              fontFamily: 'var(--font-suse), system-ui, sans-serif',
              color: '#ffffff',
            }}
          >
            {siteConfig.name}
          </h1>
          <p
            className="text-5xl font-semibold pb-2"
            style={{
              background: 'linear-gradient(135deg, #E88F31 0%, #F5A54D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.2,
            }}
          >
            {siteConfig.title}
          </p>
        </div>

        {/* Services - larger badges */}
        <div className="flex flex-wrap gap-4">
          {services.slice(0, 5).map((service) => (
            <div
              key={service.id}
              className="flex items-center gap-3 px-6 py-4 rounded-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(232, 143, 49, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span style={{ color: '#E88F31' }}>
                {iconMap[service.slug]}
              </span>
              <span
                className="text-2xl font-medium"
                style={{ color: '#ffffff' }}
              >
                {service.title}
              </span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div className="flex items-center gap-4">
          <div
            className="w-5 h-5 rounded-full"
            style={{ background: '#E88F31' }}
          />
          <span
            className="text-3xl font-semibold"
            style={{ color: '#E88F31' }}
          >
            filipobornik.cz
          </span>
        </div>
      </div>

      {/* Accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1.5 z-30"
        style={{
          background: 'linear-gradient(90deg, #E88F31 0%, #F5A54D 50%, #E88F31 100%)',
        }}
      />
    </div>
  );
}

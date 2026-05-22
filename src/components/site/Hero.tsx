import heroImg from "@/assets/hero-banner.jpg";
import { whatsappUrl } from "./WhatsAppButton";
import { MapPin, Star, Clock } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sharma Bazaar colorful storefront in Mumbai"
          width={1536}
          height={1024}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/20" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-primary" /> Trusted Local Shop · Est. 1982
        </span>
        <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-background sm:text-5xl md:text-6xl">
          Sharma Bazaar
          <span className="block bg-gradient-to-r from-primary via-primary to-[oklch(0.85_0.16_70)] bg-clip-text text-transparent">
            Mumbai ki apni dukaan.
          </span>
        </h1>
        <p className="mt-5 max-w-xl text-base text-background/85 sm:text-lg">
          Clothing, spices, handicrafts and everyday essentials — handpicked for our
          neighbourhood, delivered with a smile. Order on WhatsApp or visit us in Dadar.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={whatsappUrl("Hi! I'd like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
          >
            Order on WhatsApp
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-105"
          >
            Browse Products
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-5 text-sm text-background/90">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" /> Dadar West, Mumbai
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" /> Open today · 9 AM – 9 PM
          </span>
          <span className="inline-flex items-center gap-2">
            <Star className="h-4 w-4 fill-primary text-primary" /> 4.9 · 850+ reviews
          </span>
        </div>
      </div>
    </section>
  );
}

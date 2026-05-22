import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { whatsappUrl } from "./WhatsAppButton";

const hours = [
  { d: "Monday – Saturday", t: "9:00 AM – 9:00 PM" },
  { d: "Sunday", t: "10:00 AM – 6:00 PM" },
  { d: "Public Holidays", t: "Open · 10 AM – 6 PM" },
];

export function Visit() {
  return (
    <section id="visit" className="bg-[var(--gradient-warm)]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Visit us
          </span>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Find Sharma Bazaar</h2>
          <p className="mt-2 text-muted-foreground">Ranade Road, Dadar West, Mumbai 400028</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)] lg:col-span-3">
            <iframe
              title="Sharma Bazaar location on Google Maps"
              src="https://www.google.com/maps?q=Ranade+Road+Dadar+West+Mumbai&output=embed"
              className="h-[360px] w-full md:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div id="contact" className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <Clock className="h-5 w-5 text-secondary" /> Opening Hours
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {hours.map((h) => (
                  <li key={h.d} className="flex justify-between border-b border-border/60 pb-2 last:border-0">
                    <span className="text-muted-foreground">{h.d}</span>
                    <span className="font-semibold">{h.t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <h3 className="flex items-center gap-2 font-display text-lg font-semibold">
                <MapPin className="h-5 w-5 text-secondary" /> Get in touch
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-secondary">
                  <Phone className="h-4 w-4" /> +91 98765 43210
                </a>
                <a
                  href={whatsappUrl("Hi Sharma Bazaar!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-secondary"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
              <a
                href="https://maps.google.com/?q=Ranade+Road+Dadar+West+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

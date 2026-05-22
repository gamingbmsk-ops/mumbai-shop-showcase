import { ShieldCheck, Heart, Sparkles, Users } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Trusted since 1982", text: "Three generations of honest service in Dadar." },
  { icon: Heart, title: "Handpicked goods", text: "Quality cottons, silks, spices and handicrafts." },
  { icon: Sparkles, title: "Festive ready", text: "Special collections for Diwali, Eid & weddings." },
  { icon: Users, title: "850+ happy customers", text: "Loved by families across Mumbai." },
];

export function About() {
  return (
    <section id="about" className="bg-[var(--gradient-warm)]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
              About the shop
            </span>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
              A little shop with a big heart in Dadar.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Sharma Bazaar started as a small kirana on Ranade Road in 1982. Today, run by
              the second and third generation of the Sharma family, we stock everything from
              handwoven kurtas and silk sarees to everyday spices and brass diyas. Locals
              know us for fair prices, fresh stock and chai on the house.
            </p>
            <p className="mt-3 text-muted-foreground">
              We believe shopping should feel personal. Walk in, message us on WhatsApp, or
              call — we'll always pick up.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
              >
                <f.icon className="h-6 w-6 text-secondary" />
                <h3 className="mt-3 font-display text-base font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Star } from "lucide-react";

const reviews = [
  { name: "Priya Mehta", text: "Bought my Diwali saree here — gorgeous quality and Sharma uncle gave the sweetest discount!", rating: 5 },
  { name: "Arjun Iyer", text: "Best masala in Dadar, hands down. The WhatsApp ordering is so convenient.", rating: 5 },
  { name: "Fatima Sheikh", text: "I've been a customer for 12 years. Always fair pricing and they remember every regular.", rating: 5 },
  { name: "Rohan Desai", text: "Got brass diyas and kurtas for my whole family. Delivery to Bandra was super quick.", rating: 5 },
];

export function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4 py-20">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
          What customers say
        </span>
        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
          Loved by our Mumbai neighbours
        </h2>
        <div className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
          </div>
          4.9 average · 850+ Google reviews
        </div>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r) => (
          <figure
            key={r.name}
            className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
          >
            <div className="flex">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="mt-3 text-sm text-foreground/90">"{r.text}"</blockquote>
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              — {r.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

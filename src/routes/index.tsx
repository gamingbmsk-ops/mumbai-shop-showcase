import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { About } from "@/components/site/About";
import { Reviews } from "@/components/site/Reviews";
import { Visit } from "@/components/site/Visit";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFAB } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sharma Bazaar — Trusted Local Shop in Dadar, Mumbai" },
      {
        name: "description",
        content:
          "Sharma Bazaar — Mumbai's trusted local shop since 1982. Clothing, spices, handicrafts. Order on WhatsApp or visit us in Dadar West.",
      },
      { property: "og:title", content: "Sharma Bazaar — Trusted Local Shop in Mumbai" },
      {
        property: "og:description",
        content: "Clothing, spices and handicrafts in Dadar West. Order on WhatsApp today.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Sharma Bazaar",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ranade Road",
      addressLocality: "Dadar West",
      addressRegion: "Mumbai",
      postalCode: "400028",
      addressCountry: "IN",
    },
    telephone: "+91 98765 43210",
    openingHours: ["Mo-Sa 09:00-21:00", "Su 10:00-18:00"],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "850" },
  };
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <WhatsAppFAB />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </div>
  );
}

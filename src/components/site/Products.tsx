import kurta from "@/assets/product-kurta.jpg";
import saree from "@/assets/product-saree.jpg";
import spices from "@/assets/product-spices.jpg";
import diya from "@/assets/product-diya.jpg";
import juti from "@/assets/product-juti.jpg";
import bag from "@/assets/product-bag.jpg";
import { whatsappUrl } from "./WhatsAppButton";
import { useState } from "react";

const products = [
  { name: "Cotton Kurta", price: 899, tag: "Bestseller", img: kurta },
  { name: "Silk Saree", price: 2499, tag: "Festive", img: saree },
  { name: "Masala Spice Set", price: 449, tag: "Fresh stock", img: spices },
  { name: "Brass Diya (Set of 4)", price: 699, tag: "Handmade", img: diya },
  { name: "Embroidered Juti", price: 1199, tag: "New", img: juti },
  { name: "Jute Tote Bag", price: 549, tag: "Eco", img: bag },
];

// Cart item type
type CartItem = { name: string; price: number; qty: number };

export function Products() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  // Add product to cart
  const addToCart = (product: { name: string; price: number }) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === product.name);
      if (existing) {
        return prev.map((i) =>
          i.name === product.name ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setShowCart(true);
  };

  // Remove from cart
  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter((i) => i.name !== name));
  };

  // Total items in cart
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  // Order on WhatsApp WITH location
  const orderOnWhatsApp = () => {
    if (cart.length === 0) return;

    const orderText = cart
      .map((i) => `• ${i.name} x${i.qty} = ₹${i.price * i.qty}`)
      .join("\n");

    const sendOrder = (locationText: string) => {
      const message =
        `🛍️ New Order from Sharma Bazaar Website!\n\n` +
        `${orderText}\n\n` +
        `💰 Total: ₹${totalPrice}\n\n` +
        `📍 Location: ${locationText}`;
      window.open(whatsappUrl(message), "_blank");
    };

    // Try to get GPS location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          sendOrder(
            `https://maps.google.com/?q=${latitude},${longitude}`
          );
        },
        () => {
          // If user denies location
          sendOrder("Location not shared");
        }
      );
    } else {
      sendOrder("Location not available");
    }
  };

  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
            Our Collection
          </span>
          <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
            Fresh picks from the shop
          </h2>
          <p className="mt-2 max-w-lg text-muted-foreground">
            From everyday wear to festive must-haves — add to cart and order on WhatsApp.
          </p>
        </div>

        {/* Cart Button */}
        <button
          onClick={() => setShowCart(!showCart)}
          className="relative text-sm font-semibold bg-secondary text-white px-4 py-2 rounded-full"
        >
          🛒 Cart {totalItems > 0 && `(${totalItems})`}
        </button>
      </div>

      {/* Cart Panel */}
      {showCart && cart.length > 0 && (
        <div className="mt-6 rounded-2xl border bg-card p-4 shadow-md">
          <h3 className="font-semibold text-lg mb-3">Your Cart</h3>
          {cart.map((item) => (
            <div key={item.name} className="flex justify-between items-center mb-2">
              <span>{item.name} x{item.qty}</span>
              <div className="flex items-center gap-3">
                <span>₹{item.price * item.qty}</span>
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-red-500 text-xs"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="border-t mt-3 pt-3 flex justify-between font-bold">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
          <button
            onClick={orderOnWhatsApp}
            className="mt-4 w-full rounded-full bg-green-500 text-white py-2 font-semibold hover:bg-green-600"
          >
            📱 Order on WhatsApp with Location
          </button>
        </div>
      )}

      {/* Products Grid */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {products.map((p) => (
          <article
            key={p.name}
            className="group overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
          >
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img
                src={p.img}
                alt={p.name}
                width={768}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded-full bg-background/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary">
                {p.tag}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-display text-base font-semibold sm:text-lg">{p.name}</h3>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-lg font-bold text-foreground">₹{p.price}</span>
                <span className="text-xs text-muted-foreground">onwards</span>
              </div>
              <button
                onClick={() => addToCart(p)}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary text-white px-3 py-2 text-xs font-semibold transition-transform hover:scale-[1.02] sm:text-sm"
              >
                🛒 Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
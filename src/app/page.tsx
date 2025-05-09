"use client";

// src/app/page.tsx

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const platforms = [
  { name: "Google Maps", icon: "/svg/googlemaps.svg", stats: "200M+ places", integrated: true },
  { name: "X.com", icon: "/svg/xdotcom.svg", stats: "500M+ posts", integrated: true },
  { name: "Amazon", icon: "/svg/amazon.svg", stats: "1M+ products", integrated: false },
  { name: "Shopify", icon: "/svg/shopify.svg", stats: "2M+ shops", integrated: false },
  { name: "Indeed", icon: "/svg/indeed.svg", stats: "10M+ jobs", integrated: false }
];

export default function Home() {
  const { cartItems } = useCart();

  // Glitch effect on 'noise'
  useEffect(() => {
    const el = document.querySelector(".glitch-target");
    if (!el) return;
    setTimeout(() => el.classList.add("glitch-noise"), 700);
    const trigger = () => {
      el.classList.remove("glitch-noise"); void (el as HTMLElement).offsetWidth; el.classList.add("glitch-noise");
    };
    el.addEventListener("mouseenter", trigger);
    window.addEventListener("focus", trigger);
    return () => {
      el.removeEventListener("mouseenter", trigger);
      window.removeEventListener("focus", trigger);
    };
  }, []);

  // Animate chips on mount
  const chipsRef = useRef<(HTMLSpanElement | null)[]>([]);
  useEffect(() => {
    chipsRef.current.forEach((chip, i) => {
      if (chip) {
        setTimeout(() => chip.classList.add("animated"), 200 + i * 120);
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white font-sans">
      {/* Hero Spotlight Background */}
      <div className="hero-spotlight" aria-hidden="true"></div>
      
      <Navbar />

      <main className="main-container relative z-10 pt-40 text-center space-y-8 fade-up flex-grow">
        <h1 className="main-title transition-transform duration-200 hover:scale-105 focus:scale-105" tabIndex={0}>
          <span className="structured-data">Data</span> without
          <span className="glitch-target inline-block ml-2">noise</span>.
        </h1>
        <div className="hero-tagline subtitle">The modern platform for business data automation</div>
        <div className="text-lg text-slate-300 font-medium max-w-xl mx-auto animate-tighten">
          Unlock the power of unified, actionable insights for your business.
        </div>
        <div className="platforms-grid">
          {platforms.map((p) => (
            <div className="platform-card" key={p.name} aria-label={p.name}>
              <Image 
                src={p.icon} 
                alt={p.name + ' logo'} 
                className="platform-icon" 
                width={32}
                height={32}
              />
              <div className="platform-name">{p.name}</div>
              <div className="platform-stats">{p.stats}</div>
              {!p.integrated && <div className="platform-badge">Coming Soon</div>}
            </div>
          ))}
        </div>
      </main>
      <Footer />
      {/* SEO & Analytics (meta tags would go in _document or Head component) */}
      {/* <Head>
        <title>ODS - Unified Data Platform</title>
        <meta name="description" content="Bringing all your data together into one unified searchable system tailored to your business." />
        <meta property="og:title" content="ODS - Unified Data Platform" />
        <meta property="og:description" content="Bringing all your data together into one unified searchable system tailored to your business." />
        <meta property="og:image" content="/og-image.png" />
      </Head> */}
      {/* Analytics placeholder */}
      {/* <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script> */}
    </div>
  );
}
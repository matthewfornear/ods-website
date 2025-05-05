"use client";

// src/app/page.tsx

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const el = document.querySelector(".glitch-target");
    if (el) {
      setTimeout(() => {
        el.classList.add("glitch-noise");
      }, 700); // Delay until fade-in completes

      const handleHover = () => {
        el.classList.remove("glitch-noise");
        void el.offsetWidth; // force reflow
        el.classList.add("glitch-noise");
      };

      el.addEventListener("mouseenter", handleHover);

      const handleFocus = () => {
        el.classList.remove("glitch-noise");
        void el.offsetWidth; // force reflow
        el.classList.add("glitch-noise");
      };

      window.addEventListener("focus", handleFocus);

      return () => {
        el.removeEventListener("mouseenter", handleHover);
        window.removeEventListener("focus", handleFocus);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <main className="pt-40 px-8 max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
        <h1 className="text-6xl font-extrabold tracking-tight leading-tight whitespace-nowrap">
          <span className="structured-data">Data</span> without
          <span className="glitch-target inline-block ml-2">noise</span>.
        </h1>
        <p className="text-xl text-gray-400">
          OmniData Solutions turns unstructured business data into actionable insight.
        </p>
        <div className="h-px w-24 mx-auto bg-gray-700 my-12" />
        <div className="flex justify-center gap-4">
          <a
            href="/contact"
            className="inline-block text-sm px-6 py-3 rounded border border-white/20 hover:bg-white hover:text-black transition"
          >
            Let's talk
          </a>
          <a
            href="/about"
            className="inline-block text-sm px-6 py-3 rounded border border-white/20 hover:bg-white hover:text-black transition"
          >
            Learn more
          </a>
        </div>
      </main>
    </div>
  );
}
"use client";

// src/app/page.tsx

import { useEffect, useRef, useState } from "react";

const platforms = [
  { name: "Google Maps", icon: "/svg/googlemaps.svg", stats: "200M+ places", integrated: true },
  { name: "X.com", icon: "/svg/xdotcom.svg", stats: "500M+ posts", integrated: true },
  { name: "Amazon", icon: "/svg/amazon.svg", stats: "1M+ products", integrated: false },
  { name: "Shopify", icon: "/svg/shopify.svg", stats: "2M+ shops", integrated: false },
  { name: "Indeed", icon: "/svg/indeed.svg", stats: "10M+ jobs", integrated: false }
];


export default function Home() {
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

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white font-sans">
      {/* Hero Spotlight Background */}
      <div className="hero-spotlight" aria-hidden="true"></div>
      {/* Navbar */}
      <nav className="navbar">
        <a href="/" className="navbar-logo" aria-label="OmniData Solutions Home">
          <span className="logo-eye">
            {/* Placeholder SVG for eye with node tree pupil */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <ellipse cx="16" cy="16" rx="13" ry="8" stroke="#fff" strokeWidth="2"/>
              <circle cx="16" cy="16" r="3.5" stroke="#7c8aff" strokeWidth="2" fill="none"/>
              <circle cx="16" cy="16" r="1.2" fill="#7c8aff"/>
              <line x1="16" y1="16" x2="19" y2="13" stroke="#7c8aff" strokeWidth="1.2"/>
              <line x1="16" y1="16" x2="13" y2="13" stroke="#7c8aff" strokeWidth="1.2"/>
              <line x1="16" y1="16" x2="16" y2="11" stroke="#7c8aff" strokeWidth="1.2"/>
            </svg>
          </span>
          <span className="logo-text">OmniData Solutions</span>
        </a>
        <div className="navbar-links">
          <a href="/" className="navbar-link" aria-label="Home">Home</a>
          <a href="/about" className="navbar-link" aria-label="About">About</a>
          <a href="#contact" className="navbar-link" aria-label="Contact">Contact</a>
        </div>
      </nav>
      <main className="main-container relative z-10 pt-40 text-center space-y-8 animate-fade-in flex-grow">
        <h1 className="text-6xl font-extrabold tracking-tight leading-tight whitespace-nowrap transition-transform duration-200 hover:scale-105 focus:scale-105" tabIndex={0}>
          <span className="structured-data">Data</span> without
          <span className="glitch-target inline-block ml-2">noise</span>.
        </h1>
        <div className="hero-tagline">The modern platform for business data automation</div>
        <div className="text-lg text-slate-300 font-medium max-w-xl mx-auto animate-tighten">
          Unlock the power of unified, actionable insights for your business.
        </div>
        <div className="integration-graph" style={{marginBottom: '9rem', marginTop: '3.5rem'}}>
          <svg width="570" height="400" viewBox="0 0 570 400" fill="none">
            {/* Node graph with equal spacing and lines ending at node edges */}
            {(() => {
              // Node data
              const center = { x: 285, y: 180, r: 48 };
              const nodes = [
                { name: 'Google Maps', icon: '/svg/googlemaps.svg', stats: '200M+ places', color: '#7c8aff', fill: '#fff', text: '#bfcfff', stat: '#7c8aff', integrated: true },
                { name: 'X.com', icon: '/svg/xdotcom.svg', stats: '500M+ posts', color: '#7c8aff', fill: '#fff', text: '#bfcfff', stat: '#7c8aff', integrated: true },
                { name: 'Amazon', icon: '/svg/amazon.svg', stats: '1M+ products', color: '#bbb', fill: '#bbb', text: '#bfcfff', stat: '#bbb', integrated: false },
                { name: 'Shopify', icon: '/svg/shopify.svg', stats: '2M+ shops', color: '#bbb', fill: '#bbb', text: '#bfcfff', stat: '#bbb', integrated: false },
                { name: 'Indeed', icon: '/svg/indeed.svg', stats: '10M+ jobs', color: '#bbb', fill: '#bbb', text: '#bfcfff', stat: '#bbb', integrated: false },
              ];
              const nodeR = 30;
              const nodeRDashed = 29;
              const nodeRFill = 25;
              const n = nodes.length;
              const radius = 140;
              // Calculate node positions
              const nodeAngles = nodes.map((_, i) => (2 * Math.PI * i) / n - Math.PI / 2);
              const nodePositions = nodeAngles.map(a => ({
                x: center.x + radius * Math.cos(a),
                y: center.y + radius * Math.sin(a),
                angle: a
              }));
              // Draw lines first
              const lines = nodePositions.map((pos, i) => {
                // Line from edge of center node to edge of node
                const dx = pos.x - center.x;
                const dy = pos.y - center.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                const startX = center.x + (center.r * dx) / dist;
                const startY = center.y + (center.r * dy) / dist;
                const endX = pos.x - (nodeR * dx) / dist;
                const endY = pos.y - (nodeR * dy) / dist;
                const isIntegrated = nodes[i].integrated;
                return (
                  <line
                    key={`line-${i}`}
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke={isIntegrated ? '#7c8aff' : '#bbb'}
                    strokeWidth={isIntegrated ? 3 : 2.5}
                    strokeDasharray={isIntegrated ? undefined : '8 8'}
                    opacity={isIntegrated ? 1 : 0.6}
                  />
                );
              });
              // Draw nodes
              const nodeCircles = nodePositions.map((pos, i) => {
                const n = nodes[i];
                return (
                  <g key={`node-${i}`}>
                    {/* Dashed circle for coming soon */}
                    {!n.integrated && (
                      <circle cx={pos.x} cy={pos.y} r={nodeRDashed} fill="none" stroke="#bbb" strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />
                    )}
                    {/* Node circle */}
                    <circle cx={pos.x} cy={pos.y} r={nodeR} fill={n.fill} stroke={n.color} strokeWidth="3" opacity={n.integrated ? 1 : 0.25} />
                    {/* Icon */}
                    <image href={n.icon} x={pos.x - 18} y={pos.y - 18} width="36" height="36" opacity={n.integrated ? 1 : 0.25} />
                    {/* Name */}
                    <text x={pos.x} y={pos.y + nodeR + 22} textAnchor="middle" fill={n.text} fontSize="15" fontWeight="bold" opacity={n.integrated ? 1 : 0.7}>{n.name}</text>
                    {/* Stats */}
                    <text x={pos.x} y={pos.y + nodeR + 40} textAnchor="middle" fill={n.stat} fontSize="13" opacity={n.integrated ? 1 : 0.7}>{n.stats}</text>
                  </g>
                );
              });
              // Draw center node and label
              return [
                ...lines,
                ...nodeCircles,
                <g key="center">
                  <circle cx={center.x} cy={center.y} r={center.r} fill="#fff" stroke="#7c8aff" strokeWidth="3"/>
                  <image href="/svg/logo.svg" x={center.x - 30} y={center.y - 30} width="60" height="60" />
                  <text x={center.x} y={center.y + center.r + 40} textAnchor="middle" fill="#e0e7ff" fontSize="18" fontWeight="bold">OmniData</text>
                </g>
              ];
            })()}
          </svg>
        </div>
        <div className="text-base text-slate-200 leading-snug max-w-xl mx-auto" style={{marginTop: '2.5rem'}}>
          Bringing all your data together into one unified searchable system tailored to your business.
        </div>
        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <button
            className="button-primary"
            onClick={() => setModalOpen(true)}
            aria-label="Open contact form"
          >
            Let's talk
          </button>
          <a
            href="/about"
            className="button-secondary"
            aria-label="Learn more about us"
          >
            Learn more
          </a>
        </div>
      </main>
      <footer className="footer">
        <div>
          &copy; {new Date().getFullYear()} OmniData Solutions. All rights reserved.
          <span className="mx-2">|</span>
          <a href="/privacy" aria-label="Privacy Policy">Privacy Policy</a>
          <span className="footer-social">
            <a href="https://x.com/fixitorgotojail" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.6 1.64.96c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.95 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.82-.08.55 1.7 2.16 2.94 4.07 2.97A9.05 9.05 0 010 21.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z"/></svg>
            </a>
            <a href="https://github.com/tetzhu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
            </a>
          </span>
        </div>
      </footer>
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
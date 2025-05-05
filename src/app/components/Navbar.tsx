"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { cartItems } = useCart();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-logo" aria-label="OmniData Solutions Home">
        <Image 
          src="/svg/logo.svg" 
          alt="OmniData Solutions logo" 
          className="logo-img" 
          width={34} 
          height={34}
          style={{height: '2.1em', width: '2.1em'}} 
        />
        <span className="logo-text">OmniData Solutions</span>
      </Link>
      <div className="navbar-links">
        <Link href="/" className="navbar-link flex items-center justify-center h-12 px-4" aria-label="Home">Home</Link>
        <Link href="/about" className="navbar-link flex items-center justify-center h-12 px-4" aria-label="About">About</Link>
        <Link href="/demo" className="navbar-link flex items-center justify-center h-12 px-4" aria-label="Demo">Demo</Link>
        <Link href="/services" className="navbar-link flex items-center justify-center h-12 px-4" aria-label="Services">Services</Link>
        <Link href="/contact" className="navbar-link flex items-center justify-center h-12 px-4" aria-label="Contact">Contact</Link>
        <Link href="/cart" className="navbar-link flex items-center justify-center h-12 px-4 relative pr-4 pt-2" aria-label="Cart">
          <div className="relative" style={{ width: 32, height: 32 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {hasMounted && cartItems.length > 0 && (
              <span
                className="absolute -mt-1 -mr-1 top-0 right-0 bg-gray-800 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow border border-gray-400 z-20"
              >
                {cartItems.length}
              </span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
} 
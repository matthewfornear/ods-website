"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  const { addToCart } = useCart();

  // Fade-in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleAddToCart = () => {
    addToCart({
      id: 1,
      name: "Data Integration Membership",
      description: "Access to our fully relational database of customer data",
      price: 29.99,
      period: "month",
      icon: "📊"
    });
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white font-sans">
      <Navbar />

      <main className="main-container relative z-10 flex-grow pt-20 px-4 max-w-6xl mx-auto w-full fade-up">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your business data into actionable insights with our comprehensive data integration solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <div className="text-4xl mb-4 flex items-center justify-center w-full">📊</div>
            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center w-full">Data Integration Membership</h2>
            <p className="text-gray-400 mb-6">
              Get access to our fully relational database of customer data, designed to help you make informed business decisions.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Real-time data updates
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Advanced analytics tools
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Custom reporting
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                24/7 support
              </li>
            </ul>
            <div className="text-3xl font-bold mb-6">$29.99<span className="text-lg text-gray-400">/month</span></div>
            <Link 
              href="/cart"
              onClick={handleAddToCart}
              className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  const { addToCart } = useCart();
  const [showMembership, setShowMembership] = useState(false);

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
        {/* Real-World Applications Card or Membership Card (toggle) */}
        {!showMembership ? (
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl w-full mx-auto mb-8 animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Real-World Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Catering & Food Services</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Analyze Google Maps data to identify neighborhoods with high population density but low catering service presence, providing exact locations for expansion.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Compare menu prices against 1,000+ local competitors, automatically adjusting rates to maintain optimal profit margins while staying competitive.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Track customer reviews across platforms to identify peak service hours, automatically suggesting schedule adjustments to maximize customer satisfaction.
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Retail & E-commerce</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Monitor competitor inventory levels in real-time, alerting when stock runs low so you can adjust your pricing strategy.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Analyze Amazon sales data to identify trending products 48 hours before they hit mainstream, giving you first-mover advantage.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Track customer search patterns to automatically optimize product listings and marketing keywords for maximum visibility.
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Professional Services</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Analyze review patterns to automatically adjust service hours, extending availability during high-demand periods and reducing staff during slow times.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Track competitor service offerings and pricing in real-time, automatically suggesting service package adjustments to maintain market competitiveness.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Monitor client feedback across platforms to identify service gaps, automatically generating improvement recommendations for your team.
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Healthcare & Wellness</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Analyze patient feedback across platforms to automatically adjust appointment scheduling, reducing wait times during peak hours.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Identify underserved areas by analyzing population density against healthcare provider locations, providing exact coordinates for new facility placement.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    Track competitor service offerings and pricing, automatically suggesting service adjustments to maintain optimal patient satisfaction and revenue.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-lg"
                onClick={() => setShowMembership(true)}
              >
                See Membership Details
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl max-w-lg mx-auto flex flex-col items-center justify-center text-center animate-fade-in">
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
            <button
              className="mt-8 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
              onClick={() => setShowMembership(false)}
            >
              Back to Real-World Applications
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
} 
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

export default function Services() {
  const { addToCart } = useCart();
  const router = useRouter();
  const [showMembership, setShowMembership] = useState(false);
  const [fadeInMembership, setFadeInMembership] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: 1,
      name: "Data Integration Membership",
      description: "Get daily business data updates and actionable insights delivered to your inbox.",
      price: 29.99,
      period: "month",
      icon: "📊"
    });
    router.push("/cart");
  };

  const handleConsultationAddToCart = () => {
    addToCart({
      id: 2,
      name: "One-Time Business Optimization Consultation",
      description: "A strategic, one-time consultation designed to restructure your business using targeted data insights. We analyze your current model, identify actionable improvements, and deliver a clear plan to boost profitability.",
      price: 100.00,
      period: "one-time",
      icon: "💡"
    });
    router.push("/cart");
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showMembership) {
      timeout = setTimeout(() => setFadeInMembership(true), 10); // allow DOM to mount first
    } else {
      setFadeInMembership(false);
    }
    return () => clearTimeout(timeout);
  }, [showMembership]);

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
          <div key="applications" className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl w-full mx-auto mb-8 animate-fade-in">
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
                See Available Services
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Membership and Consultation Cards Side-by-Side */}
            {(() => {
              const cards = [
                {
                  key: 'membership',
                  icon: '📊',
                  title: 'Data Integration Membership',
                  subtitle: 'Get weekly business data updates and actionable insights delivered to your inbox.',
                  features: [
                    'Real-time data updates delivered weekly via email',
                    'Data in structured formats (Excel, CSV, etc.)',
                    'Immediate actionable insights',
                  ],
                  examples: [
                    '"Your Monday promotions have the highest return of reviews: consider expanding this promotion to other days."',
                    '"Competitor X increased their prices on Fridays: consider adjusting your pricing strategy."',
                    '"Reviews indicate a lack of staff on Mondays."',
                  ],
                  price: '$29.99',
                  period: '/month',
                  button: {
                    text: 'Add to Cart',
                    onClick: handleAddToCart,
                  },
                },
                {
                  key: 'consultation',
                  icon: '💡',
                  title: 'One-Time Business Consultation',
                  subtitle: 'A strategic, one-time consultation designed to restructure your business using targeted data insights.',
                  features: [
                    'In-depth analysis of your current business model',
                    'Identification of actionable improvements',
                    'Clear, step-by-step plan to boost profitability',
                  ],
                  examples: [
                    '"Restructure your pricing tiers: competitors operate at 10% lower price points."',
                    '"Streamline your onboarding process: 50% of customers do not complete their sign-up after the welcome email."',
                    '"Shift ad spend: Google ads underperform, most customers convert via TikTok."',
                  ],
                  price: '$100.00',
                  period: '/one-time',
                  button: {
                    text: 'Add to Cart',
                    onClick: handleConsultationAddToCart,
                  },
                },
              ];
              return (
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch w-full mt-8">
                  {cards.map((card) => (
                    <div key={card.key} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl max-w-lg w-full flex flex-col items-center text-center animate-fade-in" style={{ minHeight: '700px' }}>
                      <div className="flex flex-col items-center w-full mb-4">
                        <div className="flex items-center justify-center w-full h-14 text-5xl">{card.icon}</div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center justify-center w-full">{card.title}</h2>
                        <p className="text-gray-400 mb-6 min-h-[48px] flex items-center justify-center w-full">{card.subtitle}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {card.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {feature}
                          </li>
                        ))}
                        {card.examples.map((ex, i) => (
                          <li key={i} className="flex items-center justify-center text-center pl-7">
                            <span className="italic text-blue-300">{ex}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col w-full mt-auto">
                        <div className="text-3xl font-bold mb-6">{card.price}<span className="text-lg text-gray-400">{card.period}</span></div>
                        <button
                          onClick={card.button.onClick}
                          className="block w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 mb-2"
                        >
                          {card.button.text}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
            {/* Centered Back Button Below Both Cards */}
            <div className="flex justify-center mt-8">
              <button
                className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
                onClick={() => setShowMembership(false)}
              >
                Back to Real-World Applications
              </button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
} 
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import { uniformServiceCards } from "./serviceData";
import Modal from "../components/Modal";

export default function Services() {
  const { addToCart, showModal, closeModal } = useCart();
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
      description: "A strategic, one-time consultation designed to restructure your business using targeted data insights.",
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
      <Modal open={showModal} onClose={closeModal}>
        <div className="text-lg font-semibold mb-2 text-center">You can only add one service to the cart at a time.</div>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700" onClick={closeModal}>Close</button>
        </div>
      </Modal>
      <Navbar />
      <main className="main-container relative z-10 flex-grow pt-20 px-4 max-w-6xl mx-auto w-full fade-up">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your business data into actionable insights with our comprehensive data integration solutions.
          </p>
        </div>
        {/* Services Cards First */}
        <>
          {/* Membership and Consultation Cards Side-by-Side */}
          {(() => {
            // Reorder: Social Signal Tracker (id:3), Data Integration Membership (id:1), One-Time Business Optimization Consultation (id:2)
            const order = [3, 1, 2];
            const cards = uniformServiceCards;
            return (
              <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch w-full mt-8">
                {cards.map((card) => {
                  return (
                    <div key={card.id} className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-xl max-w-lg w-full flex flex-col items-center text-center animate-fade-in" style={{ minHeight: '480px' }}>
                      {/* Absolute badge at top center */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                        {card.badge && (
                          <span className="bg-blue-900 text-blue-200 px-4 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap inline-block">{card.badge}</span>
                        )}
                      </div>
                      {/* Spacer to reserve badge space */}
                      <div className="h-8"></div>
                      <div className="flex flex-col items-center w-full mb-4">
                        <div className="flex items-center justify-center w-full min-h-[56px] text-5xl">{card.icon}</div>
                        <div className="flex items-center justify-center w-full min-h-[64px]">
                          <h2 className="text-2xl font-bold text-center">{card.title}</h2>
                        </div>
                        <div className="flex items-center justify-center w-full min-h-[48px] mb-6">
                          <p className="text-gray-400 text-center">{card.subtitle}</p>
                        </div>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {card.features.map((feature: string, i: number) => (
                          <li
                            key={i}
                            className="min-h-[32px] leading-snug text-left"
                            style={feature ? {} : { visibility: 'hidden' }}
                          >
                            {feature}
                          </li>
                        ))}
                        {card.examples.map((ex: string, i: number) => (
                          <li key={i} className="flex items-center justify-center text-center pl-7" style={ex ? {} : {visibility: 'hidden'}}>
                            <span className="italic text-blue-300">{ex}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col w-full mt-auto">
                        <div className="text-3xl font-bold mb-6">{card.price}<span className="text-lg text-gray-400">{card.period}</span></div>
                        <button
                          onClick={() => {
                            addToCart({
                              id: card.id,
                              name: card.title,
                              description: card.subtitle,
                              price: Number(card.price.replace(/[^\d.]/g, "")),
                              period: card.period.replace("/", ""),
                              icon: card.icon,
                            });
                          }}
                          className={
                            `block w-full font-medium py-3 px-6 rounded-lg text-center transition-all duration-300 mb-2 ` +
                            (card.id === 3
                              ? 'bg-slate-600 hover:bg-slate-700 text-white'
                              : card.id === 1
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : 'bg-yellow-400 hover:bg-yellow-500 text-black')
                          }
                        >
                          {card.buttonText}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
          {/* Always show Real-World Applications at the bottom */}
          <div key="applications" className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl w-full mx-auto mt-8 animate-fade-in">
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
          </div>
        </>
      </main>
      <Footer />
    </div>
  );
} 
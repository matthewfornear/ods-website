"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const values = [
  {
    title: "Innovation",
    description: "Pushing the boundaries of what's possible with data",
    icon: "🚀"
  },
  {
    title: "Reliability",
    description: "Building trust through consistent, accurate results",
    icon: "🛡️"
  },
  {
    title: "Simplicity",
    description: "Making complex data accessible and actionable",
    icon: "✨"
  },
  {
    title: "Impact",
    description: "Driving real business value through data insights",
    icon: "📈"
  }
];

export default function About() {
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

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white font-sans">
      <Navbar />
      <main className="flex-grow pt-20 px-4 max-w-6xl mx-auto w-full">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-on-scroll opacity-0">
          <h1 className="text-5xl font-bold mb-6 text-white">
            About OmniData Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded on April 29, 2025 by Matthew Fornear, we're on a mission to transform how businesses interact with their data, 
            making it more accessible, actionable, and valuable than ever before.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-20 animate-on-scroll opacity-0">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
              Business owners have enough on their plates. We take the stress out of data analysis by uncovering hidden pain points, 
              growth opportunities, and profit potential across Google Maps, X.com, Amazon, Shopify, and Indeed. We transform complex, 
              obscure data from these platforms into clear, actionable insights that help you make better decisions and grow your business.
            </p>
          </div>
        </section>

        {/* Real-World Applications Section */}
        <section className="mb-20 animate-on-scroll opacity-0">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8">
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
        </section>

        {/* Values Section */}
        <section className="mb-20 animate-on-scroll opacity-0">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20 animate-on-scroll opacity-0">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-2">Unified Data</h3>
                <p className="text-gray-400">Bring together data from multiple platforms into one cohesive view</p>
              </div>
              <div>
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Real-Time Insights</h3>
                <p className="text-gray-400">Get instant updates and alerts on important business metrics</p>
              </div>
              <div>
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Actionable Intelligence</h3>
                <p className="text-gray-400">Clear, practical recommendations based on your data</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
  
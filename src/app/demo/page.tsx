"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Demo() {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white font-sans">
      <Navbar />

      <main className="main-container relative z-10 flex-grow pt-20 px-4 max-w-6xl mx-auto w-full fade-up">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Watch Our Demo</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how OmniData Solutions can transform your business data into actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Platform Overview</h2>
            <p className="text-gray-400 mb-6">
              Our platform brings together data from multiple sources into one unified, searchable system. 
              Watch how we transform complex data into clear, actionable insights.
            </p>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-4xl">🎥</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <h3 className="font-semibold">Unified Data View</h3>
                  <p className="text-gray-400">Bring together data from multiple platforms into one cohesive view</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <h3 className="font-semibold">Real-Time Analytics</h3>
                  <p className="text-gray-400">Get instant insights and updates on your business metrics</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <h3 className="font-semibold">Custom Reports</h3>
                  <p className="text-gray-400">Generate tailored reports that focus on what matters to your business</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/services" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-8 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
} 
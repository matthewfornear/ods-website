"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
      {/* Hero Spotlight Background */}
      <div className="hero-spotlight" aria-hidden="true"></div>
      
      <Navbar />

      <main className="main-container relative z-10 flex-grow pt-20 px-4 max-w-6xl mx-auto w-full">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-on-scroll opacity-0">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about how OmniData Solutions can help your business? We're here to help.
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="mb-20 animate-on-scroll opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">📧</div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:contact@omnidata-solutions.com" className="text-blue-400 hover:text-blue-300">
                        contact@omnidata-solutions.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">🌐</div>
                    <div>
                      <h3 className="font-medium">Social Media</h3>
                      <div className="flex space-x-4 mt-2">
                        <a href="https://x.com/fixitorgotojail" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                          Twitter
                        </a>
                        <a href="https://github.com/tetzhu" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                <div className="space-y-2">
                  <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-gray-300">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
  
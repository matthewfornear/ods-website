"use client";

import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Checkout() {
  const { cartItems } = useCart();
  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white font-sans">
      <Navbar />
      <main className="main-container relative z-10 flex-grow pt-20 px-4 max-w-2xl mx-auto w-full fade-up">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Checkout</h1>
          <p className="text-lg text-gray-400">Review your order and complete your purchase securely.</p>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 mb-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          {cartItems.length === 0 ? (
            <div className="text-gray-400 text-center py-8">
              Your cart is empty. <Link href="/services" className="text-blue-400 underline">Browse services</Link>
            </div>
          ) : (
            <ul className="divide-y divide-gray-700 mb-6">
              {cartItems.map((item, idx) => (
                <li key={item.id || idx} className="flex items-center justify-between py-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <span className="text-lg font-bold">${item.price?.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex items-center justify-between text-xl font-bold mt-6">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        {cartItems.length > 0 && (
          <div className="text-center mt-8">
            {/* Stripe integration placeholder */}
            <button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-xl shadow-lg mb-4"
              // onClick={handleStripeCheckout} // Integrate with Stripe here
              disabled
            >
              Pay with Stripe (Coming Soon)
            </button>
            <div className="text-gray-400 text-sm mt-2">All payments are processed securely via Stripe.</div>
          </div>
        )}
      </main>
      <footer className="footer">
        <div>
          &copy; {new Date().getFullYear()} OmniData Solutions. All rights reserved.
          <span className="mx-2">|</span>
          <Link href="/privacy" aria-label="Privacy Policy">Privacy Policy</Link>
        </div>
      </footer>
    </div>
  );
} 
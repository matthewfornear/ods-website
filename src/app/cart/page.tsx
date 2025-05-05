"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    // Add your checkout logic here
    setTimeout(() => {
      setIsCheckingOut(false);
    }, 2000);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white font-sans">
      <Navbar />

      <main className="main-container relative z-10 flex-grow pt-20 px-4 max-w-6xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">🛒</div>
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="text-gray-400 mb-6">Add some services to get started</p>
                <Link 
                  href="/services" 
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{item.icon === '💾' ? '📊' : item.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-gray-400">{item.description}</p>
                        <p className="text-blue-400 mt-2">${item.price}/{item.period}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-gray-400">
                  <span>Total</span>
                  <span className="text-white font-semibold">${total.toFixed(2)}</span>
                </div>
                <a
                  href="https://buy.stripe.com/dR6aGU2Df5t6e0U5kk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-block font-medium py-3 px-6 rounded-lg text-center text-xl shadow-lg mb-4 mt-6 transition-all duration-300
                    ${cartItems.length === 0
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed pointer-events-none'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'}`}
                  tabIndex={cartItems.length === 0 ? -1 : 0}
                  aria-disabled={cartItems.length === 0}
                >
                  Checkout with Stripe
                </a>
                {cartItems.length > 0 && (
                  <div className="text-gray-400 text-sm mt-2">Taxes will be calculated at checkout.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 
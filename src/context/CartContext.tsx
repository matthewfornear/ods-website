"use client";

import React, { createContext, useState, useEffect } from 'react';

interface CartItem {
  id: string | number;
  name: string;
  description: string;
  price: number;
  period: string;
  icon: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string | number) => void;
  clearCart: () => void;
  hasAgreedToEUA: boolean;
  setHasAgreedToEUA: (agreed: boolean) => void;
}

const defaultContext: CartContextType = {
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  hasAgreedToEUA: false,
  setHasAgreedToEUA: () => {},
};

export const CartContext = createContext<CartContextType>(defaultContext);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [hasAgreedToEUA, setHasAgreedToEUA] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
      const savedEUAAgreement = localStorage.getItem('hasAgreedToEUA');
      if (savedEUAAgreement) {
        setHasAgreedToEUA(JSON.parse(savedEUAAgreement));
      }
    } catch (error) {
      console.error('Error loading cart data:', error);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isInitialized]);

  // Save EUA agreement to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('hasAgreedToEUA', JSON.stringify(hasAgreedToEUA));
    }
  }, [hasAgreedToEUA, isInitialized]);

  const addToCart = (item: CartItem) => {
    setCartItems(prev => [...prev, item]);
  };

  const removeFromCart = (itemId: string | number) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const contextValue: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    hasAgreedToEUA,
    setHasAgreedToEUA
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 
"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  period: string;
  icon: string;
}

interface CartContextType {
  cartItems: CartItem[];
  isLoading: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  showModal: boolean;
  closeModal: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Initialize cart from localStorage
const getInitialCart = (): CartItem[] => {
  if (typeof window === 'undefined') return [];
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    try {
      return JSON.parse(savedCart);
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return [];
    }
  }
  return [];
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(getInitialCart);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      if (prev.length > 0) {
        setShowModal(true);
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const closeModal = () => setShowModal(false);

  return (
    <CartContext.Provider value={{ cartItems, isLoading, addToCart, removeFromCart, showModal, closeModal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 
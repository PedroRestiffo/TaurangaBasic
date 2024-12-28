import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { CartDrawer } from './CartDrawer';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold">TAURANGA BASICS</h1>
            <button 
              className="p-2 hover:bg-gray-100 rounded-full relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
      <div className="h-16" /> {/* Spacer to prevent content from hiding under fixed navbar */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
import React, { useState } from 'react';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { ProductCarousel } from './ProductCarousel';

interface ProductCardProps extends Product {}

export function ProductCard({ id, name, price, images, sizes }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image: images[0], sizes }, quantity, selectedSize);
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      <ProductCarousel images={images} productName={name} />
      <h3 className="text-xl font-semibold mb-2 mt-4">{name}</h3>
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg">${price.toLocaleString()}</p>
        <div className="flex items-center space-x-2">
          <select 
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="border rounded px-2 py-1"
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                Talle {size}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center border rounded">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-2 hover:bg-gray-100"
          >
            <Minus size={16} />
          </button>
          <span className="px-4">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="p-2 hover:bg-gray-100"
          >
            <Plus size={16} />
          </button>
        </div>
        <button 
          onClick={handleAddToCart}
          className="bg-black text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-gray-800"
        >
          <ShoppingCart size={16} />
          <span>Agregar al carrito</span>
        </button>
      </div>
    </div>
  );
}
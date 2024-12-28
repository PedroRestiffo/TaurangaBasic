import React from 'react';
import { ProductCard } from './components/ProductCard';
import { Navbar } from './components/Navbar';
import { HeaderCarousel } from './components/HeaderCarousel';
import { CartProvider } from './context/CartContext';

const products = [
  {
    id: 1,
    name: 'Black Magic Woman',
    price: 52000,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=60'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    name: 'White Widow',
    price: 52000,
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=60'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

const colorProducts = ['Red', 'Gray', 'Pink', 'White'].map((color, index) => ({
  id: index + 3,
  name: `Remera ${color}`,
  price: 52000,
  images: [
    'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60'
  ],
  sizes: ['S', 'M', 'L', 'XL'],
}));

export function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <HeaderCarousel />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Remeras a color</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {colorProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
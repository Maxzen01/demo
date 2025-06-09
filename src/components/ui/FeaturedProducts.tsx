import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductQuickView from './ProductQuickView';
import { getFeaturedProducts } from '../../data/products';
import { Product } from '../../types';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of the most innovative and high-quality products available in our store.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={handleQuickView}
            />
          ))}
        </div>

        {quickViewProduct && (
          <ProductQuickView 
            product={quickViewProduct} 
            onClose={closeQuickView}
          />
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
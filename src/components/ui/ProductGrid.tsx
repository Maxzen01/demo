import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductQuickView from './ProductQuickView';
import { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <div>
      {title && (
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
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
  );
};

export default ProductGrid;
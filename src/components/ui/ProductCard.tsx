import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { useCartStore } from '../../store/cartStore';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const addItem = useCartStore(state => state.addItem);
  
  const discountPercentage = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
  };

  return (
    <div 
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <a href={`/product/${product.slug}`}>
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </a>
        
        {/* Discount Tag */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discountPercentage}% OFF
          </div>
        )}
        
        {/* Action buttons */}
        <div className={`absolute right-3 transition-opacity duration-300 flex flex-col space-y-2 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition-colors">
            <Heart size={18} />
          </button>
          <button 
            className="bg-white p-2 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition-colors"
            onClick={() => onQuickView && onQuickView(product)}
          >
            <Eye size={18} />
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-1 line-clamp-1">
          <a href={`/product/${product.slug}`} className="hover:text-blue-900 transition-colors">
            {product.name}
          </a>
        </h3>
        
        <div className="flex items-center mb-2">
          {/* Rating stars */}
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            {product.discountPrice ? (
              <div className="flex items-center">
                <span className="text-lg font-bold text-blue-900">₹{product.discountPrice.toFixed(2)}</span>
                <span className="text-sm text-gray-500 line-through ml-2">₹{product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-blue-900">₹{product.price.toFixed(2)}</span>
            )}
          </div>
          
          {/* Add to cart button */}
          <button 
            onClick={handleAddToCart}
            className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 transition-colors"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
import React from 'react';
import { X, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCartStore } from '../../store/cartStore';

interface ProductQuickViewProps {
  product: Product;
  onClose: () => void;
}

const ProductQuickView: React.FC<ProductQuickViewProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = React.useState(1);
  const addItem = useCartStore(state => state.addItem);

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
        <div className="flex justify-end p-2">
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-gray-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-w-3 aspect-h-4">
            <img 
              src={product.images[0]} 
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {/* Product Details */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
            </div>
            
            {/* Price */}
            <div className="mb-4">
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-blue-900">${product.discountPrice.toFixed(2)}</span>
                  <span className="text-lg text-gray-500 line-through ml-3">${product.price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-blue-900">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Quantity */}
            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <button 
                  onClick={decreaseQuantity}
                  className="border border-gray-300 rounded-l-md px-3 py-1 hover:bg-gray-100"
                >
                  -
                </button>
                <input 
                  type="number"
                  id="quantity"
                  value={quantity}
                  readOnly
                  className="border-t border-b border-gray-300 py-1 w-12 text-center"
                />
                <button 
                  onClick={increaseQuantity}
                  className="border border-gray-300 rounded-r-md px-3 py-1 hover:bg-gray-100"
                >
                  +
                </button>
                
                <span className="ml-3 text-sm text-gray-500">
                  {product.stock} available
                </span>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex space-x-4">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-blue-900 text-white py-2 px-6 rounded-md hover:bg-blue-800 transition-colors flex items-center justify-center"
              >
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
              <button className="border border-gray-300 p-2 rounded-md hover:bg-gray-100 transition-colors">
                <Heart size={20} />
              </button>
            </div>
            
            {/* View Details Link */}
            <div className="mt-6 text-center">
              <a 
                href={`/product/${product.slug}`}
                className="text-blue-900 hover:text-blue-700 font-medium"
              >
                View Full Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
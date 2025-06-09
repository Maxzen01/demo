import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import { getProductBySlug } from '../data/products';
import { categories } from '../data/categories';
import { Product } from '../types';
import { ShoppingCart, Heart, Share2, Check, Info, Truck, ShieldCheck, RotateCcw } from 'lucide-react';

interface ProductDetailProps {
  slug: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ slug }) => {
  const product = getProductBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const increaseQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <p>Product not found.</p>
        </div>
      </Layout>
    );
  }

  const category = categories.find(cat => cat.id === product.categoryId);
  const discountPercentage = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Categories', href: '/categories' },
            { label: category?.name || 'Category', href: `/category/${category?.slug}` },
            { label: product.name }
          ]}
        />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4 overflow-hidden rounded-lg">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-4 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-md overflow-hidden w-24 h-24 flex-shrink-0 border-2 ${
                      selectedImage === index ? 'border-blue-900' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
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
              
              <span className="mx-4 text-gray-300">|</span>
              
              <span className={`${product.stock > 0 ? 'text-green-600' : 'text-red-600'} flex items-center`}>
                {product.stock > 0 ? (
                  <>
                    <Check size={16} className="mr-1" />
                    In Stock
                  </>
                ) : (
                  'Out of Stock'
                )}
              </span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-blue-900">${product.discountPrice.toFixed(2)}</span>
                  <span className="text-xl text-gray-500 line-through ml-3">${product.price.toFixed(2)}</span>
                  <span className="ml-3 bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    Save {discountPercentage}%
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-blue-900">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            {/* Description */}
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            {/* Quantity and Add to Cart */}
            <div className="mb-6">
              <div className="flex items-center">
                <div className="mr-6">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <div className="flex items-center">
                    <button 
                      onClick={decreaseQuantity}
                      className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-10 w-10 rounded-l cursor-pointer"
                    >
                      -
                    </button>
                    <input 
                      type="number"
                      id="quantity"
                      value={quantity}
                      readOnly
                      className="h-10 w-16 border border-gray-300 text-center text-gray-700"
                    />
                    <button 
                      onClick={increaseQuantity}
                      className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-300 h-10 w-10 rounded-r cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <button 
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center"
                  >
                    <ShoppingCart size={20} className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            
            {/* Wish List and Share Buttons */}
            <div className="flex space-x-4 mb-8">
              <button className="flex items-center text-gray-700 hover:text-blue-900 transition-colors">
                <Heart size={20} className="mr-1" />
                <span>Add to Wishlist</span>
              </button>
              <button className="flex items-center text-gray-700 hover:text-blue-900 transition-colors">
                <Share2 size={20} className="mr-1" />
                <span>Share</span>
              </button>
            </div>
            
            {/* Shipping and Returns */}
            <div className="bg-gray-50 p-4 rounded-md mb-8">
              <div className="flex items-start space-x-3 mb-3">
                <Truck size={20} className="text-blue-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Free Shipping</p>
                  <p className="text-sm text-gray-600">Orders over $50 qualify for free shipping</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 mb-3">
                <ShieldCheck size={20} className="text-blue-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Secure Payment</p>
                  <p className="text-sm text-gray-600">Your payment information is processed securely</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <RotateCcw size={20} className="text-blue-900 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">30-Day Returns</p>
                  <p className="text-sm text-gray-600">Return or exchange items within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'description' 
                    ? 'border-blue-900 text-blue-900' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'specifications' 
                    ? 'border-blue-900 text-blue-900' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'reviews' 
                    ? 'border-blue-900 text-blue-900' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Reviews
              </button>
            </div>
          </div>
          
          <div className="py-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700">
                  {product.description}
                </p>
                {/* Add more detailed description here */}
                <p className="text-gray-700 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
                  Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam 
                  nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl 
                  aliquam nisl, vel aliquam nisl nisl sit amet nisl.
                </p>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="border-t border-gray-200">
                  <dl>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <div key={key} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                        <dt className="text-sm font-medium text-gray-500">{key}</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Customer Reviews</h3>
                  <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
                    Write a Review
                  </button>
                </div>
                
                <div className="space-y-6">
                  {/* Sample reviews */}
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-2">
                      <div>
                        <span className="font-medium text-gray-900">John Doe</span>
                        <span className="text-gray-500 text-sm ml-2">Verified Purchase</span>
                      </div>
                      <span className="text-sm text-gray-500">2 weeks ago</span>
                    </div>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < 5 ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <h4 className="font-medium mb-2">Excellent product!</h4>
                    <p className="text-gray-700">
                      This product exceeded my expectations. The quality is excellent and it works perfectly.
                      I would definitely recommend it to anyone looking for a reliable device.
                    </p>
                  </div>
                  
                  <div className="border-b border-gray-200 pb-6">
                    <div className="flex justify-between mb-2">
                      <div>
                        <span className="font-medium text-gray-900">Jane Smith</span>
                        <span className="text-gray-500 text-sm ml-2">Verified Purchase</span>
                      </div>
                      <span className="text-sm text-gray-500">1 month ago</span>
                    </div>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < 4 ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <h4 className="font-medium mb-2">Great value for money</h4>
                    <p className="text-gray-700">
                      I'm very satisfied with this purchase. The product is well-made and offers great features
                      for its price point. Shipping was fast and the packaging was secure.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
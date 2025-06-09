import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X, Heart, User } from 'lucide-react';
import { categories } from '../../data/categories';
import Cart from '../ui/Cart';
import { useCartStore } from '../../store/cartStore';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useCartStore(state => state.items);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-gray-900">
                TechShop
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="font-medium text-gray-700 hover:text-blue-900 transition-colors">
                Home
              </a>
              {categories.map(category => (
                <a 
                  key={category.id}
                  href={`/category/${category.slug}`} 
                  className="font-medium text-gray-700 hover:text-blue-900 transition-colors"
                >
                  {category.name}
                </a>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-900 transition-colors">
                <Search size={20} />
              </button>
              <button className="text-gray-700 hover:text-blue-900 transition-colors hidden md:block">
                <Heart size={20} />
              </button>
              <button className="text-gray-700 hover:text-blue-900 transition-colors hidden md:block">
                <User size={20} />
              </button>
              <button 
                className="text-gray-700 hover:text-blue-900 transition-colors relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart size={20} />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 md:hidden"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mt-2 animate-fadeIn">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="/"
                  className="font-medium text-gray-700 hover:text-blue-900 transition-colors py-2 border-b border-gray-100"
                >
                  Home
                </a>
                {categories.map(category => (
                  <a 
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="font-medium text-gray-700 hover:text-blue-900 transition-colors py-2 border-b border-gray-100"
                  >
                    {category.name}
                  </a>
                ))}
                <div className="flex space-x-4 pt-2">
                  <button className="flex items-center space-x-2 text-gray-700">
                    <Heart size={18} />
                    <span>Wishlist</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-700">
                    <User size={18} />
                    <span>Account</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
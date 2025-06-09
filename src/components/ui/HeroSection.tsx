import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-teal-700 via-indigo-800 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Empower Your World with <span className="text-yellow-300">Tech Brilliance</span>
            </h1>
            <p className="text-lg mb-8 text-gray-200 max-w-lg">
              Discover cutting-edge electronics, smart home gadgets, and next-gen accessories—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/products"
                className="bg-gradient-to-r from-yellow-300 to-orange-500 text-blue-900 px-6 py-3 rounded-md font-semibold shadow-md hover:from-orange-400 hover:to-pink-500 hover:text-white transition-all"
              >
                Shop Now
              </a>
              <a
                href="/deals"
                className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-indigo-900 transition-all flex items-center justify-center"
              >
                View Deals <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-slideIn">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Latest Electronics"
                className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-4 shadow-xl">
                <p className="text-lg font-bold text-white">🔥 New Arrivals</p>
                <p className="text-sm text-gray-100">Enjoy up to 30% Off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

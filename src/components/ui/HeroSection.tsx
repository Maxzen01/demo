import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const images = [
  'https://wallpapercave.com/wp/wp9161196.jpg',
  'https://wallpapercave.com/wp/wp9814292.jpg',
  'https://wallpapercave.com/wp/wp4847409.jpg',
];

const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background image slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-white text-center">
        <div className="max-w-2xl animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Empower Your World with <span className="text-yellow-300">Tech Brilliance</span>
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            Discover cutting-edge electronics, smart home gadgets, and next-gen accessories—all in one place.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/mobile-accessories"
              className="bg-gradient-to-r from-yellow-300 to-orange-500 text-blue-900 px-6 py-3 rounded-md font-semibold shadow-md hover:from-orange-400 hover:to-pink-500 hover:text-white transition-all"
            >
              Shop Now
            </a>
            {/* <a
              href="/deals"
              className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-indigo-900 transition-all flex items-center justify-center"
            >
              View Deals <ArrowRight size={18} className="ml-2" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

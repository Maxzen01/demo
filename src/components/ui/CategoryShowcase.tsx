import React from 'react';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/categories';
import CategoryCard from './CategoryCard';

const CategoryShowcase: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Category</h2>
            <p className="text-gray-600">Browse our wide range of products by category</p>
          </div>
          <a 
            href="/categories" 
            className="mt-4 md:mt-0 inline-flex items-center text-blue-900 hover:text-blue-700 transition-colors font-medium"
          >
            View All Categories <ArrowRight size={18} className="ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;
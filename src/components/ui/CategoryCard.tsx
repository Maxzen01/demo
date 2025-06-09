import React from 'react';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <a 
      href={`/category/${category.slug}`}
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="aspect-w-16 aspect-h-9 w-full">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{category.name}</h3>
        <p className="text-gray-200 text-sm md:text-base">{category.description}</p>
        <div className="mt-4 inline-block">
          <span className="bg-white text-blue-900 px-4 py-2 rounded-full text-sm font-medium transition-colors group-hover:bg-blue-900 group-hover:text-white">
            Explore
          </span>
        </div>
      </div>
    </a>
  );
};

export default CategoryCard;
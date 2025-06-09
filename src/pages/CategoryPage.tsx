import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import ProductGrid from '../components/ui/ProductGrid';
import { getProductsByCategory } from '../data/products';
import { categories } from '../data/categories';
import { Product } from '../types';
import { Filter, SortDesc as SortDescending, ChevronDown } from 'lucide-react';

interface CategoryPageProps {
  slug: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ slug }) => {
  const category = categories.find(cat => cat.slug === slug);
  const [products, setProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    if (category) {
      let categoryProducts = getProductsByCategory(category.id);

      // Apply sorting
      switch (sortOption) {
        case 'price-low':
          categoryProducts = [...categoryProducts].sort((a, b) =>
            (a.discountPrice || a.price) - (b.discountPrice || b.price)
          );
          break;
        case 'price-high':
          categoryProducts = [...categoryProducts].sort((a, b) =>
            (b.discountPrice || b.price) - (a.discountPrice || a.price)
          );
          break;
        case 'rating':
          categoryProducts = [...categoryProducts].sort((a, b) => b.rating - a.rating);
          break;
        default:
          // featured - no special sorting
          break;
      }

      setProducts(categoryProducts);
      setCurrentPage(1); // reset to page 1 when category or sort changes
    }
  }, [category, sortOption]);

  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <p>Category not found.</p>
        </div>
      </Layout>
    );
  }

  // Pagination calculation
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Categories', href: '/categories' },
            { label: category.name }
          ]}
        />

        <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
            <p className="text-gray-600 mt-2">{category.description}</p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            {/* Sort Options */}
            <div className="relative">
              <div className="flex items-center space-x-2">
                <SortDescending size={18} className="text-gray-500" />
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Best Rating</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            {/* Filter Button (Mobile) */}
            <button
              className="md:hidden flex items-center space-x-2 bg-white border border-gray-300 rounded-md px-4 py-2"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={18} />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters (Desktop & Mobile toggle) */}
          <div className={`md:block ${isFilterOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-medium text-lg mb-4">Filters</h3>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-900" />
                    <span className="ml-2 text-gray-700">Under $50</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-900" />
                    <span className="ml-2 text-gray-700">$50 - $100</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-900" />
                    <span className="ml-2 text-gray-700">$100 - $500</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-900" />
                    <span className="ml-2 text-gray-700">$500+</span>
                  </label>
                </div>
              </div>

              {/* Ratings */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-900" />
                      <span className="ml-2 flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                        <span className="ml-1 text-gray-700">& Up</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <h4 className="font-medium mb-2">Availability</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-900" />
                    <span className="ml-2 text-gray-700">In Stock</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-900" />
                    <span className="ml-2 text-gray-700">Out of Stock</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products + Pagination */}
          <div className="md:col-span-3">
            <ProductGrid products={currentProducts} />

            {/* Pagination Controls */}
            <div className="flex justify-center mt-8 space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  currentPage === 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    currentPage === i + 1
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  currentPage === totalPages
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;

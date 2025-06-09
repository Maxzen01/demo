import React from 'react';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetail from './pages/ProductDetail';

function App() {
  // Simple router implementation
  const path = window.location.pathname;
  
  // Match category pages
  const categoryMatch = path.match(/^\/category\/(.+)$/);
  if (categoryMatch) {
    return <CategoryPage slug={categoryMatch[1]} />;
  }
  
  // Match product pages
  const productMatch = path.match(/^\/product\/(.+)$/);
  if (productMatch) {
    return <ProductDetail slug={productMatch[1]} />;
  }
  
  // Default to home page
  return <Home />;
}

export default App;
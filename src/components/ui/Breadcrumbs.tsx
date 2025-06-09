import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex py-4\" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a 
            href="/" 
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-900"
          >
            <Home size={16} className="mr-2" />
            Home
          </a>
        </li>
        
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight size={16} className="text-gray-400" />
              {item.href ? (
                <a 
                  href={item.href}
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-900 md:ml-2"
                >
                  {item.label}
                </a>
              ) : (
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                  {item.label}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
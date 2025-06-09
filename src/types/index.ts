export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  rating: number;
  images: string[];
  specifications: Record<string, string>;
  stock: number;
  categoryId: string;
  slug: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}
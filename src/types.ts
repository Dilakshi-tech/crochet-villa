export type ProductTag = 'New' | 'Popular' | 'Customizable' | 'Limited';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number | string;
  category: 'Dresses' | 'Amigurumi' | 'Baby' | 'Bags' | 'Flowers';
  image: string;
  tags?: ProductTag[];
  isCustomizable?: boolean;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  image?: string;
  date: string;
}

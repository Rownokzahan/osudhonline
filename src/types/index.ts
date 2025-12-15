export interface Product1 {
  id: string;
  name: string;
  image: string;
  price: string;
  originalPrice: string;
  discount: string;
}

export type Id = number | string;

export interface Product {
  id: Id;
  name: string;
  slug: string;
  category: string;
  image: string;
  manufacturer: string;
  currentPrice: number;
  originalPrice: number;
  discountPercentage: number;
}

export interface CartItem {
  quantity: number;
  product: Product;
}

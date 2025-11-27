export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  originalPrice: string;
  discount: string;
}

export interface CartItem {
  quantity: number;
  product: Product;
}
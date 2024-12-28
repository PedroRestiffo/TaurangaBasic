export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  sizes: string[];
}

export interface CartItem extends Omit<Product, 'images'> {
  quantity: number;
  selectedSize: string;
  image: string;
}
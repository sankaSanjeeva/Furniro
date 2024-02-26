export type Product = {
  code: string;
  name: string;
  price: number;
  image: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export interface CartState {
  items: CartItem[];
}

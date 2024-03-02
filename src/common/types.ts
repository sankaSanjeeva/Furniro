export type Product = {
  code: string;
  name: string;
  price: number;
  image: string;
  isNew?: true;
  discount?: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export interface CartState {
  items: CartItem[];
}

export type PaginationResponse<T> = {
  data: T[];
  pagination: {
    totalRecords: number;
    currentPage: number;
    totalPages: number;
    nextPage: number | null;
    prevPage: number | null;
  };
};

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

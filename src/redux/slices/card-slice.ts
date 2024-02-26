import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'sonner';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartState, Product } from '@/common/types';

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartItem>) => {
      const index = state.items.findIndex(
        ({ product }) => product.code === action.payload.product.code
      );

      if (index === -1) {
        state.items.push(action.payload);
        toast(`"${action.payload.product.name}" added to the cart`);
      } else {
        state.items[index].quantity += action.payload.quantity;
        toast(
          `Quantity of "${action.payload.product.name}" is increased by ${action.payload.quantity}`
        );
      }
    },

    removeProduct: (
      state,
      action: PayloadAction<Pick<Product, 'code' | 'name'>>
    ) => {
      state.items = state.items.filter(
        ({ product }) => product.code !== action.payload.code
      );
      toast(`"${action.payload.name}" removed from the cart`);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;

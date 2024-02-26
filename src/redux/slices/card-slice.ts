import { createSlice } from '@reduxjs/toolkit';
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
      } else {
        state.items[index].quantity += action.payload.quantity;
      }
    },

    removeProduct: (state, action: PayloadAction<Product['code']>) => {
      state.items = state.items.filter(
        ({ product }) => product.code !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;

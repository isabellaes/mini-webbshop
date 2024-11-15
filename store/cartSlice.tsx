import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, CartItem } from "../utils/types";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.product.id
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    increaseQuantity: (state, action: PayloadAction<{ productId: string }>) => {
      const itemToUpdate = state.items.find(
        (item) => item.product.id === action.payload.productId
      );

      if (itemToUpdate) {
        itemToUpdate.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<{ productId: string }>) => {
      const itemToUpdate = state.items.find(
        (item) => item.product.id === action.payload.productId
      );

      if (itemToUpdate) {
        itemToUpdate.quantity--;
        if (itemToUpdate.quantity === 0) {
          state.items = state.items.filter(
            (item) => item.product.id !== action.payload.productId
          );
        }
      }
    },
    removeItem(state, action: PayloadAction<{ productId: string }>) {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.productId
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.product.id !== action.payload.productId
          );
        }
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      // Sprawdz czy element istnieje w koszyku
      const item = state.items.find((i) => i.id === action.payload.id);

      if (item) {
        // jesli tak
        item.quantity++; // zwieksz ilosc o jeden
      } else {
        // jesli nie
        state.items.push(action.payload); // dodaj element do koszyka
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      const itemsWithoutGivenItem = state.items.filter(
        (item) => item.id !== id
      );
      state.items = itemsWithoutGivenItem;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export const selectItemsQuantity = (state: RootState) => {
  // TODO 4: Zmodyfikuj selector, tak aby zliczał prawidłowo elementy
  return state.cart.items.length;
};

export const selectItems = (state: RootState) => {
  return state.cart.items;
};

// Sposób 2 ( Ten lepszy )
export const cartReducer = cartSlice.reducer;

// Sposób 1
// export default cartSlice.reducer;

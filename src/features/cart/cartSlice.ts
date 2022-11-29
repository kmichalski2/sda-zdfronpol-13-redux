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

const remove = (items: Item[], id: string) => {
  items = items.filter((i) => i.id !== id);
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
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      const item = state.items.find((i) => i.id === id);

      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      const item = state.items.find((i) => i.id === id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.items = state.items.filter((i) => i.id !== id);
        }
      }
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export const selectItemsQuantity = (state: RootState) => {
  // TODO 4: Zmodyfikuj selector, tak aby zliczał prawidłowo elementy
  // let total = 0;

  // Junior Level
  // for (let i = 0; i < state.cart.items.length; i++) {
  //   total += state.cart.items[i].quantity;
  // }

  // Junior+ Level
  // state.cart.items.forEach((item) => {
  //   total += item.quantity;
  // });

  // Medium level

  // [ { qunatity: 2 }, { qunatity: 3 }]

  const total = state.cart.items.reduce((acc, item) => {
    acc += item.quantity;
    return acc; // (1) acc = 0 => 2; (2) acc = 2 => 2 + 3 = 5
  }, 0); // acc = 0;

  return total;
};

export const selectTotal = (state: RootState) => {
  let total = 0;

  state.cart.items.forEach((item) => {
    total += item.price * item.quantity;
  });

  return total;
};

export const selectItems = (state: RootState) => {
  return state.cart.items;
};

// Sposób 2 ( Ten lepszy )
export const cartReducer = cartSlice.reducer;

// Sposób 1
// export default cartSlice.reducer;

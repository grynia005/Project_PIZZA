import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);

      if (item) {
        item.qty = item.qty + 1;
        item.price = item.price + payload.unitPrice;
      } else {
        state.items.push({ ...payload, qty: 1, price: payload.unitPrice });
      }
    },
    deleteFromCart: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload.id);
    },
    decrementQtyPizza: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);

      if (item.qty === 1) {
        return;
      } else {
        item.qty = item.qty - 1;
        item.price = item.price - payload.unitPrice;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

const { addToCart, deleteFromCart, decrementQtyPizza, clearCart } =
  cartSlice.actions;
const cartReducer = cartSlice.reducer;
export { addToCart, deleteFromCart, decrementQtyPizza, clearCart, cartReducer };

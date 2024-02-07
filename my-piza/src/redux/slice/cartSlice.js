import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  priority: false,
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
    totalPrice: (state) => {
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price,
        0
      );
    },
    selectPriority: (state, { payload }) => {
      if (payload) {
        state.totalPrice = state.totalPrice + 8;
      } else {
        state.totalPrice = state.totalPrice - 8;
      }
    },
  },
});

const {
  addToCart,
  deleteFromCart,
  decrementQtyPizza,
  clearCart,
  totalPrice,
  selectPriority,
} = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export {
  addToCart,
  deleteFromCart,
  decrementQtyPizza,
  clearCart,
  totalPrice,
  selectPriority,
  cartReducer,
};

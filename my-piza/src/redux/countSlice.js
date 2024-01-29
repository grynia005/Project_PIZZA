import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state, action) => {
      return state + 1;
    },
    decrement: (state, action) => {
      if (state === 0) {
        return 0;
      }
      return state - 1;
    },
    defaultValue: (state, action) => {
      return 0;
    },
  },
});

const { increment, decrement, defaultValue } = countSlice.actions;
const countReducer = countSlice.reducer;

export { increment, decrement, defaultValue, countReducer };

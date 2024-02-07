import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const menuUrl = "https://react-fast-pizza-api.onrender.com/api/menu";
const initialState = {
  items: [],
  isLouding: false,
  isError: false,
};

const getMenuItems = createAsyncThunk("menu/getMenuItems", async () => {
  try {
    const res = await fetch(menuUrl);
    if (!res.ok) {
      throw new Error("Сталася страшна помилка серверу");
    }
    const { data } = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }

 
});

const menuSlice = createSlice({
  name: "pizza",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getMenuItems.pending, (state, action) => {
      state.isError = false;
      state.isLouding = true;
    });
    builder.addCase(getMenuItems.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.isLouding = false;
    });
    builder.addCase(getMenuItems.rejected, (state, action) => {
      state.isLouding = false;
      state.isError = true;
    });
  },
});

const menuReducer = menuSlice.reducer;
export { menuReducer, getMenuItems };

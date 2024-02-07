import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
      state.login = payload;
    },
  },
});

const { loginUser } = userSlice.actions;
const userReducer = userSlice.reducer;

export { loginUser, userReducer };

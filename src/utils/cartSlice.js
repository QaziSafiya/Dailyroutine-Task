import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    message: false,
  },
  reducers: {
    togglemessage: (state, action) => {
      state.message = !state.message;
    },
  },
});
export const { togglemessage } = cartSlice.actions;
export default cartSlice.reducer;

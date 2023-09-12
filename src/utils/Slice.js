import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "heart",
  initialState: {
    like: [],
  },

  reducers: {
    addlikes: (state, action) => {
      state.like.push(action.payload);
    },

    removelikes: (state) => {
      state.like.pop();
    },
  },
});
export const { addlikes, removelikes } = Slice.actions;
export default Slice.reducer;

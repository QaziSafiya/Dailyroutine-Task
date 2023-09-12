import { createSlice } from "@reduxjs/toolkit";

const addtodo = createSlice({
  name: "todo",
  initialState: {
    items: [],
  },
  reducers: {
    additems: (state, action) => {
      state.items.push({ value: action.payload });
    },
    deleteItem: (state, action) => {
      const indexToDelete = action.payload;
      state.items.splice(indexToDelete, 1);
    },
    clearItem: (state) => {
      state.items.length = 0;
    },
  },
});

export const { additems, deleteItem, clearItem } = addtodo.actions;
export default addtodo.reducer;

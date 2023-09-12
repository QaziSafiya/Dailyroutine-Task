//first configure the store

import { configureStore } from "@reduxjs/toolkit";
import heartreducer from "./Slice";
import cartSlice from "./cartSlice";
import addtodo from "./addtodo";
const appStore = configureStore({
  reducer: {
    heart: heartreducer,
    cart: cartSlice,
    todo: addtodo,
  },
});
export default appStore;

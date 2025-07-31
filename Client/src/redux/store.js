import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice.js";
import cartSlice from "./slice/cartSlice.js";
import productSlice from "./slice/productSlice.js";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    product: productSlice,
  },
});

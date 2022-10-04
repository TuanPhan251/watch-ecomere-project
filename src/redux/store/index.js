import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../reducers/cart.reducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;

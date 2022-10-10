import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import cartReducer from "../reducers/cart.reducer";
import productReducer from "../reducers/products.reducer";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;

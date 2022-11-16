import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas";

import cartReducer from "../reducers/cart.reducer";
import productReducer from "../reducers/products.reducer";
import categoryReducer from "../reducers/category.reducer";
import userReducer from "../reducers/user.reducer";
import commentsReducer from "../reducers/comments.reducer";
import wishlistReducer from "../reducers/wishlist.reducer";
import locationReducer from "../reducers/location.reducer";
import discountReducer from "../reducers/discount.reducer";
import orderReducer from "../reducers/order.reducer";
import blogsReducer from "../reducers/blogs.reducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    category: categoryReducer,
    user: userReducer,
    comments: commentsReducer,
    location: locationReducer,
    wishlist: wishlistReducer,
    discount: discountReducer,
    order: orderReducer,
    blog: blogsReducer,
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

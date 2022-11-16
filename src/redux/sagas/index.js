import { fork } from "redux-saga/effects";

import productSaga from "./products.saga";
import categoriesSaga from "./categories.saga";
import commentsSaga from "./comments.saga";
import userSaga from "./user.saga";
import locationSaga from "./location.saga";
import wishlistSaga from "./wishlist.saga";
import discountSaga from "./discount.saga";
import orderSaga from "./order.saga";
import blogSaga from "./blogs.saga";

export default function* rootSaga() {
  yield fork(productSaga);
  yield fork(categoriesSaga);
  yield fork(commentsSaga);
  yield fork(userSaga);
  yield fork(locationSaga);
  yield fork(wishlistSaga);
  yield fork(discountSaga);
  yield fork(orderSaga);
  yield fork(blogSaga);
}

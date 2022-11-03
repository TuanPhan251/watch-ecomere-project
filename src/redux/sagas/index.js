import { fork } from "redux-saga/effects";

import productSaga from "./products.saga";
import categoriesSaga from "./categories.saga";
import commentsSaga from "./comments.saga";
import userSaga from "./user.saga";
import wishlistSaga from "./wishlist.saga";

export default function* rootSaga() {
  yield fork(productSaga);
  yield fork(categoriesSaga);
  yield fork(commentsSaga);
  yield fork(userSaga);
  yield fork(wishlistSaga);
}

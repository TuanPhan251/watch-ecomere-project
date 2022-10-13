import { fork } from "redux-saga/effects";

import productSaga from "./products.saga";
import categoriesSaga from "./categories.saga";
import userSaga from "./user.saga";

export default function* rootSaga() {
  yield fork(productSaga);
  yield fork(categoriesSaga);
  yield fork(userSaga);
}

import { fork } from "redux-saga/effects";

import productSaga from "./products.saga";
import categoriesSaga from "./categories.saga";

export default function* rootSaga() {
  yield fork(productSaga);
  yield fork(categoriesSaga);
}

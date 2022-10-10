import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

import { REQUEST, SUCCESS, FAIL, CATEGORY_ACTION } from "../CONSTANTS/";

function* getCategoriesListSaga() {
  try {
    const result = yield axios.get("http://localhost:4000/categories");
    yield put({
      type: `${SUCCESS(CATEGORY_ACTION.GET_CATEGORY_LIST)}`,
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: `${FAIL(CATEGORY_ACTION.GET_CATEGORY_LIST)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

export default function* categoriesSaga() {
  yield takeEvery(
    REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST),
    getCategoriesListSaga
  );
}

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

function* createCategorySaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("http://localhost:4000/categories", data);
    yield put({
      type: `${SUCCESS(CATEGORY_ACTION.CREATE_NEW_CATEGORY)}`,
      payload: {
        data: result.data,
      },
    });
    yield callback.resetField();
    yield callback.closeModal();
    yield put({
      type: `${REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST)}`,
    });
  } catch (e) {
    yield put({
      type: `${FAIL(CATEGORY_ACTION.CREATE_NEW_CATEGORY)}`,
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
  yield takeEvery(
    REQUEST(CATEGORY_ACTION.CREATE_NEW_CATEGORY),
    createCategorySaga
  );
}

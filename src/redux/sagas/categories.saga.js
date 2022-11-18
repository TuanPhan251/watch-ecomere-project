import { takeEvery, put, debounce } from "redux-saga/effects";
import axios from "axios";

import { REQUEST, SUCCESS, FAIL, CATEGORY_ACTION } from "../CONSTANTS/";

function* getCategoriesListSaga(action) {
  try {
    const { params } = action.payload;
    const result = yield axios.get("http://localhost:4000/categories", {
      params: {
        _page: params.page,
        _limit: params.limit,
        ...(params.keyword && {
          q: params.keyword,
        }),
      },
    });
    yield put({
      type: `${SUCCESS(CATEGORY_ACTION.GET_CATEGORY_LIST)}`,
      payload: {
        data: result.data,
        meta: {
          total: parseInt(result.headers["x-total-count"]),
          page: params.page,
          limit: params.limit,
        },
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

function* getCategoryDetailSaga(action) {
  try {
    const { id, callback } = action.payload;
    const result = yield axios.get(`http://localhost:4000/categories/${id}`);
    yield put({
      type: `${SUCCESS(CATEGORY_ACTION.GET_CATEGORY_DETAIL)}`,
      payload: {
        data: result.data,
      },
    });
    yield callback.showModal(true);
    yield callback.setFieldValue(result.data.name);
  } catch (e) {
    yield put({
      type: `${FAIL(CATEGORY_ACTION.GET_CATEGORY_DETAIL)}`,
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
    yield callback.getCategoryList();
    yield callback.closeModal();
  } catch (e) {
    yield put({
      type: `${FAIL(CATEGORY_ACTION.CREATE_NEW_CATEGORY)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* updateCategorySaga(action) {
  try {
    const { id, data, callback } = action.payload;
    const result = yield axios.patch(
      `http://localhost:4000/categories/${id}`,
      data
    );
    yield put({
      type: `${SUCCESS(CATEGORY_ACTION.UPDATE_CATEGORY)}`,
      payload: {
        data: result.data,
      },
    });
    yield callback.resetField();
    yield callback.getCategoryList();
    yield callback.closeModal();
  } catch (e) {
    yield put({
      type: `${FAIL(CATEGORY_ACTION.UPDATE_CATEGORY)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

export default function* categoriesSaga() {
  yield debounce(
    500,
    REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST),
    getCategoriesListSaga
  );
  yield takeEvery(
    REQUEST(CATEGORY_ACTION.GET_CATEGORY_DETAIL),
    getCategoryDetailSaga
  );
  yield takeEvery(
    REQUEST(CATEGORY_ACTION.CREATE_NEW_CATEGORY),
    createCategorySaga
  );
  yield takeEvery(REQUEST(CATEGORY_ACTION.UPDATE_CATEGORY), updateCategorySaga);
}

import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

import { REQUEST, SUCCESS, FAIL, COMMENTS_ACTION } from "../CONSTANTS/";

function* getCommentListSaga(action) {
  try {
    const { productId } = action.payload;
    const result = yield axios.get("http://localhost:4000/comments", {
      params: {
        productId: productId,
        _expand: "user",
      },
    });
    yield put({
      type: `${SUCCESS(COMMENTS_ACTION.GET_COMMENTS_LIST)}`,
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: `${FAIL(COMMENTS_ACTION.GET_COMMENTS_LIST)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* createCommentSaga(action) {
  try {
    const { data, productId } = action.payload;
    const result = yield axios.post("http://localhost:4000/comments", data);
    yield put({
      type: `${SUCCESS(COMMENTS_ACTION.CREATE_COMMENT)}`,
      payload: {
        data: result.data,
      },
    });
    yield put({
      type: `${REQUEST(COMMENTS_ACTION.GET_COMMENTS_LIST)}`,
      payload: {
        productId: productId,
      },
    });
  } catch (e) {
    yield put({
      type: `${FAIL(COMMENTS_ACTION.CREATE_COMMENT)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

export default function* commentsSaga() {
  yield takeEvery(
    REQUEST(COMMENTS_ACTION.GET_COMMENTS_LIST),
    getCommentListSaga
  );

  yield takeEvery(REQUEST(COMMENTS_ACTION.CREATE_COMMENT), createCommentSaga);
}

import { takeEvery, put, debounce } from "redux-saga/effects";
import axios from "axios";

import { REQUEST, SUCCESS, FAIL, BLOG_ACTION } from "../CONSTANTS/";

function* getBlogListSaga(action) {
  try {
    const { params, more } = action.payload;
    const result = yield axios.get("http://localhost:4000/blogs", {
      params: {
        _page: params.page,
        _limit: params.limit,
        ...(params.keyword && {
          q: params.keyword,
        }),
        ...(params.sort && {
          _sort: params.sort.split(".")[1],
          _order: params.sort.split(".")[0],
        }),
      },
    });
    yield put({
      type: `${SUCCESS(BLOG_ACTION.GET_BLOG_LIST)}`,
      payload: {
        data: result.data,
        meta: {
          total: parseInt(result.headers["x-total-count"]),
          page: params.page,
          limit: params.limit,
        },
        more: more,
      },
    });
  } catch (e) {
    yield put({
      type: `${FAIL(BLOG_ACTION.GET_BLOG_LIST)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* getBlogDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`http://localhost:4000/blogs/${id}`);
    yield put({
      type: `${SUCCESS(BLOG_ACTION.GET_BLOG_DETAIL)}`,
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: `${FAIL(BLOG_ACTION.GET_BLOG_DETAIL)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* createBlogSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("http://localhost:4000/blogs", data);
    yield put({
      type: `${SUCCESS(BLOG_ACTION.CREATE_BLOG)}`,
      payload: {
        data: result.data,
      },
    });
    yield callback.goToList();
  } catch (e) {
    yield put({
      type: `${FAIL(BLOG_ACTION.CREATE_BLOG)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* updateBlogSaga(action) {
  try {
    const { id, data, callback } = action.payload;
    const result = yield axios.patch(`http://localhost:4000/blogs/${id}`, data);
    yield put({
      type: `${SUCCESS(BLOG_ACTION.UPDATE_BLOG)}`,
      payload: {
        data: result.data,
      },
    });
    yield callback.goToList();
  } catch (e) {
    yield put({
      type: `${FAIL(BLOG_ACTION.UPDATE_BLOG)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* deleteBlogSaga(action) {
  try {
    const { id, callback } = action.payload;
    const result = yield axios.delete(`http://localhost:4000/blogs/${id}`);
    yield put({
      type: `${SUCCESS(BLOG_ACTION.DELETE_BLOG)}`,
      payload: {
        data: result.data,
      },
    });
    yield callback.hideModal();
    yield callback.getBlogList();
  } catch (e) {
    yield put({
      type: `${FAIL(BLOG_ACTION.DELETE_BLOG)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

export default function* blogSaga() {
  yield debounce(500, REQUEST(BLOG_ACTION.GET_BLOG_LIST), getBlogListSaga);
  yield takeEvery(REQUEST(BLOG_ACTION.GET_BLOG_DETAIL), getBlogDetailSaga);
  yield takeEvery(REQUEST(BLOG_ACTION.CREATE_BLOG), createBlogSaga);
  yield takeEvery(REQUEST(BLOG_ACTION.UPDATE_BLOG), updateBlogSaga);
  yield takeEvery(REQUEST(BLOG_ACTION.DELETE_BLOG), deleteBlogSaga);
}

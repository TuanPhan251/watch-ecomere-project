import { takeEvery, put, debounce } from "redux-saga/effects";
import axios from "axios";

import { USER_ACTION, REQUEST, SUCCESS, FAIL } from "./../CONSTANTS";

function* loginSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("http://localhost:4000/login", data);
    yield localStorage.setItem("accessToken", result.data.accessToken);
    yield put({
      type: SUCCESS(USER_ACTION.LOGIN),
      payload: {
        data: result.data.user,
      },
    });
    if (result.data?.user?.role === "admin") {
      callback.goToDashBoard();
    } else {
      callback.goToHomePage();
    }
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.LOGIN),
      payload: {
        error: "Lỗi đăng nhập! Vui lòng kiểm tra tài khoản và mật khẩu!",
      },
    });
  }
}
function* registerSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("http://localhost:4000/register", {
      ...data,
      orderQuantity: 0,
      totalSpend: 0,
    });
    yield put({
      type: SUCCESS(USER_ACTION.REGISTER),
      payload: {
        data: result.data,
      },
    });
    yield callback.goToLogIn();
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.REGISTER),
      payload: {
        error:
          e.response.data === "Email already exists"
            ? "Email đã tồn tại!"
            : e.response.data,
      },
    });
  }
}
function* getUserInfoSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`http://localhost:4000/users/${id}`);
    yield put({
      type: SUCCESS(USER_ACTION.GET_USER_INFO),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.GET_USER_INFO),
      payload: {
        error:
          e.response.data === "Email already exists"
            ? "Đã có lỗi xảy ra"
            : e.response.data,
      },
    });
  }
}

function* getUserList(action) {
  try {
    const { params } = action.payload;
    const result = yield axios.get(`http://localhost:4000/users`, {
      params: {
        _page: params.page,
        _limit: params.limit,
        _embed: "orders",
        ...(params.keyword && {
          q: params.keyword,
        }),
        ...(params.role && {
          role: params.role,
        }),
        ...(params.orderSort && {
          _sort: "orderQuantity",
          _order: params.orderSort,
        }),
        ...(params.spendSort && {
          _sort: "totalSpend",
          _order: params.spendSort,
        }),
        ...(params.sort && {
          _sort: params.sort.split(".")[1],
          _order: params.sort.split(".")[0],
        }),
      },
    });
    yield put({
      type: SUCCESS(USER_ACTION.GET_USER_LIST),
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
      type: FAIL(USER_ACTION.GET_USER_LIST),
      payload: {
        error: "Đã có lỗi xảy ra",
      },
    });
  }
}

function* getUserDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`http://localhost:4000/users/${id}`);
    yield put({
      type: SUCCESS(USER_ACTION.GET_USER_DETAIL),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.GET_USER_DETAIL),
      payload: "Đã có lỗi xảy ra",
    });
  }
}

function* updateUserInfoSaga(action) {
  try {
    const { id, values, callback } = action.payload;
    const result = yield axios.patch(
      `http://localhost:4000/users/${id}`,
      values
    );
    yield put({
      type: SUCCESS(USER_ACTION.UPDATE_USER_INFO),
      payload: {
        data: result.data,
      },
    });
    if (callback.openMessage) yield callback.openMessage();
    if (callback.getUserInfo) yield callback.getUserInfo();
    if (callback.closeModal) yield callback.closeModal();
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.UPDATE_USER_INFO),
      payload: "Đã có lỗi xảy ra",
    });
  }
}

function* updateUserPasswordSaga(action) {
  try {
    const { callback, data, newPassword } = action.payload;
    const result = yield axios.post("http://localhost:4000/login", data);
    yield put({
      type: SUCCESS(USER_ACTION.UPDATE_USER_PASSWORD),
    });
    yield axios.patch(`http://localhost:4000/users/${result.data.user.id}`, {
      password: newPassword,
    });
    if (callback.resetFields) yield callback.resetFields();
    if (callback.showMessage) yield callback.showMessage();
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.UPDATE_USER_PASSWORD),
      payload: "Mật khẩu cũ không chính xác",
    });
  }
}

export default function* userSaga() {
  yield takeEvery(REQUEST(USER_ACTION.LOGIN), loginSaga);
  yield takeEvery(REQUEST(USER_ACTION.REGISTER), registerSaga);
  yield takeEvery(REQUEST(USER_ACTION.GET_USER_INFO), getUserInfoSaga);
  yield debounce(500, REQUEST(USER_ACTION.GET_USER_LIST), getUserList);
  yield takeEvery(REQUEST(USER_ACTION.GET_USER_DETAIL), getUserDetailSaga);
  yield takeEvery(REQUEST(USER_ACTION.UPDATE_USER_INFO), updateUserInfoSaga);
  yield takeEvery(
    REQUEST(USER_ACTION.UPDATE_USER_PASSWORD),
    updateUserPasswordSaga
  );
}

import { takeEvery, put } from "redux-saga/effects";
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
    const result = yield axios.post("http://localhost:4000/register", data);
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

export default function* userSaga() {
  yield takeEvery(REQUEST(USER_ACTION.LOGIN), loginSaga);
  yield takeEvery(REQUEST(USER_ACTION.REGISTER), registerSaga);
  yield takeEvery(REQUEST(USER_ACTION.GET_USER_INFO), getUserInfoSaga);
}

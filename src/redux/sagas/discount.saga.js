import { takeEvery, put, debounce } from "redux-saga/effects";
import axios from "axios";

import { REQUEST, SUCCESS, FAIL, DISCOUNT_ACTION } from "../CONSTANTS/";

function* getDiscountSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.get("http://localhost:4000/discount", {
      params: {
        name: data,
      },
    });

    yield put({
      type: `${SUCCESS(DISCOUNT_ACTION.DISCOUNT)}`,
      payload: {
        data: result.data,
      },
    });
    if (result.data.length === 0) yield callback.errorApply();
    if (result.data.length !== 0) yield callback.successApply();
  } catch (e) {
    yield put({
      type: `${FAIL(DISCOUNT_ACTION.DISCOUNT)}`,
      payload: {
        error: "Mã không hợp lệ",
      },
    });
  }
}

function* getVoucherListSaga(action) {
  try {
    const { params } = action.payload;
    const result = yield axios.get("http://localhost:4000/discount", {
      params: {
        _page: params.page,
        _limit: params.limit,
        ...(params.keyword && {
          q: params.keyword,
        }),
      },
    });
    yield put({
      type: `${SUCCESS(DISCOUNT_ACTION.GET_VOUCHER_LIST)}`,
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
      type: `${FAIL(DISCOUNT_ACTION.GET_VOUCHER_LIST)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* getVoucherDetailSaga(action) {
  try {
    const { id, callback } = action.payload;
    const result = yield axios.get(`http://localhost:4000/discount/${id}`);
    yield put({
      type: `${SUCCESS(DISCOUNT_ACTION.GET_VOUCHER_DETAIL)}`,
      payload: {
        data: result.data,
      },
    });
    yield callback.showModal(true);
    yield callback.setFieldValue(result.data.name, result.data.discount);
  } catch (e) {
    yield put({
      type: `${FAIL(DISCOUNT_ACTION.GET_VOUCHER_DETAIL)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* createVoucherSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("http://localhost:4000/discount", data);
    yield put({
      type: `${SUCCESS(DISCOUNT_ACTION.CREATE_VOUCHER)}`,
      payload: {
        data: result.data,
      },
    });
    yield callback.resetField();
    yield callback.getVoucherList();
    yield callback.closeModal();
  } catch (e) {
    yield put({
      type: `${FAIL(DISCOUNT_ACTION.CREATE_VOUCHER)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* updateVoucherSaga(action) {
  try {
    const { id, data, callback } = action.payload;
    const result = yield axios.patch(
      `http://localhost:4000/discount/${id}`,
      data
    );
    yield put({
      type: `${SUCCESS(DISCOUNT_ACTION.UPDATE_VOUCHER)}`,
      payload: {
        data: result.data,
      },
    });
    yield callback.resetField();
    yield callback.getVoucherList();
    yield callback.closeModal();
  } catch (e) {
    yield put({
      type: `${FAIL(DISCOUNT_ACTION.UPDATE_VOUCHER)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* deleteVoucherSaga(action) {
  try {
    const { id, callback } = action.payload;
    const result = yield axios.delete(`http://localhost:4000/discount/${id}`);
    yield put({
      type: `${SUCCESS(DISCOUNT_ACTION.DELETE_VOUCHER)}`,
    });
    yield callback.getVoucherList();

    yield callback.closeModal();
  } catch (e) {
    yield put({
      type: `${FAIL(DISCOUNT_ACTION.DELETE_VOUCHER)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

export default function* discountSaga() {
  yield takeEvery(REQUEST(DISCOUNT_ACTION.DISCOUNT), getDiscountSaga);
  yield debounce(
    500,
    REQUEST(DISCOUNT_ACTION.GET_VOUCHER_LIST),
    getVoucherListSaga
  );
  yield takeEvery(
    REQUEST(DISCOUNT_ACTION.GET_VOUCHER_DETAIL),
    getVoucherDetailSaga
  );
  yield takeEvery(REQUEST(DISCOUNT_ACTION.CREATE_VOUCHER), createVoucherSaga);
  yield takeEvery(REQUEST(DISCOUNT_ACTION.UPDATE_VOUCHER), updateVoucherSaga);
  yield takeEvery(REQUEST(DISCOUNT_ACTION.DELETE_VOUCHER), deleteVoucherSaga);
}

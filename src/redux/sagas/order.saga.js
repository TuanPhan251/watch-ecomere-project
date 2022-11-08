import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

import { REQUEST, SUCCESS, FAIL, ORDER_ACTION } from "../CONSTANTS/";

function* getOrderListSaga(action) {
  try {
    const { userId } = action.payload;
    const result = yield axios.get("http://localhost:4000/orders", {
      params: {
        _embed: "orderProducts",
        userId: userId,
      },
    });
    yield put({
      type: `${SUCCESS(ORDER_ACTION.GET_ORDER_LIST)}`,
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: `${FAIL(ORDER_ACTION.GET_ORDER_LIST)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* orderProductSaga(action) {
  try {
    const { products, ...orderSaga } = action.payload;
    const result = yield axios.post("http://localhost:4000/orders", orderSaga);
    for (let i = 0; i < products.length; i++) {
      yield axios.post("http://localhost:4000/orderProducts", {
        orderId: result.data.id,
        ...products[i],
      });
    }
    yield put({
      type: `${SUCCESS(ORDER_ACTION.ORDER_PRODUCT)}`,
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: `${FAIL(ORDER_ACTION.ORDER_PRODUCT)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* clearOrderListSaga(action) {
  try {
    const { id, userId, callback } = action.payload;
    const result = yield axios.delete(`http://localhost:4000/wishlists/${id}`);
    yield put({
      type: `${SUCCESS(ORDER_ACTION.CLEAR_ORDER_LIST)}`,
      payload: {
        id: id,
      },
    });

    if (callback) yield callback.getWishlists();
  } catch (e) {
    yield put({
      type: `${FAIL(ORDER_ACTION.CLEAR_ORDER_LIST)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

export default function* orderSaga() {
  yield takeEvery(REQUEST(ORDER_ACTION.GET_ORDER_LIST), getOrderListSaga);
  yield takeEvery(REQUEST(ORDER_ACTION.ORDER_PRODUCT), orderProductSaga);
  yield takeEvery(REQUEST(ORDER_ACTION.CLEAR_ORDER_LIST), clearOrderListSaga);
}

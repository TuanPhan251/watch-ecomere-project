import { takeEvery, put, debounce } from "redux-saga/effects";
import axios from "axios";

import {
  REQUEST,
  SUCCESS,
  FAIL,
  ORDER_ACTION,
  CART_ACTION,
} from "../CONSTANTS/";

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

function* getAllOrdersSaga(action) {
  try {
    const { params } = action.payload;
    const result = yield axios.get("http://localhost:4000/orders", {
      params: {
        _page: params.page,
        _limit: params.limit,
        _embed: "orderProducts",
        _sort: "createdAt",
        _order: "desc",
        ...(params.keyword && {
          q: params.keyword,
        }),
        ...(params.priceSort && {
          _sort: "totalPrice",
          _order: params.priceSort,
        }),
      },
    });
    yield put({
      type: `${SUCCESS(ORDER_ACTION.GET_ALL_ORDERS)}`,
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
      type: `${FAIL(ORDER_ACTION.GET_ALL_ORDERS)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* getOrderDetailSaga(action) {
  try {
    const { id, callback } = action.payload;
    const result = yield axios.get(`http://localhost:4000/orders/${id}`, {
      params: {
        _embed: "orderProducts",
      },
    });
    yield put({
      type: `${SUCCESS(ORDER_ACTION.GET_ORDER_DETAIL)}`,
      payload: {
        data: result.data,
      },
    });
    if (callback.getOrderUser) yield callback.getOrderUser(result.data.userId);
  } catch (e) {
    yield put({
      type: `${FAIL(ORDER_ACTION.GET_ORDER_DETAIL)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* getGuestOrderDetailSaga(action) {
  try {
    const { orderCode, callback } = action.payload;
    const result = yield axios.get(`http://localhost:4000/guestOrders/`, {
      params: {
        _embed: "guestOrderProducts",
        orderCode: orderCode,
      },
    });
    yield put({
      type: `${SUCCESS(ORDER_ACTION.GET_GUEST_ORDER_DETAIL)}`,
      payload: {
        data: result.data,
      },
    });
    if (result.data.length !== 0) yield callback.showOrder(true);
    if (result.data.length === 0) yield callback.showOrder(false);
  } catch (e) {
    console.log(
      "🚀 ~ file: order.saga.js ~ line 110 ~ function*getGuestOrderDetailSaga ~ e",
      e
    );
    yield put({
      type: `${FAIL(ORDER_ACTION.GET_GUEST_ORDER_DETAIL)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* updateOrderStatusSaga(action) {
  try {
    const { id, data, callback, userId } = action.payload;
    const result = yield axios.patch(
      `http://localhost:4000/orders/${id}`,
      data
    );
    yield put({
      type: `${SUCCESS(ORDER_ACTION.UPDATE_ORDER_STATUS)}`,
      payload: {
        data: result.data,
      },
    });
    // if (data.status === "done" && callback.updateUserInfo)
    //   yield callback.updateUserInfo();
    if (callback.updateUserInfo) yield callback.updateUserInfo();
    if (callback.goToList) yield callback.goToList();
    if (callback.getOrderList) yield callback.getOrderList();
  } catch (e) {
    yield put({
      type: `${FAIL(ORDER_ACTION.UPDATE_ORDER_STATUS)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* orderProductSaga(action) {
  try {
    const { products, callback, ...orderData } = action.payload;
    const result = yield axios.post("http://localhost:4000/orders", orderData);
    for (let i = 0; i < products.length; i++) {
      const { stock, ...productData } = products[i];
      yield axios.post("http://localhost:4000/orderProducts", {
        orderId: result.data.id,
        ...productData,
      });

      yield axios.patch(
        `http://localhost:4000/products/${products[i].productId}`,
        {
          stock: stock,
        }
      );
    }
    yield put({
      type: `${SUCCESS(ORDER_ACTION.ORDER_PRODUCT)}`,
      payload: {
        data: result.data,
      },
    });
    yield put({
      type: `${REQUEST(CART_ACTION.CLEAR_CART_ITEM)}`,
    });
    yield put({
      type: `${REQUEST(ORDER_ACTION.GET_ORDER_CODE)}`,
      payload: {
        data: result.data.orderCode,
      },
    });
    yield callback.goToSuccess();
  } catch (e) {
    yield put({
      type: `${FAIL(ORDER_ACTION.ORDER_PRODUCT)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* guestOrderProductSaga(action) {
  try {
    const { products, callback, ...orderData } = action.payload;
    const result = yield axios.post(
      "http://localhost:4000/guestOrders",
      orderData
    );
    for (let i = 0; i < products.length; i++) {
      yield axios.post("http://localhost:4000/guestOrderProducts", {
        guestOrderId: result.data.id,
        ...products[i],
      });
    }
    yield put({
      type: `${SUCCESS(ORDER_ACTION.GUEST_ORDER_PRODUCT)}`,
      payload: {
        data: result.data,
      },
    });
    yield put({
      type: `${REQUEST(CART_ACTION.CLEAR_CART_ITEM)}`,
    });
    yield put({
      type: `${REQUEST(ORDER_ACTION.GET_ORDER_CODE)}`,
      payload: {
        data: result.data.orderCode,
      },
    });
    yield callback.goToSuccess();
  } catch (e) {
    yield put({
      type: `${FAIL(ORDER_ACTION.GUEST_ORDER_PRODUCT)}`,
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
  yield debounce(500, REQUEST(ORDER_ACTION.GET_ALL_ORDERS), getAllOrdersSaga);
  yield takeEvery(REQUEST(ORDER_ACTION.GET_ORDER_DETAIL), getOrderDetailSaga);
  yield takeEvery(
    REQUEST(ORDER_ACTION.GET_GUEST_ORDER_DETAIL),
    getGuestOrderDetailSaga
  );
  yield takeEvery(
    REQUEST(ORDER_ACTION.UPDATE_ORDER_STATUS),
    updateOrderStatusSaga
  );
  yield takeEvery(REQUEST(ORDER_ACTION.ORDER_PRODUCT), orderProductSaga);
  yield takeEvery(
    REQUEST(ORDER_ACTION.GUEST_ORDER_PRODUCT),
    guestOrderProductSaga
  );
  yield takeEvery(REQUEST(ORDER_ACTION.CLEAR_ORDER_LIST), clearOrderListSaga);
}

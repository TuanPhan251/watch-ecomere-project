import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

import { REQUEST, SUCCESS, FAIL, WISHLIST_ACTION } from "../CONSTANTS/";

function* getWishlistSaga(action) {
  try {
    const { userId } = action.payload;
    const result = yield axios.get(
      "https://watch-ecomere-project-api-production.up.railway.app/wishlists",
      {
        params: {
          _expand: "product",
          userId: userId,
        },
      }
    );
    yield put({
      type: `${SUCCESS(WISHLIST_ACTION.GET_WISHLIST)}`,
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: `${FAIL(WISHLIST_ACTION.GET_WISHLIST)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* addWishlistSaga(action) {
  try {
    const { data, userId } = action.payload;
    const result = yield axios.post(
      "https://watch-ecomere-project-api-production.up.railway.app/wishlists",
      data
    );
    yield put({
      type: `${SUCCESS(WISHLIST_ACTION.ADD_WISHLIST)}`,
      payload: {
        data: result.data,
      },
    });
    // yield put({
    //   type: `${REQUEST(WISHLIST_ACTION.GET_WISHLIST)}`,
    //   payload: {
    //     userId: userId,
    //   },
    // });
  } catch (e) {
    yield put({
      type: `${FAIL(WISHLIST_ACTION.ADD_WISHLIST)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

function* removeWishlistSaga(action) {
  try {
    const { id, userId, callback } = action.payload;
    const result = yield axios.delete(
      `https://watch-ecomere-project-api-production.up.railway.app/wishlists/${id}`
    );
    yield put({
      type: `${SUCCESS(WISHLIST_ACTION.REMOVE_WISHLIST)}`,
      payload: {
        id: id,
      },
    });
    // yield put({
    //   type: `${REQUEST(WISHLIST_ACTION.GET_WISHLIST)}`,
    //   payload: {
    //     userId: userId,
    //   },
    // });

    if (callback) yield callback.getWishlists();
    if (callback) yield callback.getProductList();
  } catch (e) {
    yield put({
      type: `${FAIL(WISHLIST_ACTION.REMOVE_WISHLIST)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

export default function* wishlistSaga() {
  yield takeEvery(REQUEST(WISHLIST_ACTION.GET_WISHLIST), getWishlistSaga);
  yield takeEvery(REQUEST(WISHLIST_ACTION.ADD_WISHLIST), addWishlistSaga);
  yield takeEvery(REQUEST(WISHLIST_ACTION.REMOVE_WISHLIST), removeWishlistSaga);
}

import { takeEvery, debounce, put } from "redux-saga/effects";
import axios from "axios";

import { PRODUCT_ACTION, REQUEST, SUCCESS, FAIL } from "../CONSTANTS";

function* getProductListSaga(action) {
  try {
    const { params, more } = action.payload;
    const result = yield axios.get("http://localhost:4000/products", {
      params: {
        _expand: "category",
        _page: params.page,
        _limit: params.limit,
        ...(params.categoryId && {
          categoryId: params.categoryId,
        }),
        ...(params.keyword && {
          q: params.keyword,
        }),
        ...(params.priceOder && {
          finalPrice: params.priceOder,
        }),
        ...(params.gender && {
          gender: params.gender,
        }),
        ...(params.priceRange && {
          price_gte: params.priceRange[0],
          price_lte: params.priceRange[1],
        }),
        ...(params.priceSort && {
          _sort: "price",
          _order: params.priceSort,
        }),
        ...(params.type && {
          movement: params.type,
        }),
        ...(params.caseSize && {
          caseSize_gte: params.caseSize[0],
          caseSize_lte: params.caseSize[1],
        }),
        ...(params.glassMaterial && {
          glassMaterial: params.glassMaterial,
        }),
        ...(params.isNew && {
          isNew: params.isNew,
        }),
        ...(params.isDiscount && {
          isDiscount: params.isDiscount,
        }),
      },
    });
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST),
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
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST),
      payload: {
        error: "đã có lỗi xảy ra",
      },
    });
  }
}

function* getProductDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`http://localhost:4000/products/${id}`, {
      params: {
        _expand: "category",
        _embed: "comments",
      },
    });
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
      payload: {
        error: "đã có lỗi xảy ra",
      },
    });
  }
}

function* createProductSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("http://localhost:4000/products", data);
    yield put({
      type: SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT),
      payload: {
        data: result.data,
      },
    });
    yield callback.goToList();
  } catch (e) {
    console.log(
      "🚀 ~ file: products.saga.js ~ line 49 ~ function*createProductSaga ~ e",
      e
    );
    yield put({
      type: FAIL(PRODUCT_ACTION.CREATE_PRODUCT),
      payload: {
        error: "đã có lỗi xảy ra",
      },
    });
  }
}

function* updateProductSaga(action) {
  try {
    const { data, id, callback, comment } = action.payload;
    const result = yield axios.patch(
      `http://localhost:4000/products/${id}`,
      data
    );
    yield axios.post(`http://localhost:4000/comments/`, comment);

    yield put({
      type: SUCCESS(PRODUCT_ACTION.UPDATE_PRODUCT),
      payload: {
        data: result.data,
      },
    });
    yield callback.goToList();
  } catch (e) {
    console.log(
      "🚀 ~ file: products.saga.js ~ line 84 ~ function*updateProductSaga ~ e",
      e
    );
    yield put({
      type: FAIL(PRODUCT_ACTION.UPDATE_PRODUCT),
      payload: {
        error: "đã có lỗi xảy ra",
      },
    });
  }
}

function* deleteProductSaga(action) {
  try {
    const { id, params } = action.payload;
    const result = yield axios.delete(`http://localhost:4000/products/${id}`);
    yield put({
      type: SUCCESS(PRODUCT_ACTION.DELETE_PRODUCT),
      payload: {
        data: result.data,
      },
    });

    yield put({
      type: REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST),
      payload: {
        params: params,
      },
    });
  } catch (e) {
    console.log(
      "🚀 ~ file: products.saga.js ~ line 107 ~ function*deleteProductSaga ~ e",
      e
    );
    yield put({
      type: FAIL(PRODUCT_ACTION.DELETE_PRODUCT),
      payload: {
        error: "đã có lỗi xảy ra",
      },
    });
  }
}

export default function* productSaga() {
  yield debounce(
    500,
    REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST),
    getProductListSaga
  );
  yield takeEvery(
    REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
    getProductDetailSaga
  );
  yield takeEvery(REQUEST(PRODUCT_ACTION.CREATE_PRODUCT), createProductSaga);
  yield takeEvery(REQUEST(PRODUCT_ACTION.UPDATE_PRODUCT), updateProductSaga);
  yield takeEvery(REQUEST(PRODUCT_ACTION.DELETE_PRODUCT), deleteProductSaga);
}

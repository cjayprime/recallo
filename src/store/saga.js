import { put, call, takeEvery } from "redux-saga/effects";

import Configuration from "./config";

import Request from "./request";

import { LOADING as ACCOUNT_LOADING, REQUEST as ACCOUNT_REQUEST } from "./account/actions";
import { LOADING as CALLS_LOADING, REQUEST as CALLS_REQUEST } from "./calls/actions";
import { LOADING as PERSONNEL_LOADING, REQUEST as PERSONNEL_REQUEST } from "./personnel/actions";
import { LOADING as CATEGORY_LOADING, REQUEST as CATEGORY_REQUEST } from "./category/actions";

import Notification from "../utils/notification";

export default class Saga {
  loading;

  constructor(loading) {
    this.loading = loading;
    this.request = this.request.bind(this);
    this.root = this.root.bind(this);
  }

  listener = function* () {
    yield takeEvery(ACCOUNT_REQUEST, new Saga(ACCOUNT_LOADING).request);
    yield takeEvery(CALLS_REQUEST, new Saga(CALLS_LOADING).request);
    yield takeEvery(PERSONNEL_REQUEST, new Saga(PERSONNEL_LOADING).request);
    yield takeEvery(CATEGORY_REQUEST, new Saga(CATEGORY_LOADING).request);
  };

  root = function* root() {
    yield this.listener();
  };

  request = function* request(action) {
    const { endpoint, responder, method, data, success, error } = action;

    yield put({ type: this.loading, loading: endpoint });

    console.log(
      `${method} request sent to:`,
      `${Configuration.url}/${endpoint}`,
      `with parameters:`, data
    );
    const result = yield call(
      new Request().api,
      endpoint,
      method,
      data,
      success,
      error
    );
    console.log(
      endpoint,
      'processed server response:',
      result
    );

    if (result.message && result.status) {
      Notification.success(result.message);
    } else {
      Notification.error(result.message);
    }

    yield put({
      ...result,
      ...action,
      type: responder,
      loading: endpoint,
      message: result.message,
      status: result.status,
      data: result.data,
    });
  };
}

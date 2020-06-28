import { put, call, all } from "redux-saga/effects";

import Request from "./request";
import account from "./account/saga";
import calls from "./calls/saga";

import Notification from "../utils/notification";

export default class Saga {
  loading;

  constructor(loading) {
    this.loading = loading;
    this.request = this.request.bind(this);
  }

  root = function* root() {
    yield all([
      account(),
      calls()
    ]);
  };

  request = function* request(action) {
    // success and error are callbacks
    const { endpoint, responder, method, data, success, error } = action;

    yield put({ type: this.loading, loading: endpoint, name: "account" });

    const result = yield call(
      new Request().api,
      endpoint,
      method,
      data,
      success,
      error
    );
    console.log(endpoint, 'processed server response: ', result);

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

import { put, call, all } from "redux-saga/effects";

import Configuration from "./config";

import Request from "./request";
import account from "./account/saga";
import calls from "./calls/saga";
import personnel from "./personnel/saga";

import Notification from "../utils/notification";

export default class Saga {
  loading;

  constructor(loading) {
    this.loading = loading;
    this.request = this.request.bind(this);
    this.root = this.root.bind(this);
  }

  listener = function* () {
    // import { LOADING, REQUEST } from "./actions";

    // function* request() {
    //   const req = new Saga(LOADING).request;
    //   yield takeEvery(ACCOUNT_REQUEST, new Saga(ACCOUNT_LOADING).request);
    //   yield takeEvery(CALLS_REQUEST, new Saga(CALLS_LOADING).request);
    //   yield takeEvery(PERSONNEL_REQUEST, new Saga(PERSONNEL_LOADING).request);
    // }

    // yield all([request()]);
  };

  root = function* root() {
    yield all([
      account(),
      calls(),
      personnel()
    ]);
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

import { all, takeEvery } from "redux-saga/effects";

import Saga from "../saga";

import { LOADING, REQUEST } from "./actions";

function* request() {
  yield takeEvery(REQUEST, new Saga(LOADING).request);
}

export default function* saga() {
  yield all([request()]);
}

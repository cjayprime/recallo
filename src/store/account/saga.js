import {all, takeLatest} from "redux-saga/effects";

import Saga from '../saga';

import {
    LOADING,
    REQUEST
} from "./actions";

function* request() {
    yield takeLatest(REQUEST, new Saga(LOADING).request);
}

export default function* saga() {
    yield all([
        request()
    ]);
}
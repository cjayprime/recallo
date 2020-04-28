import { all } from "redux-saga/effects";
import authsSaga from "./auth/saga";

export default function* rootSaga() {
    yield all([
        authsSaga()
    ]);
}

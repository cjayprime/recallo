import { put, takeLatest, call, all } from "redux-saga/effects";

import authService from "../../Services/auth";
import {
    SIGNUP,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS,
    setUserData
} from "./actions";

import { setLoading, showRequestFeedBack } from "../utils/actions";

export const authRequest = {
    signupRequest: "signupRequest"
}

function* signupSaga(action) {
    try {
        const { data } = action.payload;
        yield put(
            setLoading({ request: authRequest.signupRequest, loading: true })
        );
        const response = yield call(authService.signup, data);

        yield put(setLoading({ request: authRequest.signupRequest }));
        if (response.data.status.code === 100) {
            yield put(setUserData(response.data.entity.user))
            yield put({
                type: SIGNUP_SUCCESS,
                payload: response.data.status
            });
            yield put(
                showRequestFeedBack({
                    message: response.data.status.desc,
                    for: authRequest.signupRequest,
                    success: true
                })
            )
        } else {
            yield put(
                showRequestFeedBack({
                    message: response.data.status.desc,
                    for: authRequest.signupRequest,
                    success: false
                })
            );
            yield put({
                type: SIGNUP_ERROR,
                payload: response.data.status
            })
        }
    } catch (error) {
        yield put(setLoading({ request: authRequest.signupRequest }));
        yield put(
            showRequestFeedBack({
                message: "An error occured. Try again",
                for: authRequest.signupRequest,
                success: false
            })
        );
        yield put({
            type: SIGNUP_ERROR,
            payload: error
        })
    }
}

function* signupWatcher() {
    yield takeLatest(SIGNUP, signupSaga);
}

export default function* authsSaga() {
    yield all([
        signupWatcher()
    ])
}
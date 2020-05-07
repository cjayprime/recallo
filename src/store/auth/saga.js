import { put, takeLatest, call, all } from "redux-saga/effects";

import authService from "../../Services/auth";
import {
    SIGNUP,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS,
    SIGNIN,
    SIGNIN_ERROR,
    SIGNIN_SUCCESS,
    setUserData,
    PERSONALINFORMATION_SUCCESS,
    PERSONALINFORMATION_ERROR,
    PERSONALINFORMATION,
    BUSINESSINFORMATION_SUCCESS,
    BUSINESSINFORMATION_ERROR,
    BUSINESSINFORMATION,
    SIGNOUT_ERROR,
    SIGNOUT,
    SIGNOUT_SUCCESS
} from "./actions";

import { setLoading, showRequestFeedBack } from "../utils/actions";

export const authRequest = {
    signupRequest: "signupRequest",
    signinRequest: "signinRequest",
    signoutRequest: "signoutRequest",
    personalInformationRequest: "personalInformationRequest",
    businessInformationRequest: "businessInformationRequest"
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

function* signinSaga(action) {
    try {
        const { data, history } = action.payload;
        yield put(setLoading({ request: authRequest.signinRequest, loading: true }));
        yield showRequestFeedBack({});
        const response = yield call(authService.signin, data);
        yield put(setLoading({ request: authRequest.signinRequest }));
        if (response.data.status.code === 100) {
            yield put(setUserData(response.data.entity.user))
            //make sure you set token here when is ready
            yield call(authService.setToken, response.data.entity.token);
            yield put({
                type: SIGNIN_SUCCESS,
                payload: response.data.status
            });
            history.push("/admin/home");
        } else {
            yield (
                showRequestFeedBack({
                    message: response.data.status.desc,
                    for: authRequest.signinRequest,
                    success: false
                })
            );
            yield put({
                type: SIGNIN_ERROR,
                payload: response.data.status
            });
        }
    } catch (error) {
        yield put(setLoading({ request: authRequest.signinRequest }));
        yield put(
            showRequestFeedBack({
                message: "An error occured. Try again",
                for: authRequest.signinRequest,
                success: false
            })
        );
        yield put({
            type: SIGNIN_ERROR,
            payload: error
        })
    }
}

function* signoutSaga(action) {
    try {
        const { history } = action.payload;
        yield put(setLoading({ request: authRequest.signoutRequest, loading: true }));
        const response = yield call(authService.signout);
        yield put(setLoading({ request: authRequest.signoutRequest }));
        if (response.status.code === 100) {
            history.push("/");
            yield setLoading({});
            yield put({
                type: SIGNOUT_SUCCESS,
                payload: response.entity
            });
        } else {
            yield put({
                type: SIGNOUT_ERROR,
                payload: response.data.status
            });
        }
    } catch (error) {
        yield put(setLoading({ request: authRequest.signoutRequest }));
        yield put({
            type: SIGNOUT_ERROR,
            payload: error
        });
    }
}

function* personalInformationSaga(action) {
    try {
        const { data } = action.payload;
        yield put(
            setLoading(({ request: authRequest.personalInformationRequest, loading: true }))
        );
        const response = yield call(authService.personalInformation, data);

        yield put(setLoading({ request: authRequest.personalInformationRequest }))
        if (response.data.status.code === 100) {
            yield put(setUserData(response.data.entity.user))
            yield put({
                type: PERSONALINFORMATION_SUCCESS,
                payload: response.data.status
            });
            yield put(
                showRequestFeedBack({
                    message: response.data.status.desc,
                    for: authRequest.personalInformationRequest,
                    success: true
                })
            )
        } else {
            yield put({
                type: PERSONALINFORMATION_ERROR,
                payload: response.data.status
            })
            yield put(
                showRequestFeedBack({
                    message: response.data.status.desc,
                    for: authRequest.personalInformationRequest,
                    success: false
                })
            )
        }
    } catch (error) {
        yield put(
            showRequestFeedBack({
                message: "An error occured. Try again",
                for: authRequest.personalInformationRequest,
                success: false
            })
        )
        yield put({
            type: PERSONALINFORMATION_ERROR,
            payload: error
        })
    }
}

function* businessInformationSaga(action) {
    try {
        const { data, history } = action.payload;
        yield put(
            setLoading({ request: authRequest.businessInformationRequest, loading: true })
        );
        const response = yield call(authService.businessInformation, data);

        yield put(setLoading({ request: authRequest.businessInformationRequest }))
        if (response.data.status.code === 100) {
            yield put(setUserData(response.data.entity.user))
            yield put({
                type: BUSINESSINFORMATION_SUCCESS,
                payload: response.data.status
            });
            history.push("/admin/home");
            yield put(
                showRequestFeedBack({
                    message: response.data.status.desc,
                    for: authRequest.businessInformationRequest,
                    success: true
                })
            )
        } else {
            yield put({
                type: BUSINESSINFORMATION_ERROR,
                payload: response.data.status
            })
            yield put(
                showRequestFeedBack({
                    message: response.data.status.desc,
                    for: authRequest.businessInformationRequest,
                    success: false
                })
            )
        }
    } catch (error) {
        yield put(setLoading({ request: authRequest.businessInformationRequest }));
        yield put(
            showRequestFeedBack({
                message: "An error occured. Try again",
                for: authRequest.businessInformationRequest,
                success: false
            })
        )
        yield put({
            type: BUSINESSINFORMATION_ERROR,
            payload: error
        })
    }
}

function* signupWatcher() {
    yield takeLatest(SIGNUP, signupSaga);
}

function* signinWatcher() {
    yield takeLatest(SIGNIN, signinSaga);
}

function* signoutWatcher() {
    yield takeLatest(SIGNOUT, signoutSaga)
}

function* personalInformationWatcher() {
    yield takeLatest(PERSONALINFORMATION, personalInformationSaga)
}

function* businessInformationWatcher() {
    yield takeLatest(BUSINESSINFORMATION,
        businessInformationSaga)
}

export default function* authsSaga() {
    yield all([
        signupWatcher(),
        signinWatcher(),
        signoutWatcher(),
        personalInformationWatcher(),
        businessInformationWatcher()
    ])
}
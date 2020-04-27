export const SIGNUP = "SIGNUP";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

export const SET_USER_DATA = "SET_USER_DATA";

export const signup = data => ({
    type: SIGNUP,
    payload: data
});

export const setUserData = data => ({
    type: SET_USER_DATA,
    payload: data
});
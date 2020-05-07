export const SIGNUP = "SIGNUP";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

export const SIGNIN = "SIGNIN";
export const SIGNIN_ERROR = "SIGNIN_ERROR";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";

export const SIGNOUT = "SIGNOUT";
export const SIGNOUT_ERROR = "SIGNOUT_ERROR";
export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";

export const PERSONALINFORMATION = "PERSONALINFORMATION";
export const PERSONALINFORMATION_ERROR = "PERSONALINFORMATION_ERROR";
export const PERSONALINFORMATION_SUCCESS = "PERSONALINFORMATION_SUCCESS";

export const BUSINESSINFORMATION = "BUSINESSINFORMATION";
export const BUSINESSINFORMATION_ERROR = "BUSINESSINFORMATION_ERROR";
export const BUSINESSINFORMATION_SUCCESS = "BUSINESSINFORMATION_SUCCESS";

export const SET_USER_DATA = "SET_USER_DATA";

export const signup = data => ({
    type: SIGNUP,
    payload: data
});

export const signin = data => ({
    type: SIGNIN,
    payload: data
});

export const signout = data => ({
    type: SIGNOUT,
    payload: data
})

export const personalInformation = data => ({
    type: PERSONALINFORMATION,
    payload: data
});

export const businessInformation = data => ({
    type: BUSINESSINFORMATION,
    payload: data
})

export const setUserData = data => ({
    type: SET_USER_DATA,
    payload: data
});
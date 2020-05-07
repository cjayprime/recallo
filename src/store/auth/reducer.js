import * as Actions from "./actions";

const initialState = {
    success: null,
    requestStatus: {},
    data: {}
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SIGNUP_ERROR:
            return {
                ...state,
                success: false,
                requestStatus: action.payload
            };
        case Actions.SIGNUP_SUCCESS:
            return {
                ...state,
                success: true,
                requestStatus: action.payload
            }
        case Actions.SIGNIN_ERROR:
            return {
                ...state,
                success: false,
                requestStatus: action.payload
            }
        case Actions.SIGNIN_SUCCESS:
            return {
                ...state,
                success: true,
                requestStatus: action.payload
            }
        case Actions.SIGNOUT_ERROR:
            return {
                ...state,
                success: false,
                requestStatus: action.payload
            }
        case Actions.SIGNOUT_SUCCESS:
            return {
                ...state,
                success: true,
                requestStatus: action.payload
            }
        case Actions.PERSONALINFORMATION_ERROR:
            return {
                ...state,
                success: false,
                requestStatus: action.payload
            }
        case Actions.PERSONALINFORMATION_SUCCESS:
            return {
                ...state,
                success: true,
                requestStatus: action.payload
            }
        case Actions.BUSINESSINFORMATION_ERROR:
            return {
                ...state,
                success: false,
                requestStatus: action.payload
            }
        case Actions.BUSINESSINFORMATION_SUCCESS:
            return {
                ...state,
                success: true,
                requestStatus: action.payload
            }
        case Actions.SET_USER_DATA:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export default auth;
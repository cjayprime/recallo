import * as Actions from "../actions";

function signup(state, action) {
    const { data, loading, message, status, type } = action;

    if (type === Actions.SIGNUP && status === true) {
        var newState = {
            ...state,
            loading: state.loading.filter(text => text !== loading),
            status: true,
            message,
        }
        if (action.step === 0) {
            Actions.token.set(data.entity.token)
            return {
                ...newState,
                business: {
                    name: data,
                    email: data,
                    password: data.password
                }
            }
        } // get the returned value from data and then put it into `newState`
        if (action.step === 1) {
            Actions.token.set(data.entity.token)
            return {
                ...newState,
                user: {
                    firstname: data.first_name,
                    lastname: data.last_name,
                    email: data.email,
                    mobile: data.mobile
                }
            };
        }// get the returned value from data and then put it into `newState`
        if (action.step === 2) {
            Actions.token.set(data.entity.token)
            return {
                ...newState,
                business: {
                    name: data,
                    email: '',
                    address: '',
                    rc: '',
                    agent: ''
                }
            };
        }// get the returned value from data and then put it into `newState`
    } else if (type === Actions.SIGNUP && status === false) {
        return {
            ...state,
            loading: state.loading.filter(text => text !== loading),
            status: false,
            message
        };
    }

    return null;
}
export default signup;
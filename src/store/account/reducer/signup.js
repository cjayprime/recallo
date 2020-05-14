import * as Actions from "../actions";

function signup(state, action) {
    const { data, loading, message, status, type } = action;

    if (type === Actions.SIGNUP && status === true) {
        var newState = {
            ...state,
            loading: state.loading.filter(text => text !== loading),
            status: true,
            message,
        };
        
        if (action.step === 0) {
            Actions.token.set(data.token);
            return {
                ...newState,
                // business: {
                //     ...newState.business,
                //     name: data,
                //     email: data,
                //     password: data.password
                // }
            }
        }else if (action.step === 1) {
            Actions.token.set(data.entity.token)
            return {
                ...newState,
                user: {
                    ...newState.user,
                    firstname: data.first_name,
                    lastname: data.last_name,
                    email: data.email,
                    mobile: data.mobile
                }
            };
        }else if (action.step === 2) {
            Actions.token.set(data.entity.token)
            return {
                ...newState,
                business: {
                    ...newState.business,
                    name: data,
                    email: '',
                    address: '',
                    rc: '',
                    agent: ''
                }
            };
        }
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
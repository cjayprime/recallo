import * as Actions from "../actions";

function signup(state, action){
    const {data, loading, message, status, type} = action;

    if(type === Actions.SIGNUP && status === true){
        var newState = {
            ...state,
            loading: state.loading.filter(text => text !== loading),
            status: true,
            message,
        }
        //if(action.step === 0)// get the returned value from data and then put it into `newState`
        //if(action.step === 1)// get the returned value from data and then put it into `newState`
        //if(action.step === 2)// get the returned value from data and then put it into `newState`
        return {
            ...newState,
            user: {
                firstname: data.first_name,
                lastname: '',
                email: '',
                mobile: ''
            }
        };
    }else if(type === Actions.SIGNUP && status === false){
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
import * as Actions from "../actions";

function signin(state, action){
    const {data, loading, message, status, type} = action;

    if(type === Actions.SIGNIN && status === true){
        return {
            ...state,
            loading: state.loading.filter(text => text !== loading),
            status: true,
            message,
            user: {
                firstname: data.first_name,
                lastname: '',
                email: '',
                mobile: ''
            }
        };
    }else if(type === Actions.SIGNIN && status === false){
        return {
            ...state,
            loading: state.loading.filter(text => text !== loading),
            status: false,
            message
        };
    }

    return null;
}
export default signin;
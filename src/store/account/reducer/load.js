import * as Actions from "../actions";

function load(state, action){
    const {data, loading, message, status, type} = action;

    if(type === Actions.LOAD && status === true){
        return {
            ...state,
            loading: state.loading.filter(text => text !== loading),
            status: true,
            message,
            user: {
                firstname: data.me.first_name,
                lastname: data.me.last_name,
                email: data.me.email,
                mobile: data.me.mobile
            }
        };
    }else if(type === Actions.LOAD && status === false){
        return {
            ...state,
            loading: state.loading.filter(text => text !== loading),
            status: false,
            message
        };
    }

    return null;
}
export default load;
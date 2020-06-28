import * as Actions from "../actions";

function load(state, action) {
  const { data, loading, message, status, type } = action;
  let newState = {
    ...state
  };

  if (type === Actions.LOAD && status === true) {
    return {
      ...newState,
      user: {
        firstname: data.me.first_name,
        lastname: data.me.last_name,
        email: data.me.email,
        mobile: data.me.mobile,
      },
    };
  }else if (type === Actions.LOAD && status === false) {
    Actions.token.remove();
  }

  return newState;
}
export default load;

import * as Actions from "../actions";

function load(state, action) {
  const { data, status } = action;
  let newState = {
    ...state
  };

  if (status === true) {
    return {
      ...newState,
      user: {
        firstname: data.me.first_name,
        lastname: data.me.last_name,
        email: data.me.email,
        mobile: data.me.mobile,
      },
    };
  }else if (status === false) {
    Actions.token.remove();
  }

  return newState;
}
export default load;

import * as Actions from "../actions";

function load(state, action) {
  const { data, status } = action;
  let newState = {
    ...state
  };

  if (status === true && (data.me && data.me.account)) {
    return {
      ...newState,
      user: {
        firstname: data.me.first_name,
        lastname: data.me.last_name,
        email: data.me.email,
        mobile: data.me.mobile,
      },
      business: {
        name: data.me.account.business_name,
        email: data.me.account.business_email
      }
    };
  }else if (status === false || (!data.me && !data.me.account)) {
    // Actions.token.remove();
  }

  return newState;
}
export default load;

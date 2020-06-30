import * as Actions from "../actions";

function signup(state, action) {
  const { data, status } = action;
  let newState = {
    ...state
  };

  if (status === true) {
    if (action.step >= 0) {
      if(action.step === 0) Actions.token.set(data.token);

      return {
        ...newState,
      };
    }
  }

  return newState;
}
export default signup;

import * as Actions from "../actions";
import signup from "./signup";
import signin from "./signin";
import load from "./load";
import plans from "./plans";

const initialState = {
  loading: [],
  status: false,
  message: "",
  /*
  "entity": [
    {
      "ANSWERED": 0
    },
    {
      "caller_waiting": 2
    },
    {
      "queuing_call": 1
    },
    {
      "recording_review": 0
    }
  ]
  */
};

const calls = (state = initialState, action) => {
  // console.log('All states and actions: ', state, action)
  const { loading, type, name } = action;
  let newState;

  if (type === Actions.LOADING && loading && name === "account") {
    state.loading.push(loading);
    return {
      ...state,
    };
  }else if (newState = signin(state, action)) {
    return newState;
  }else if (newState = signup(state, action)) {
    return newState;
  }else if (newState = load(state, action)) {
    return newState;
  }else if (newState = plans(state, action)) {
    return newState;
  }

  return state;
};

export default calls;

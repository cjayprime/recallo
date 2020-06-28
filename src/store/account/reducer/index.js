import * as Actions from "../actions";
import signup from "./signup";
import signin from "./signin";
import load from "./load";
import plans from "./plans";

// TODO: all else statements that return just status and 
// message are irrelevant even the loading resolution can
// be made better by declaring a newState object at the 
// top and moving it to it
const initialState = {
  loading: [],
  status: false,
  message: "",
  user: {
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
  },
  business: {
    name: "",
    email: "",
    address: "",
    website: "",
    rc: "",
    did: "",
    agents: "",
    card: "",
    artiste: "",
    recordings: {
      intro: "",
      thankyou: "",
      hold: "",
      hangup: "",
      adverts: "",
      aohcs: "",
    },
  },
  payment: {
    reference: "",
    publickey: "",
    amount: 0,
    plans: [],
    dids: [],
  }
};

const account = (state = initialState, action) => {
  // console.log('All account states and actions: ', state, action)
  const { loading, type, name } = action;
  let newState = {
    ...state,
    loading: state.loading.filter((text) => text !== loading)
  };

  if (type === Actions.LOADING && loading && name === "account") {
    newState.loading.push(loading);
    return {
      ...newState,
    };
  }else if (newState = signin(newState, action)) {
    return newState;
  }else if (newState = signup(newState, action)) {
    return newState;
  }else if (newState = load(newState, action)) {
    return newState;
  }else if (newState = plans(newState, action)) {
    return newState;
  }

  return newState;
};

export default account;

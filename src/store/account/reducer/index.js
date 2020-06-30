import * as Actions from "../actions";
import signup from "./signup";
import signin from "./signin";
import load from "./load";
import plans from "./plans";

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
  const { loading, type } = action;
  let newState = {
    ...state,
    loading: state.loading.filter((text) => text !== loading)
  };

  if (type === Actions.LOADING && loading) {
    newState.loading.push(loading);
    return newState;
  }else if (type === Actions.SIGNIN && (newState = signin(newState, action))) {
    return newState;
  }else if (type === Actions.SIGNUP && (newState = signup(newState, action))) {
    return newState;
  }else if (type === Actions.LOAD && (newState = load(newState, action))) {
    return newState;
  }else if (
    (
      type === Actions.ADDPAYMENT   ||
      type === Actions.PAYMENTPLAN  ||
      type === Actions.DID
    ) && (newState = plans(newState, action))) {
    return newState;
  }

  return newState;
};

export default account;

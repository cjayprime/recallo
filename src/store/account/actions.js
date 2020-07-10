/*
For all requests throughout the app the following actions are fired when triggering it:
  type,
  responder,
  endpoint,
  method,
  data,
  success,
  error
    
and when the request is complete it fires:
  ...result,
  ...action,
  type: responder,
  loading,
  message,
  status,
  data
  success,
  error
*/
export const LOADING = "ACCOUNT_LOADING";
export const REQUEST = "ACCOUNT_REQUEST";
export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";
export const LOAD = "LOAD";
export const ADDPAYMENT = "ADDPAYMENT";
export const PAYMENTPLAN = "PAYMENTPLAN";
export const DID = "DID";
export const PAY = "PAY";

export const signup = (data, step, success) => ({
  type: REQUEST,
  responder: SIGNUP,
  endpoint:
    step === 3
      ? "payments/verifyandfinishregisteration"
      : `account${
          step === 2 ? "/setup/second" : step === 1 ? "/setup/first" : ""
        }`,
  method: "POST",
  data,
  success,
  step,
});

export const signin = (data, success) => ({
  type: REQUEST,
  responder: SIGNIN,
  endpoint: "account/login",
  method: "POST",
  data,
  success,
});

export const signout = (success) => ({
  type: REQUEST,
  responder: SIGNOUT,
  endpoint: "account/logout",
  method: "GET",
  success
});

export const load = (data) => ({
  type: REQUEST,
  responder: LOAD,
  endpoint: "account",
  method: "GET",
  data,
});

export const plans = (category, success) => ({
  type: REQUEST,
  responder:
    category === "payment-plans"
      ? PAYMENTPLAN
      : category === "payment-addition"
        ? ADDPAYMENT
        : DID,
  endpoint: 
    category === "payment-plans"
      ? "paymentplans"
      : category === "payment-addition"
        ? "payments/add"
        : "getdids",
  method: "GET",
  success
});

export const token = {
  get: () => {
    const item = window.localStorage.getItem("token");
    return item;
  },
  set: (newToken) => {
    const item = window.localStorage.setItem("token", newToken);
    return item;
  },
  remove: () => {
    const item = window.localStorage.removeItem("token");
    return item;
  },
};

export const update = (path, data) => ({
  type: REQUEST,
  responder: SIGNOUT,
  endpoint: "account/" + path,
  method: "PUT",
  data,
});

export const changePassword = data => ({
  type: REQUEST,
  responder: SIGNOUT,
  endpoint: "account/changepassword",
  method: "POST",
  data,
});


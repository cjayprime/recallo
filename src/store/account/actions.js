export const LOADING = "ACCOUNT_LOADING";
export const REQUEST = "ACCOUNT_REQUEST";
export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";
export const LOAD = "LOAD";

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

export const signout = (data) => ({
  type: REQUEST,
  responder: SIGNOUT,
  endpoint: "account/logout",
  method: "POST",
  data,
});

export const load = (data) => ({
  type: REQUEST,
  responder: LOAD,
  endpoint: "account",
  method: "GET",
  data,
});

export const token = {
  get: async () => {
    return await window.localStorage.getItem("token");
  },
  set: async (token) => {
    return await window.localStorage.setItem("token", token);
  },
  remove: async () => {
    return await window.localStorage.removeItem("token");
  },
};

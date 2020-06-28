export const LOADING = "CALLS_LOADING";
export const REQUEST = "CALLS_REQUEST";
export const CALLS = "CALLS";

export const getCalls = (path) => ({
  type: REQUEST,
  responder: CALLS,
  method: "GET",
  endpoint: 'call/' + path
});
export const LOADING = "CALLS_LOADING";
export const REQUEST = "CALLS_REQUEST";
export const ALLCALLS = "ALLCALLS";
export const EACHCALL = "EACHCALL";

export const getCalls = path => ({
  type: REQUEST,
  responder: path === 'all' ? ALLCALLS : EACHCALL,
  method: "GET",
  endpoint: 'call/' + path
});
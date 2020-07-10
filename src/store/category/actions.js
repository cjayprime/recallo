export const LOADING = "CATEGORY_LOADING";
export const REQUEST = "CATEGORY_REQUEST";
export const CREATECATEGORY = "CREATECATEGORY";
export const ALLCATEGORY = "ALLCATEGORY";

export const addCategory = (data, success) => ({
  type: REQUEST,
  responder: CREATECATEGORY,
  method: 'POST',
  endpoint: 'category',
  data,
  success
});

export const getCategories = (success) => ({
  type: REQUEST,
  responder: ALLCATEGORY,
  method: 'GET',
  endpoint: 'category',
  success
});
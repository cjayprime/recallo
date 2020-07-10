import * as Actions from "../actions";

const initialState = {
  loading: [],
  status: false,
  message: "",
  all: [
    // {
      //  _id: 9
      //  account: 72
      //  category_description: null
      //  category_name: null
      //  created: "2020-07-06 13:36:05"
      //  profiled: null
      //  updated: null
      //  user: 73
    // }
  ]
};

const category = (state = initialState, action) => {
  const { loading, type, data, status } = action;
  let newState = {
    ...state,
    loading: state.loading.filter((text) => text !== loading),
  };

  if (type === Actions.LOADING && loading) {
    newState.loading.push(loading);
    return newState;
  }else if (type === Actions.ALLCATEGORY && status === true) {
    return {
      ...newState,
      all: data.category,
    };
  }

  return newState;
};

export default category;

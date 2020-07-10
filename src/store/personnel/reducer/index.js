import * as Actions from "../actions";

const initialState = {
  loading: [],
  status: false,
  message: "",
  all: [
    // {
    // created	"2020-07-01 13:57:24"
    // updated	null
    // account	72
    // name	"Vivian Kuber"
    // user_status	"0"
    // tnoc	"0"
    // skill_level	"2"
    // email	"vivian@yahoo.com"
    // mobile	"2347085375598"
    // department	0
    // status	"3"
    // schedules	null
    // _id	97
    // }
  ],
  details: {
    // {
    // created	"2020-07-01 13:57:24"
    // updated	null
    // account	72
    // name	"Vivian Kuber"
    // user_status	"0"
    // tnoc	"0"
    // skill_level	"2"
    // email	"vivian@yahoo.com"
    // mobile	"2347085375598"
    // department	0
    // status	"3"
    // schedules	null
    // _id	97
    // }
  },
  department: {
    all: [

    ],
    details: {

    }
  }
};

const personnel = (state = initialState, action) => {
  const { loading, type, data, status } = action;
  let newState = {
    ...state,
    loading: state.loading.filter((text) => text !== loading),
  };

  if (type === Actions.LOADING && loading) {
    newState.loading.push(loading);
    return newState;
  }else if (type === Actions.GETPERSONNEL && status === true) {
    return {
      ...newState,
      all: data.personnel,
    };
  }else if (type === Actions.CREATEPERSONNEL && status === true) {
    return {
      ...newState,
      details: data.call,
    };
  }else if (type === Actions.GETDEPARTMENT && status === true) {
    return {
      ...newState,
      department: {
        ...newState.department,
        all: data.department,
      }
    };
  }else if (type === Actions.CREATEDEPARTMENT && status === true) {
    return {
      ...newState,
      // details: data.call,
    };
  }
  
  return newState;
};

export default personnel;

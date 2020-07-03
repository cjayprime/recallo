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
    //   "start_time": "2019-06-28 09:50:22",
    //   "start_time_wait": null,
    //   "start_time_agent": null,
    //   "talk_time": null,
    //   "reference_no": "1561711821.1679",
    //   "call_duration": "0:00:11",
    //   "caller_id": "8033189788",
    //   "did_called": "08139841201",
    //   "rec_file_name": null,
    //   "personnel": null,
    //   "personnel_name": null,
    //   "type": "inbound",
    //   "call_status": "queuing_call",
    //   "account": 3,
    //   "end_time": "2019-06-28 09:50:33",
    //   "hangup_code": "NONE",
    //   "hangup_by": "caller",
    //   "hangup_reason": null,
    //   "personnel_mobile": null,
    //   "final_state": 0,
    //   "rec_name": "2019-06-28/",
    //   "_id": 17
    // }
  },
  // callStatus: {
  //   answered: 0,
  //   waiting: 2,
  //   queued: 0,
  //   recording: 0,
  // }
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
  }
  
  return newState;
};

export default personnel;

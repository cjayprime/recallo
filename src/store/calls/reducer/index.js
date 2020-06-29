import * as Actions from "../actions";

const initialState = {
  loading: [],
  status: false,
  message: "",
  all: [
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

const calls = (state = initialState, action) => {
  // console.log('All calls states and actions: ', state, action)
  const { loading, type, name, data, status } = action;
  let newState = {
    ...state,
    loading: state.loading.filter((text) => text !== loading),
  };

  if (type === Actions.LOADING && loading && name === "account") {
    state.loading.push(loading);
    return newState;
  }else if (type === Actions.ALLCALLS && status === true) {
    return {
      ...newState,
      all: data.calls,
    };
  }else if (type === Actions.EACHCALL && status === true) {
    return {
      ...newState,
      details: data.call,
    };
  }

  return newState;
};

export default calls;

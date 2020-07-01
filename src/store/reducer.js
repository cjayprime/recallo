import { combineReducers } from "redux";

import account from "./account/reducer";
import calls from "./calls/reducer";
import personnel from "./personnel/reducer";

export default class Reducer {
  create = combineReducers({
    account,
    calls,
    personnel
  });

  // Doubt I'll need this,
  // I've made everything neat enough not to 
  rebuild = () => (asyncReducers) =>
    combineReducers({
      account,
      calls,
      personnel,
      ...asyncReducers,
    });
}

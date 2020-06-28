import { combineReducers } from "redux";

import account from "./account/reducer";
import calls from "./calls/reducer";

export default class Reducer {
  create = combineReducers({
    account,
    calls
  });

  rebuild = () => (asyncReducers) =>
    combineReducers({
      account,
      calls,
      ...asyncReducers,
    });
}

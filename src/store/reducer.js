import { combineReducers } from "redux";

import account from "./account/reducer";

export default class Reducer {
  create = combineReducers({
    account,
  });

  rebuild = () => (asyncReducers) =>
    combineReducers({
      account,
      ...asyncReducers,
    });
}

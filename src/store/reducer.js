import { combineReducers } from "redux";

import account from "./account/reducer";
import calls from "./calls/reducer";
import personnel from "./personnel/reducer";
import category from "./category/reducer";
import voicenote from "./voicenote/reducer";

export default class Reducer {
  create = combineReducers({
    account,
    calls,
    personnel,
    category,
    voicenote
  });

  // Doubt I'll need this,
  // I've made everything neat enough not to 
  rebuild = () => (asyncReducers) =>
    combineReducers({
      account,
      calls,
      personnel,
      category,
      voicenote,
      ...asyncReducers,
    });
}

import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";

import Reducer from "./reducer";
import Saga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(new Reducer().create, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(new Saga().root);

export default store;
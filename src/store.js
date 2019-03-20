import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/reducers/index";
import { forbiddenWordsMiddleware } from "./middleware/index";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import apiSaga from "./sagas/index";
const initailsagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(forbiddenWordsMiddleware, thunk, initailsagaMiddleware)
);
initailsagaMiddleware.run(apiSaga);
export default store;

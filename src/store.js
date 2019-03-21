import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/reducers/index";
import { forbiddenWordsMiddleware } from "./middleware/index";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import apiSaga from "./sagas/index";
import  reducers  from "./reducers/rootReducer";


const initailsagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(forbiddenWordsMiddleware, thunk, initailsagaMiddleware)
);


console.log(store.getState());
initailsagaMiddleware.run(apiSaga);
export default store;

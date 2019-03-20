import { Map } from "immutable";
var initialState = {
  articles: [],
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  if (action.type == "ADD_ARTICLE") {
    //state.articles.push(action.payload);
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  if (action.type === "DATA_REQUESTED") {
    console.log("data requsted");
    return {
      ...state,
      loading: true,
      error: ""
    };
  }
  if (action.type === "DATA_ERROR") {
    return {
      ...state,
      loading: false,
      error: action.error
    };
  }
  return state;
}

export default rootReducer;

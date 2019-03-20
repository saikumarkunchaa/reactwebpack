export const addArticle = payload => ({
  type: "ADD_ARTICLE",
  payload: payload
});

export const getData = () => {
  return dispatch => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(respose => respose.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
};

export const getSagaData = () => dispatch => {
  dispatch({ type: "DATA_REQUESTED" });
};

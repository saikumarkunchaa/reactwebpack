const forbiddenwords = ["spam", "kiran"];
export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type == "ADD_ARTICLE") {
        const foundword = forbiddenwords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundword.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
}

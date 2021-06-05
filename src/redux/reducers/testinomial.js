export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_TESTINOMIAL":
      return action.payload;
    default:
      return state;
  }
};

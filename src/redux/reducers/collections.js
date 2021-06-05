export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_COLLECTION":
      return action.payload;
    default:
      return state;
  }
};
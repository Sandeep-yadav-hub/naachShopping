import { combineReducers } from "redux";

import collections from "./collections";
import blogs from "./blogs";
import testinomials from "./testinomial";
import products from "./products";

const rootReducer = combineReducers({
  collections,
  blogs,
  testinomials,
  products
});

export default (state, action) =>
  rootReducer(action.type === "USER_LOGOUT" ? undefined : state, action);

// export default (state, action) => rootReducer();
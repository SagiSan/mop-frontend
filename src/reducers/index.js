import { combineReducers } from "redux";

import test from "./testReducer";
import questionnaires from "./questionnairesReducer";
import auth from "./loginReducer";

export default combineReducers({
  test,
  questionnaires,
  auth
});

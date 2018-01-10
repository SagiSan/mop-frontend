import { combineReducers } from "redux";

import test from "./testReducer";
import questionnaires from "./questionnairesReducer";

export default combineReducers({
  test,
  questionnaires
});

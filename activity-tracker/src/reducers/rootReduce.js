import { combineReducers } from "redux";
import activityReducer from "./activitiesReducer";

const rootReduce = combineReducers({
  activities: activityReducer,
});

export default rootReduce;

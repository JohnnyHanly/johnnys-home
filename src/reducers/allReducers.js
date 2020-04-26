import { combineReducers } from "redux";
import currentTrack from "./currentTrackReducer";

const rootReducer = combineReducers({
  currentTrack
});

export default rootReducer;

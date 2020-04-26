import initialState from "./initialState";

import { FETCH_TRACK, RECEIVE_TRACK } from "../actions/allActions";

export default function currentTrack(
  state = initialState.currentTrack,
  action
) {
  let newState;
  console.log(action);
  switch (action.type) {
    case FETCH_TRACK:
      console.log("FETCH_TRACK Action");
      return action;
    case RECEIVE_TRACK:
      console.log("RECEIVE_TRACK Action");
      newState = action.currentTrack;
      return newState;
    default:
      return state;
  }
}

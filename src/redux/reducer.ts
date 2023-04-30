import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import photosReducer from "./photosSlice";

export const rootReducer = combineReducers({
  users: usersReducer,
  photos: photosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

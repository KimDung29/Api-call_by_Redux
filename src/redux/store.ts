import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { ThunkAction } from "redux-thunk";
import { fetchUsersAsync } from "./usersSlice";
import { fetchPhotosAsync } from "./photosSlice";
import rootReducer, { RootState } from "./reducer";

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, any>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export { fetchUsersAsync, fetchPhotosAsync };
export default store;

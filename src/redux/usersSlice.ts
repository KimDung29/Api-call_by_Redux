import {
  createSlice,
  createAsyncThunk,
  SerializedError,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { UserType } from "./apiCall";


interface UsersState {
  usersInfo: UserType[];
  isLoading: boolean;
  error: SerializedError | null;
}

const initialState: UsersState = {
  usersInfo: [],
  isLoading: false,
  error: null,
};

export const fetchUsersAsync = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await axios.get<UserType[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    onInputChange: (
      state,
      action: PayloadAction<{
        email: string;
        phone: string;
        website: string;
      }>
    ) => {
      state.usersInfo.map((user: UserType) => {
        user.email = action.payload.email;
        user.website = action.payload.website;
        user.phone = action.payload.phone;
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.usersInfo = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});
export const { onInputChange } = usersSlice.actions;

export default usersSlice.reducer;

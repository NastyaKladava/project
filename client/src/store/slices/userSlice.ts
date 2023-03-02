import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  isServerLoading,
  isServerError,
  isServerSuccess,
} from "../../utils/storeUtils";
import { loginUser, registerUser } from "../thunks";

import { IUserSlice } from "../types";

const initialState: IUserSlice = {
  userRegData: { firstName: "", lastName: "", email: "", password: "" },
  currentUser: null,
  isUserError: false,
  isUserLoading: false,
  isUserSuccess: false,
  errorUserMessage: null,
  successUserMessage: null,
  isLoggedIn: false,
  isRegistered: false,
  isAdmin: false,
};

const userSlice = createSlice({
  name: "registerData",
  initialState,
  reducers: {
    clearUserState: (state) => {
      state.userRegData = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      };
      state.isUserError = false;
      state.isUserLoading = false;
      state.isUserSuccess = false;
      state.errorUserMessage = null;
      state.successUserMessage = null;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isRegistered = true;
      state.isUserSuccess = true;
      state.successUserMessage = action.payload;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.isUserSuccess = true;
      state.currentUser = action.payload.user;
      state.successUserMessage = action.payload.message;
    });

    builder.addMatcher(
      isServerLoading,
      (state, action: PayloadAction<string>) => {
        state.isUserLoading = true;
      }
    );
    builder.addMatcher(
      isServerSuccess,
      (state, action: PayloadAction<string>) => {
        state.isUserLoading = false;
      }
    );
    builder.addMatcher(
      isServerError,
      (state, action: PayloadAction<string>) => {
        state.errorUserMessage = action.payload;
        state.isUserError = true;
        state.isUserLoading = false;
      }
    );
  },
});

export default userSlice.reducer;

export const { clearUserState, setIsLoggedIn } = userSlice.actions;

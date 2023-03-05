import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  isServerLoading,
  isServerError,
  isServerSuccess,
} from "../../utils/storeUtils";
import {
  changeUserStatus,
  deleteUser,
  getUsers,
  loginUser,
  registerUser,
} from "../thunks";

import { IUserSlice } from "../types";

const initialState: IUserSlice = {
  userRegData: { firstName: "", lastName: "", email: "", password: "" },
  users: [],
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
    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isUserSuccess = true;
      state.isRegistered = true;
      state.isUserSuccess = true;
      state.successUserMessage = action.payload;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isUserSuccess = true;
      state.isLoggedIn = true;
      state.currentUser = action.payload.user;
      state.successUserMessage = action.payload.message;
      if (state.currentUser.isAdmin) {
        state.isAdmin = true;
      }
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.isUserSuccess = true;
      state.users = action.payload;
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.isUserSuccess = true;
      state.users = state.users.filter(
        (item) => item._id !== action.payload.id
      );
    });

    builder.addCase(changeUserStatus.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.isUserSuccess = true;

      const user = state.users.find((user) => user._id === action.payload.id);
      if (user) {
        user.status === "active"
          ? (user.status = "blocked")
          : (user.status = "active");
      }
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

export const { clearUserState, setIsLoggedIn, setIsAdmin } = userSlice.actions;

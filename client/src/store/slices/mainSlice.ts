import { PaletteMode } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMainState } from "../types";

const initialState: IMainState = {
  isShowCollectionModal: false,
  isShowItemModal: false,
  isShowSnackbar: false,
  isShowPassword: false,
  infoMessage: null,
  isAppMode: false,
};

const mainSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    setShowCollectionModal: (state, action: PayloadAction<boolean>) => {
      state.isShowCollectionModal = action.payload;
    },
    setShowItemModal: (state, action: PayloadAction<boolean>) => {
      state.isShowItemModal = action.payload;
    },
    setShowSnackbar: (state, action: PayloadAction<boolean>) => {
      state.isShowSnackbar = action.payload;
    },
    setShowPassword: (state) => {
      state.isShowPassword = !state.isShowPassword;
    },
    setInfoMessage: (state, action: PayloadAction<string | null>) => {
      state.infoMessage = action.payload;
    },
    setAppMode: (state) => {
      state.isAppMode = !state.isAppMode;
    },
  },
});

export default mainSlice.reducer;

export const {
  setShowCollectionModal,
  setShowItemModal,
  setShowSnackbar,
  setShowPassword,
  setInfoMessage,
  setAppMode,
} = mainSlice.actions;

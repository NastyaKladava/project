import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IColDescr, ICollection, IMainState } from "../types";

const initialState: IMainState = {
  isShowCollectionModal: false,
  isShowColUpdateModal: false,
  isShowItemModal: false,
  isShowColItemUpdateModal: false,
  isShowSnackbar: false,
  isShowPassword: false,
  infoMessage: null,
  isAppMode: false,
  updatedCollection: undefined,
};

const mainSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    setShowCollectionModal: (state, action: PayloadAction<boolean>) => {
      state.isShowCollectionModal = action.payload;
    },
    setShowColUpdateModal: (state, action: PayloadAction<boolean>) => {
      state.isShowColUpdateModal = action.payload;
    },
    setShowItemModal: (state, action: PayloadAction<boolean>) => {
      state.isShowItemModal = action.payload;
    },
    setShowColItemUpdateModal: (state, action: PayloadAction<boolean>) => {
      state.isShowColItemUpdateModal = action.payload;
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
    setUpdatedCollection: (
      state,
      action: PayloadAction<ICollection | undefined>
    ) => {
      state.updatedCollection = action.payload;
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
  setShowColUpdateModal,
  setUpdatedCollection,
  setShowColItemUpdateModal,
} = mainSlice.actions;

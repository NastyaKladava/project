import { PaletteMode } from "@mui/material";
import type { RootState } from "../../store";
import { IColDescr, ICollection } from "../types";

export const isShowColModalSelector = (store: RootState): boolean => {
  return store.main.isShowCollectionModal;
};

export const isShowColUpdateModalSelector = (store: RootState): boolean => {
  return store.main.isShowColUpdateModal;
};

export const isShowItemModalSelector = (store: RootState): boolean => {
  return store.main.isShowItemModal;
};

export const isShowItemUpdateModalSelector = (store: RootState): boolean => {
  return store.main.isShowColItemUpdateModal;
};

export const isShowSnackbarSelector = (store: RootState): boolean => {
  return store.main.isShowSnackbar;
};

export const isShowPasswordSelector = (store: RootState): boolean => {
  return store.main.isShowPassword;
};

export const infoMessageSelector = (store: RootState): string | null => {
  return store.main.infoMessage;
};

export const isAppModeSelector = (store: RootState): boolean => {
  return store.main.isAppMode;
};

export const updatedCollectionSelector = (
  store: RootState
): ICollection | undefined => {
  return store.main.updatedCollection;
};

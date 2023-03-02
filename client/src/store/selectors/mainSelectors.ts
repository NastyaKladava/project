import { PaletteMode } from "@mui/material";
import type { RootState } from "../../store";

export const isShowColModalSelector = (store: RootState): boolean => {
  return store.main.isShowCollectionModal;
};

export const isShowItemModalSelector = (store: RootState): boolean => {
  return store.main.isShowItemModal;
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

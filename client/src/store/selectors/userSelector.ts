import type { RootState } from "..";
import { ICurUser, IuserRegData } from "../types";

export const userRegDataSelector = (store: RootState): IuserRegData =>
  store.user.userRegData;
export const curUserSelector = (store: RootState): ICurUser | null =>
  store.user.currentUser;

export const isUserSuccessSelector = (store: RootState): boolean =>
  store.user.isUserSuccess;

export const isUserLoadingSelector = (store: RootState): boolean =>
  store.user.isUserLoading;

export const isUserErrorSelector = (store: RootState): boolean =>
  store.user.isUserError;

export const isLoggedInSelector = (store: RootState): boolean =>
  store.user.isLoggedIn;

export const isRegisteredSelector = (store: RootState): boolean =>
  store.user.isRegistered;

export const isAdminSelector = (store: RootState): boolean =>
  store.user.isAdmin;

export const errorUserMessageSelector = (
  store: RootState
): string | null | undefined => store.user.errorUserMessage;

export const successUserMessageSelector = (
  store: RootState
): string | null | undefined => store.user.successUserMessage;

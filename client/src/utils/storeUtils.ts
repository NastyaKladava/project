import { AnyAction } from "@reduxjs/toolkit";

export const isServerError = (action: AnyAction) => {
  return action.type.endsWith("rejected");
};

export const isServerLoading = (action: AnyAction) => {
  return action.type.endsWith("pending");
};

export const isServerSuccess = (action: AnyAction) => {
  return action.type.endsWith("fulfilled");
};

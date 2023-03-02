import type { RootState } from "../../store";
import { ICollectionItem } from "../types";

export const collectionItemsDataSelector = (
  store: RootState
): ICollectionItem[] | [] => {
  return store.collectionItem.itemsData;
};

export const latestItemsSelector = (store: RootState): ICollectionItem[] | [] =>
  store.collectionItem.latestItemsData;

export const isColItemSuccessSelector = (store: RootState): boolean =>
  store.collectionItem.isColItemSuccess;

export const isColItemLoadingSelector = (store: RootState): boolean =>
  store.collectionItem.isColItemLoading;

export const isColItemErrorSelector = (store: RootState): boolean =>
  store.collectionItem.isColItemError;

export const errorColItemMessageSelector = (
  store: RootState
): string | null | undefined => store.collectionItem.errorColItemMessage;

export const successColItemMessageSelector = (
  store: RootState
): string | null | undefined => store.collectionItem.successColItemMessage;

import { EditorState } from "draft-js";
import type { RootState } from "../../store";
import { ICollection } from "../types";

export const collectionsDataSelector = (
  store: RootState
): ICollection[] | [] => {
  return store.collection.collectionsData;
};

export const curCollectionSelector = (store: RootState): ICollection | null =>
  store.collection.currentCollection;

export const trendCollectionSelector = (store: RootState): ICollection[] | [] =>
  store.collection.trendCollections;

export const imageUrlSelector = (store: RootState): string | null =>
  store.collection.imageUrl;

export const imgUploadProgSelector = (store: RootState): number =>
  store.collection.imageUploadProgress;

export const isCollectionSuccessSelector = (store: RootState): boolean =>
  store.collection.isCollectionSuccess;

export const isCollectionLoadingSelector = (store: RootState): boolean =>
  store.collection.isCollectionLoading;

export const isCollectionErrorSelector = (store: RootState): boolean =>
  store.collection.isCollectionError;

export const errorCollectionMessageSelector = (
  store: RootState
): string | null | undefined => store.collection.errorCollectionMessage;

export const successCollectionMessageSelector = (
  store: RootState
): string | null | undefined => store.collection.successCollectionMessage;

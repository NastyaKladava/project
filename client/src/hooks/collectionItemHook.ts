import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { SNACKBARTIMER } from "../shared/constants/common";
import { TimerIdType } from "../shared/types";
import {
  collectionItemsDataSelector,
  errorColItemMessageSelector,
  isColItemErrorSelector,
  isColItemLoadingSelector,
  isColItemSuccessSelector,
  successColItemMessageSelector,
  updatedColItemSelector,
} from "../store/selectors/collectionItemSelector";
import { curCollectionSelector } from "../store/selectors/collectionSelector";
import { curUserSelector } from "../store/selectors/userSelector";
import {
  setColItemError,
  setColItemSuccess,
  setUpdatedColItem,
} from "../store/slices/collectionItemSlice";
import {
  setShowColItemUpdateModal,
  setShowSnackbar,
  setShowItemModal,
} from "../store/slices/mainSlice";
import { getCollection, getUserColItems } from "../store/thunks";
import { useAppDispatch, useAppSelector } from "./commonHooks";

export const useCollectionItem = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const isColItemSuccess = useAppSelector(isColItemSuccessSelector);
  const isColItemError = useAppSelector(isColItemErrorSelector);
  const isColItemLoading = useAppSelector(isColItemLoadingSelector);
  const errorColItemMessage = useAppSelector(errorColItemMessageSelector);
  const currentCollection = useAppSelector(curCollectionSelector);
  const currentFields = currentCollection?.collectionFields;
  const collectionItemsData = useAppSelector(collectionItemsDataSelector);
  const currentUser = useAppSelector(curUserSelector);
  const successColItemMessage = useAppSelector(successColItemMessageSelector);
  const updatedColItem = useAppSelector(updatedColItemSelector);

  useEffect(() => {
    if (pathname === `/collection/${id}`) {
      dispatch(getCollection(id));
      dispatch(getUserColItems(id));
    }
  }, [dispatch, id, pathname]);

  useEffect(() => {
    let timerId: TimerIdType;

    if (isColItemSuccess && successColItemMessage) {
      dispatch(setShowSnackbar(true));
      timerId = setTimeout(() => {
        dispatch(setColItemSuccess(false));
        dispatch(setShowColItemUpdateModal(false));
        dispatch(setUpdatedColItem(undefined));
        dispatch(setShowItemModal(false));
      }, SNACKBARTIMER);
    }

    if (isColItemError && errorColItemMessage) {
      dispatch(setShowSnackbar(true));
      timerId = setTimeout(
        () => dispatch(setColItemError(false)),
        SNACKBARTIMER
      );
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [
    isColItemSuccess,
    isColItemError,
    errorColItemMessage,
    successColItemMessage,
    dispatch,
  ]);

  return {
    isColItemSuccess,
    isColItemError,
    isColItemLoading,
    errorColItemMessage,
    pathname,
    collectionItemsData,
    currentFields,
    id,
    currentCollection,
    currentUser,
    successColItemMessage,
    updatedColItem,
  };
};

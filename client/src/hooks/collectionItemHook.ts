import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SNACKBARTIMER } from "../shared/constants/common";
import { TimerIdType } from "../shared/types";
import {
  collectionItemsDataSelector,
  errorColItemMessageSelector,
  isColItemErrorSelector,
  isColItemLoadingSelector,
  isColItemSuccessSelector,
  successColItemMessageSelector,
} from "../store/selectors/collectionItemSelector";
import { curCollectionSelector } from "../store/selectors/collectionSelector";
import { curUserSelector } from "../store/selectors/userSelector";
import {
  setColItemError,
  setColItemSuccess,
} from "../store/slices/collectionItemSlice";
import { setShowSnackbar } from "../store/slices/mainSlice";
import { getCollection, getUserColItems } from "../store/thunks";
import { useAppDispatch, useAppSelector } from "./commonHooks";

export const useCollectionItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === `/collection/${id}`) {
      dispatch(getCollection(id));
      dispatch(getUserColItems(id));
    }
  }, []);

  useEffect(() => {
    let timerId: TimerIdType;

    if (isColItemSuccess) {
      dispatch(setShowSnackbar(true));
      timerId = setTimeout(() => {
        //  dispatch(setShowItemModal(false));
        dispatch(setColItemSuccess(false));
      }, SNACKBARTIMER);
    }

    if (isColItemError) {
      dispatch(setShowSnackbar(true));
      timerId = setTimeout(
        () => dispatch(setColItemError(false)),
        SNACKBARTIMER
      );
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isColItemSuccess, isColItemError]);

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
  };
};

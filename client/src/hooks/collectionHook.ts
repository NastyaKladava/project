import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  errorColItemMessageSelector,
  isColItemErrorSelector,
  isColItemLoadingSelector,
  isColItemSuccessSelector,
  latestItemsSelector,
  successColItemMessageSelector,
} from "../store/selectors/collectionItemSelector";
import {
  collectionsDataSelector,
  curCollectionSelector,
  errorCollectionMessageSelector,
  isCollectionErrorSelector,
  isCollectionLoadingSelector,
  isCollectionSuccessSelector,
  successCollectionMessageSelector,
  trendCollectionSelector,
} from "../store/selectors/collectionSelector";

import {
  infoMessageSelector,
  isShowColModalSelector,
} from "../store/selectors/mainSelectors";
import {
  setInfoMessage,
  setShowCollectionModal,
  setShowSnackbar,
} from "../store/slices/mainSlice";
import {
  getCollection,
  getLatestColItems,
  getTrendCollection,
  getUserCollections,
} from "../store/thunks";
import { useAppDispatch, useAppSelector } from "./commonHooks";
import {
  setCollectionError,
  setCollectionSuccess,
  setImageUploadProgress,
  setImageUrl,
} from "../store/slices/collectionSlice";
import { SNACKBARTIMER, TIMERDELAY } from "../shared/constants/common";
import {
  setColItemError,
  setColItemSuccess,
} from "../store/slices/collectionItemSlice";
import { TimerIdType } from "../shared/types";

export const useCollection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isShowCollectionModal = useAppSelector(isShowColModalSelector);
  const infoMessage = useAppSelector(infoMessageSelector);

  //collection
  const isCollectionSuccess = useAppSelector(isCollectionSuccessSelector);
  const isCollectionError = useAppSelector(isCollectionErrorSelector);
  const isCollectionLoading = useAppSelector(isCollectionLoadingSelector);
  const errorCollectionMessage = useAppSelector(errorCollectionMessageSelector);
  const collectionsData = useAppSelector(collectionsDataSelector);
  const currentCollection = useAppSelector(curCollectionSelector);
  const currentFields = currentCollection?.collectionFields;
  const currentItems = currentCollection?.collectionItems;
  const trendCollections = useAppSelector(trendCollectionSelector);
  const successCollectionMessage = useAppSelector(
    successCollectionMessageSelector
  );

  //collection item
  const latestItems = useAppSelector(latestItemsSelector);
  const isColItemSuccess = useAppSelector(isColItemSuccessSelector);
  const isColItemError = useAppSelector(isColItemErrorSelector);
  const isColItemLoading = useAppSelector(isColItemLoadingSelector);
  const errorColItemMessage = useAppSelector(errorColItemMessageSelector);
  const successColItemMessage = useAppSelector(successColItemMessageSelector);

  const { pathname } = useLocation();

  useEffect(() => {
    let timerId: TimerIdType;
    if (pathname === "/") {
      timerId = setTimeout(() => {
        dispatch(getLatestColItems());
      }, TIMERDELAY);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [latestItems]);

  useEffect(() => {
    if (pathname === "/profile") {
      dispatch(getUserCollections());
    }
    if (pathname === `/collection/${id}`) {
      dispatch(getCollection(id));
    }
    if (pathname === "/") {
      dispatch(getTrendCollection());
      dispatch(getLatestColItems());
    }
  }, [pathname, id]);

  useEffect(() => {
    let timerId: TimerIdType;

    if (isCollectionSuccess) {
      dispatch(setShowSnackbar(true));
      timerId = setTimeout(() => {
        dispatch(setShowCollectionModal(false));
        dispatch(setCollectionSuccess(false));
        dispatch(setColItemSuccess(false));
        dispatch(setImageUrl(null));
        dispatch(setImageUploadProgress(0));
      }, SNACKBARTIMER);
      console.log(timerId);
    }

    if (infoMessage) {
      dispatch(setShowSnackbar(true));
      timerId = setTimeout(() => dispatch(setInfoMessage(null)), SNACKBARTIMER);
    }

    if (isColItemError) {
      dispatch(setShowSnackbar(true));
      timerId = setTimeout(
        () => dispatch(setColItemError(false)),
        SNACKBARTIMER
      );
      setTimeout(() => dispatch(setCollectionError(false)), SNACKBARTIMER);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [
    isCollectionSuccess,
    isCollectionError,
    isColItemError,
    isColItemSuccess,
    infoMessage,
  ]);

  return {
    isCollectionSuccess,
    isCollectionError,
    isCollectionLoading,
    errorCollectionMessage,
    isShowCollectionModal,
    collectionsData,
    currentCollection,
    currentFields,
    currentItems,
    trendCollections,
    pathname,
    latestItems,
    id,
    isColItemSuccess,
    isColItemError,
    isColItemLoading,
    errorColItemMessage,
    successCollectionMessage,
    successColItemMessage,
    infoMessage,
  };
};

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SNACKBARTIMER } from "../shared/constants/common";
import routes from "../shared/constants/routes";
import { TimerIdType } from "../shared/types";
import {
  errorUserMessageSelector,
  isLoggedInSelector,
  isRegisteredSelector,
  isUserErrorSelector,
  isUserLoadingSelector,
  isUserSuccessSelector,
  successUserMessageSelector,
} from "../store/selectors/userSelector";
import { setShowSnackbar } from "../store/slices/mainSlice";
import { clearUserState } from "../store/slices/userSlice";
import { useAppDispatch, useAppSelector } from "./commonHooks";

export const useRegister = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isUserSuccess = useAppSelector(isUserSuccessSelector);
  const isUserError = useAppSelector(isUserErrorSelector);
  const isUserLoading = useAppSelector(isUserLoadingSelector);
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const isRegistered = useAppSelector(isRegisteredSelector);
  const errorUserMessage = useAppSelector(errorUserMessageSelector);
  const successUserMessage = useAppSelector(successUserMessageSelector);

  useEffect(() => {
    return () => {
      dispatch(clearUserState());
    };
  }, []);

  useEffect(() => {
    let timerId: TimerIdType;

    if (isUserSuccess) {
      dispatch(setShowSnackbar(true));
      // dispatch(setIsLoggedIn(true));
      timerId = setTimeout(() => {
        dispatch(clearUserState());
        navigate(routes.HOME);
      }, SNACKBARTIMER);
    }

    if (isUserError) {
      dispatch(setShowSnackbar(true));
      //dispatch(clearUserState());
      timerId = setTimeout(
        () => dispatch(dispatch(clearUserState())),
        SNACKBARTIMER
      );
      console.log(timerId);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [isUserSuccess, isUserError]);

  return {
    isUserSuccess,
    isUserError,
    isUserLoading,
    isRegistered,
    isLoggedIn,
    errorUserMessage,
    successUserMessage,
  };
};

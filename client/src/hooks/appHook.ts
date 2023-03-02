import React, { useEffect } from "react";
import localStorageKeys from "../shared/constants/localStorageKeys";
import { setIsLoggedIn } from "../store/slices/userSlice";
import { useAppDispatch } from "./commonHooks";

export const useApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem(localStorageKeys.TOKEN))
      dispatch(setIsLoggedIn(true));
  }, []);
};

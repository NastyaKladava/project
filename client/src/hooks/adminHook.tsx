import React, { useEffect } from "react";
import localStorageKeys from "../shared/constants/localStorageKeys";
import { usersSelector } from "../store/selectors/userSelector";
import { setIsLoggedIn } from "../store/slices/userSlice";
import { getUsers } from "../store/thunks";
import { useAppDispatch, useAppSelector } from "./commonHooks";

export const useAdmin = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(usersSelector);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return { users };
};

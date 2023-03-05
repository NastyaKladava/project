import React, { useEffect } from "react";
import { isColItemLoadingSelector } from "../store/selectors/collectionItemSelector";
import {
  isUserLoadingSelector,
  usersSelector,
} from "../store/selectors/userSelector";
import { getUsers } from "../store/thunks";
import { useAppDispatch, useAppSelector } from "./commonHooks";

export const useAdmin = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(usersSelector);
  const isUsersLoadign = useAppSelector(isUserLoadingSelector);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return { users, isUsersLoadign };
};

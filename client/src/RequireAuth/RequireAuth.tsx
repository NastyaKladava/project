import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/commonHooks";
import { REQAUTHMESSAGE } from "../shared/constants/common";
import routes from "../shared/constants/routes";
import { isLoggedInSelector } from "../store/selectors/userSelector";
import { setInfoMessage, setShowSnackbar } from "../store/slices/mainSlice";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  if (!isLoggedIn) {
    dispatch(setInfoMessage(REQAUTHMESSAGE));
    return <Navigate to={routes.HOME} replace />;
  }

  return children;
};

export default RequireAuth;

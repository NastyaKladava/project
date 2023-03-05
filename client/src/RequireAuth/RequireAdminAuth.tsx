import React from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/commonHooks";
import { REQADMINMESSAGE } from "../shared/constants/common";
import routes from "../shared/constants/routes";
import { isAdminSelector } from "../store/selectors/userSelector";
import { setInfoMessage } from "../store/slices/mainSlice";

const RequireAdminAuth = ({ children }: { children: JSX.Element }) => {
  const dispatch = useAppDispatch();
  const isAdmin = useAppSelector(isAdminSelector);

  if (!isAdmin) {
    dispatch(setInfoMessage(REQADMINMESSAGE));
    return <Navigate to={routes.HOME} replace />;
  }

  return children;
};

export default RequireAdminAuth;

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/commonHooks";
import routes from "../shared/constants/routes";
import { isAdminSelector } from "../store/selectors/userSelector";

const RequireAdminAuth = ({ children }: { children: JSX.Element }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isAdmin = useAppSelector(isAdminSelector);

  if (!isAdmin) {
    return <Navigate to={routes.HOME} replace />;
  }

  return children;
};

export default RequireAdminAuth;

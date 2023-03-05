import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import localStorageKeys from "../shared/constants/localStorageKeys";
import { setIsLoggedIn } from "../store/slices/userSlice";
import { useAppDispatch } from "./commonHooks";

export const useApp = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const currentLanguage = localStorage.getItem(localStorageKeys.LANGUAGE);

  // useEffect(() => {
  //   if (localStorage.getItem(localStorageKeys.TOKEN))
  //     dispatch(setIsLoggedIn(true));
  // }, []);

  useEffect(() => {
    document.title = t("app_title");
  }, [currentLanguage, t]);
};

import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  AccountBox,
  Home,
  ModeNight,
  Logout,
  LightMode,
  ArrowBackIosNewOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import localStorageKeys from "../../shared/constants/localStorageKeys";
import { setIsAdmin, setIsLoggedIn } from "../../store/slices/userSlice";
import { setAppMode } from "../../store/slices/mainSlice";
import { isAppModeSelector } from "../../store/selectors/mainSelectors";
import { isAdminSelector } from "../../store/selectors/userSelector";
import { clearColItemState } from "../../store/slices/collectionItemSlice";
import { clearCollectionState } from "../../store/slices/collectionSlice";
import { clearUserState } from "../../store/slices/userSlice";
import { useTranslation } from "react-i18next";

const UserMenuList: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAppMode = useAppSelector(isAppModeSelector);
  const isAdmin = useAppSelector(isAdminSelector);

  const handleLogOut = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.removeItem(localStorageKeys.TOKEN);
    dispatch(setIsLoggedIn(false));
    dispatch(setIsAdmin(false));
    dispatch(clearColItemState());
    dispatch(clearCollectionState());
    dispatch(clearUserState());
    navigate("/");
  };
  const navigateToHome = () => navigate("/");
  const navigateToProfile = () => {
    isAdmin ? navigate("/users") : navigate("/profile");
  };

  const goBack = () => navigate(-1);
  const changeAppMode = () => dispatch(setAppMode());

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={navigateToHome}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary={t("userMenu.homePage")} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={goBack}>
          <ListItemIcon>
            <ArrowBackIosNewOutlined />
          </ListItemIcon>
          <ListItemText primary={t("userMenu.goback")} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={navigateToProfile}>
          <ListItemIcon>
            <AccountBox />
          </ListItemIcon>
          <ListItemText primary={t("userMenu.profile")} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a">
          <ListItemIcon>
            {isAppMode ? <ModeNight /> : <LightMode />}
          </ListItemIcon>
          <Switch onChange={changeAppMode} />
        </ListItemButton>
      </ListItem>
      {/* <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Language />
          </ListItemIcon>
          <Switch onChange={changeLanguage} />
        </ListItemButton>
      </ListItem> */}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <Switch onChange={handleLogOut} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default UserMenuList;

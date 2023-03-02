import React from "react";
import {
  Box,
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
  Person,
  Settings,
  Language,
  Logout,
  LightMode,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import localStorageKeys from "../../shared/constants/localStorageKeys";
import { setIsLoggedIn } from "../../store/slices/userSlice";
import { setAppMode } from "../../store/slices/mainSlice";
import { isAppModeSelector } from "../../store/selectors/mainSelectors";
import { changeLanguage } from "../../utils/changeLanguage";

const UserMenuList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAppMode = useAppSelector(isAppModeSelector);

  const handleLogOut = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.removeItem(localStorageKeys.TOKEN);
    dispatch(setIsLoggedIn(false));
    navigate("/");
  };
  const navigateToHome = () => navigate("/");
  const navigateToProfile = () => navigate("/profile");
  const changeAppMode = () => dispatch(setAppMode());

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={navigateToHome}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Homepage" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={navigateToProfile}>
          <ListItemIcon>
            <AccountBox />
          </ListItemIcon>
          <ListItemText primary="Profile" />
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
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Language />
          </ListItemIcon>
          <Switch onChange={changeLanguage} />
        </ListItemButton>
      </ListItem>
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

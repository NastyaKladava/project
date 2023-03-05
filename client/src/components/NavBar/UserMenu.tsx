import React from "react";
import { Divider, IconButton, Menu, styled, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import { useNavigate } from "react-router-dom";
import { UserMenuAnchorType } from "../../shared/types";
import UserMenuList from "./UserMenuList";
import { curUserSelector } from "../../store/selectors/userSelector";
import { useTranslation } from "react-i18next";

const StyledTextMenuItem = styled("li")(({ theme }) => ({
  display: "block",
  padding: theme.spacing(4),
}));

const StyledIconBtn = styled(IconButton)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(),
  padding: theme.spacing(),
  color: "inherit",
  fontSize: "inherit",
}));

const UserMenu: React.FC<UserMenuAnchorType> = ({ anchorEl, setAnchorEl }) => {
  const { t } = useTranslation();
  const currentUser = useAppSelector(curUserSelector);

  const closeMenu = (e: React.MouseEvent<HTMLAnchorElement>) =>
    setAnchorEl(null);
  const openMenu = (e: any) => setAnchorEl(e.currentTarget);

  return (
    <Menu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={closeMenu}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <StyledTextMenuItem>
        <Typography>{t("signedInAs")}</Typography>
        <Typography>{currentUser?.firstName}</Typography>
      </StyledTextMenuItem>
      <Divider />
      <UserMenuList />
    </Menu>
  );
};

export default UserMenu;

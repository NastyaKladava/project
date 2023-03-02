import React from "react";
import { Box, Button, IconButton, Link, styled } from "@mui/material";
import { Language, LightMode, ModeNight } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import { isLoggedInSelector } from "../../store/selectors/userSelector";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import routes from "../../shared/constants/routes";
import AppButton from "../Buttons/AppButton";
import AppIconButton from "../Buttons/AppIconButton";
import { setAppMode } from "../../store/slices/mainSlice";
import { isAppModeSelector } from "../../store/selectors/mainSelectors";
import { changeLanguage } from "../../utils/changeLanguage";
import { EmojiFlags } from "@mui/icons-material";
import i18next from "i18next";

const ButtonGroup = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "5px",
});

const NavButtons: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isAppMode = useAppSelector(isAppModeSelector);
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const changeAppMode = () => dispatch(setAppMode());

  return (
    <ButtonGroup>
      <IconButton
        aria-label="change language"
        color="inherit"
        onClick={() => i18next.changeLanguage("ru")}
      >
        <Language />
      </IconButton>
      <IconButton
        aria-label="change language"
        color="inherit"
        onClick={() => i18next.changeLanguage("en")}
      >
        <EmojiFlags />
      </IconButton>
      <IconButton
        aria-label="change mode"
        color="inherit"
        onClick={changeAppMode}
      >
        {isAppMode ? <ModeNight /> : <LightMode />}
      </IconButton>
      {!isLoggedIn && (
        <Box>
          <AppButton
            variant="text"
            color="inherit"
            handler={() => navigate(`${routes.SIGIN}`)}
          >
            SignIn
          </AppButton>
          <AppButton
            variant="outlined"
            color="inherit"
            handler={() => navigate(`${routes.SIGNUP}`)}
          >
            SignUp
          </AppButton>
        </Box>
      )}
    </ButtonGroup>
  );
};

<Link to={routes.SIGNUP} component={RouterLink} variant="body2">
  "Don't have an account? Sign Up"
</Link>;

export default NavButtons;

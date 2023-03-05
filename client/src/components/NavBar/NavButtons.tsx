import React from "react";
import { Box, IconButton, styled } from "@mui/material";
import { LightMode, ModeNight } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import { isLoggedInSelector } from "../../store/selectors/userSelector";
import { useNavigate } from "react-router-dom";
import routes from "../../shared/constants/routes";
import AppButton from "../Buttons/AppButton";
import { setAppMode } from "../../store/slices/mainSlice";
import { isAppModeSelector } from "../../store/selectors/mainSelectors";
import LanguageButtons from "../Buttons/LanguageButtons";
import { useTranslation } from "react-i18next";

const ButtonGroup = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "5px",
});

const NavButtons: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isAppMode = useAppSelector(isAppModeSelector);
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  const changeAppMode = () => dispatch(setAppMode());

  return (
    <ButtonGroup>
      <LanguageButtons />
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
            {t("sign_in")}
          </AppButton>
          <AppButton
            variant="outlined"
            color="inherit"
            handler={() => navigate(`${routes.SIGNUP}`)}
            sx={{ display: { xs: "none", sm: "inline-block" } }}
          >
            {t("sign_up")}
          </AppButton>
        </Box>
      )}
    </ButtonGroup>
  );
};

export default NavButtons;

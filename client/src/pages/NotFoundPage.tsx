import React from "react";
import { Container, styled, Typography } from "@mui/material";
import AppCenterContainer from "../components/Containers/AppCenterContainer";
import AppButton from "../components/Buttons/AppButton";
import { useNavigate } from "react-router-dom";
import routes from "../shared/constants/routes";
import { useTranslation } from "react-i18next";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const redirectToHome = () => navigate(routes.HOME);

  return (
    <AppCenterContainer>
      <Typography variant="h3" mb={10}>
        404
      </Typography>
      <Typography variant="h6" mb={10}>
        {t("notFountPage")}
      </Typography>
      <AppButton type="button" variant="contained" handler={redirectToHome}>
        {t("buttons.goHome")}
      </AppButton>
    </AppCenterContainer>
  );
};

export default NotFoundPage;

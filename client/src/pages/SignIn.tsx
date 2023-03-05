import React from "react";
import { Avatar, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useRegister } from "../hooks/registerHook";
import SignInForm from "../components/Forms/SignInForm";
import AppCenterContainer from "../components/Containers/AppCenterContainer";
import AppSnackbar from "../components/Popovers/AppSnackbar";
import { useTranslation } from "react-i18next";

const SignIn: React.FC = () => {
  const { t } = useTranslation();
  const { errorUserMessage, successUserMessage } = useRegister();

  return (
    <AppCenterContainer>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h2" variant="h5">
        {t("sign_in")}
      </Typography>
      <SignInForm />
      {errorUserMessage && (
        <AppSnackbar message={errorUserMessage} severity="error" />
      )}
      {successUserMessage && (
        <AppSnackbar message={successUserMessage} severity="success" />
      )}
    </AppCenterContainer>
  );
};

export default SignIn;

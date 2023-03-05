import React from "react";
import { Avatar, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useRegister } from "../hooks/registerHook";
import SignUpForm from "../components/Forms/SignUpForm";
import AppCenterContainer from "../components/Containers/AppCenterContainer";
import AppSnackbar from "../components/Popovers/AppSnackbar";
import { useTranslation } from "react-i18next";

const SignUp: React.FC = () => {
  const { t } = useTranslation();
  const { errorUserMessage, successUserMessage } = useRegister();

  return (
    <AppCenterContainer>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        {t("sign_up")}
      </Typography>
      <SignUpForm />
      {errorUserMessage && (
        <AppSnackbar message={errorUserMessage} severity="error" />
      )}
      {successUserMessage && (
        <AppSnackbar message={successUserMessage} severity="success" />
      )}
    </AppCenterContainer>
  );
};

export default SignUp;

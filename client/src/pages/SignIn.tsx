import React from "react";
import { Box, Avatar, Typography, styled, Container } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../hooks/commonHooks";
import { curUserSelector } from "../store/selectors/userSelector";
import { loginUser } from "../store/thunks";
import { useRegister } from "../hooks/registerHook";
import SignInForm from "../components/Forms/SignInForm";
import AppCenterContainer from "../components/Containers/AppCenterContainer";
import AppSnackbar from "../components/Popovers/AppSnackbar";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const curUser = useAppSelector(curUserSelector);
  const {
    isUserError,
    isUserLoading,
    isUserSuccess,
    isLoggedIn,
    errorUserMessage,
    successUserMessage,
  } = useRegister();

  console.log(isUserSuccess);

  return (
    <AppCenterContainer>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h2" variant="h5">
        Sign in
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

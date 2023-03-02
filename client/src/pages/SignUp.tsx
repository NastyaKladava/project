import React from "react";
import { Avatar, Box, styled, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../hooks/commonHooks";
import { userRegDataSelector } from "../store/selectors/userSelector";
import { registerUser } from "../store/thunks";
import { useRegister } from "../hooks/registerHook";
import SignUpForm from "../components/Forms/SignUpForm";
import AppCenterContainer from "../components/Containers/AppCenterContainer";
import AppSnackbar from "../components/Popovers/AppSnackbar";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    isUserError,
    isUserLoading,
    isUserSuccess,
    isRegistered,
    errorUserMessage,
    successUserMessage,
  } = useRegister();

  return (
    <AppCenterContainer>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
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

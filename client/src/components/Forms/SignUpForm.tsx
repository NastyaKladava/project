import React from "react";
import { Button, Grid, IconButton, InputAdornment, Link } from "@mui/material";
import Form from "./Form";
import FormField from "./FormField";
import { Link as RouterLink } from "react-router-dom";
import routes from "../../shared/constants/routes";
import { sigUpFields } from "../../shared/constants/formFields";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import { loginUser, registerUser } from "../../store/thunks";
import { isShowPasswordSelector } from "../../store/selectors/mainSelectors";
import { setShowPassword } from "../../store/slices/mainSlice";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const SignUpForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const isShowPassword = useAppSelector(isShowPasswordSelector);
  const passwordType = isShowPassword ? "text" : "password";
  const handleClickShowPassword = () => dispatch(setShowPassword());
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const IPasswordInputProps = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {isShowPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  };

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data: any) => {
    dispatch(registerUser(data));
    reset();
  };
  return (
    <Form handleData={handleSubmit(onSubmit)}>
      {sigUpFields.map((field) => (
        <FormField key={field.id} {...field} control={control} />
      ))}
      <FormField
        id="password"
        name="password"
        label="Password"
        autoComplete="new-password"
        defaultValue=""
        errorMessage="Password is required"
        control={control}
        type={passwordType}
        InputProps={IPasswordInputProps}
      />
      <Button
        type="submit"
        disabled={!isValid}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 5 }}
      >
        {t("sign_up")}
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link to={routes.SIGNUP} component={RouterLink} variant="body2">
            {t("yesAccount")}
          </Link>
        </Grid>
      </Grid>
    </Form>
  );
};

export default SignUpForm;

import React from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Snackbar } from "@mui/material";
import { ISnackbarProps } from "../../shared/types";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import { setShowSnackbar } from "../../store/slices/mainSlice";
import { isShowSnackbarSelector } from "../../store/selectors/mainSelectors";
import { SNACKBARHIDE } from "../../shared/constants/common";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AppSnackbar: React.FC<ISnackbarProps> = ({ severity, message }) => {
  const dispatch = useAppDispatch();
  const isShowSnackbar = useAppSelector(isShowSnackbarSelector);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setShowSnackbar(false));
  };

  return (
    <Snackbar
      open={isShowSnackbar}
      autoHideDuration={SNACKBARHIDE}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackbar;

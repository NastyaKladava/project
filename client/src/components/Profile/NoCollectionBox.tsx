import React from "react";
import { Box, styled, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AppButton from "../Buttons/AppButton";
import { setShowCollectionModal } from "../../store/slices/mainSlice";
import { useAppDispatch } from "../../hooks/commonHooks";
import { INoCollectionProps } from "../../shared/types";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
}));

const NoCollectionBox: React.FC<INoCollectionProps> = ({
  mainText,
  buttonHandler,
}) => {
  return (
    <StyledBox>
      <Typography mb={7} textAlign="center">
        {mainText}
      </Typography>
      <AppButton
        type="button"
        handler={buttonHandler}
        endIcon={<AddIcon />}
        variant="contained"
      >
        Add
      </AppButton>
    </StyledBox>
  );
};

export default NoCollectionBox;

import React from "react";
import { Box, styled, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AppButton from "../Buttons/AppButton";
import { INoCollectionProps } from "../../shared/types";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
        {t("buttons.add")}
      </AppButton>
    </StyledBox>
  );
};

export default NoCollectionBox;

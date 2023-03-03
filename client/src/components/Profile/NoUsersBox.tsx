import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
}));

const NoUsersBox: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledBox>
      <Typography mb={7} textAlign="center">
        {t("noUser")}
      </Typography>
    </StyledBox>
  );
};

export default NoUsersBox;

import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { FolderOpen } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const StyledGridOverlay = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
}));

const NoRowsOverlay: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledGridOverlay>
      <FolderOpen fontSize="large" />
      <Typography variant="h6" sx={{ mt: 1 }}>
        {t("table.noRows")}
      </Typography>
    </StyledGridOverlay>
  );
};

export default NoRowsOverlay;

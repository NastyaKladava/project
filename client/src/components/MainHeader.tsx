import React from "react";
import { Typography } from "@mui/material";
import { IMainHeaderProps } from "../shared/types";
import { useTranslation } from "react-i18next";

const MainHeader: React.FC<IMainHeaderProps> = ({ title }) => {
  const { t } = useTranslation();
  return (
    <Typography variant="h1" component="h1" textAlign="center" gutterBottom>
      {t("main_header")}
    </Typography>
  );
};

export default MainHeader;

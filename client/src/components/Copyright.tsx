import React from "react";
import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import routes from "../shared/constants/routes";
import { getYear } from "../utils/dates";
import { useTranslation } from "react-i18next";

const Copyright: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        to={routes.HOME}
        component={RouterLink}
        variant="body2"
        color="inherit"
      >
        {t("buttons.goHome")}
      </Link>
      {getYear() + "."}
    </Typography>
  );
};

export default Copyright;

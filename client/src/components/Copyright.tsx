import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import routes from "../shared/constants/routes";
import { getYear } from "../utils/dates";
import { useTranslation } from "react-i18next";

const CopyRight: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography variant="body2" color="text.secondary" align="center">
        {"CopyRight © "}
        <Link
          to={routes.HOME}
          component={RouterLink}
          variant="body2"
          color="inherit"
          sx={{ mr: 2 }}
        >
          {t("buttons.goHome")}
        </Link>
        {getYear() + "."}
      </Typography>
    </Box>
  );
};

export default CopyRight;

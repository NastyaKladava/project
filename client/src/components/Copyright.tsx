import React from "react";
import { Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import routes from "../shared/constants/routes";
import { getYear } from "../utils/dates";

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link
        to={routes.HOME}
        component={RouterLink}
        variant="body2"
        color="inherit"
      >
        Already have an account? Sign in
      </Link>
      {getYear() + "."}
    </Typography>
  );
};

export default Copyright;

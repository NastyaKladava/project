import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CopyRight from "./CopyRight";
import { styled } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: ` ${theme.spacing(10)} 0`,
}));

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledBox component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        {t("footer.title")}
      </Typography>
      <CopyRight />
    </StyledBox>
  );
};

export default Footer;

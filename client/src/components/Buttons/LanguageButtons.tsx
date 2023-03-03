import React from "react";
import { Box, Divider, styled } from "@mui/material";
import AppButton from "./AppButton";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "fit-content",
}));

const LanguageButtons: React.FC = () => {
  const { t } = useTranslation();
  const setRussianLang = () => i18next.changeLanguage("ru");
  const setEnglishLang = () => i18next.changeLanguage("en");

  return (
    <StyledBox>
      <AppButton
        type="button"
        variant="text"
        handler={setEnglishLang}
        color="inherit"
      >
        {t("eng")}
      </AppButton>
      <Divider orientation="vertical" variant="middle" flexItem />
      <AppButton
        type="button"
        variant="text"
        handler={setRussianLang}
        color="inherit"
      >
        {t("ru")}
      </AppButton>
    </StyledBox>
  );
};

export default LanguageButtons;

import i18next from "i18next";

const currentLanguage = localStorage.getItem("i18nextLng");

export const changeLanguage = () => {
  console.log(currentLanguage);
  currentLanguage === "en"
    ? i18next.changeLanguage("ru")
    : i18next.changeLanguage("en");
};

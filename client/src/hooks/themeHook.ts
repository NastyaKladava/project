import { isAppModeSelector } from "../store/selectors/mainSelectors";
import { useAppSelector } from "./commonHooks";
import { createTheme } from "@mui/material";

export const useAppTheme = () => {
  const isAppMode = useAppSelector(isAppModeSelector);

  const theme = createTheme({
    typography: {
      fontFamily: "Roboto",
    },
    spacing: 2,
    palette: { mode: isAppMode ? "dark" : "light" },
  });

  return { theme, isAppMode };
};

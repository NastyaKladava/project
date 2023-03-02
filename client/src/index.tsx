import React, { Suspense } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./store";
import { useAppSelector } from "./hooks/commonHooks";
import { isAppModeSelector } from "./store/selectors/mainSelectors";
import "./utils/i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Suspense fallback>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Suspense>
);

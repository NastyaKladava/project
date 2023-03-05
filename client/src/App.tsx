import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { useApp } from "./hooks/appHook";
import HomePage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UsersPage from "./pages/UsersPage";
import routes from "./shared/constants/routes";
import ProfilePage from "./pages/ProfilePage";
import CollectionPage from "./pages/CollectionPage";
import RequireAuth from "./RequireAuth/RequireAuth";
import RequireAdminAuth from "./RequireAuth/RequireAdminAuth";

const App: React.FC = () => {
  useApp();

  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.SIGIN} element={<SignIn />} />
        <Route path={routes.SIGNUP} element={<SignUp />} />
        <Route
          path={routes.USERS}
          element={
            <RequireAdminAuth>
              <UsersPage />
            </RequireAdminAuth>
          }
        />
        <Route
          path={routes.PROFILE}
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route
          path={routes.COLLECTION}
          element={
            <RequireAuth>
              <CollectionPage />
            </RequireAuth>
          }
        />
        <Route path={routes.NOTFOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;

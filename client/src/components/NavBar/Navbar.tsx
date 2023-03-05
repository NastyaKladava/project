import React from "react";
import {
  AppBar,
  IconButton,
  InputBase,
  Link,
  styled,
  Toolbar,
} from "@mui/material";
import { InterestsOutlined } from "@mui/icons-material";
import UserBox from "./UserBox";
import NavButtons from "./NavButtons";
import { useAppSelector } from "../../hooks/commonHooks";
import { isLoggedInSelector } from "../../store/selectors/userSelector";
import routes from "../../shared/constants/routes";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Link
          to={routes.HOME}
          component={RouterLink}
          variant="h6"
          underline="none"
          sx={{ display: { xs: "none", sm: "block", color: "inherit" } }}
        >
          {t("logo")}
        </Link>

        <IconButton
          aria-label="logo"
          sx={{ display: { xs: "block", sm: "none", color: "inherit" } }}
          onClick={() => navigate(routes.HOME)}
        >
          <InterestsOutlined />
        </IconButton>
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <NavButtons />
        {isLoggedIn && <UserBox />}
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;

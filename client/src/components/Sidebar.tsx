import React from "react";
import { Box } from "@mui/material";
import UserMenuList from "./NavBar/UserMenuList";

const Sidebar: React.FC = () => {
  return (
    <Box flex={1} p={10} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="sticky" top={80}>
        <UserMenuList />
      </Box>
    </Box>
  );
};

export default Sidebar;

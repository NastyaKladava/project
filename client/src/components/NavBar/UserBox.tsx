import React, { useState } from "react";
import { Avatar, Box } from "@mui/material";
import UserMenu from "./UserMenu";

const UserBox: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLAnchorElement>(null);
  const showMenu = (e: any) => setAnchorEl(e.currentTarget);

  return (
    <Box>
      <Avatar alt="user image" onClick={showMenu} />
      <UserMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </Box>
  );
};

export default UserBox;

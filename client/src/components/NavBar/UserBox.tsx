import React, { useState } from "react";
import { Avatar, Box, Tooltip } from "@mui/material";
import UserMenu from "./UserMenu";
import { useAppDispatch } from "../../hooks/commonHooks";

const UserBox: React.FC = () => {
  const dispatch = useAppDispatch();
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

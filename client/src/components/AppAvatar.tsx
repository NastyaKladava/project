import React from "react";
import { Avatar } from "@mui/material";
import { IAppAvatarProps } from "../shared/types";
import { green } from "@mui/material/colors";

const AppAvatar: React.FC<IAppAvatarProps> = ({ children, width, height }) => {
  return (
    <Avatar sx={{ bgcolor: green[500], width: { width }, height: { height } }}>
      {children}
    </Avatar>
  );
};

export default AppAvatar;

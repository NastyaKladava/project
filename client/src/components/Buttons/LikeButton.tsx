import React from "react";
import { Checkbox, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { IIconButtonProps } from "../../shared/types";
import { useAppSelector } from "../../hooks/commonHooks";
import { isLoggedInSelector } from "../../store/selectors/userSelector";

const LikeButton: React.FC<IIconButtonProps> = ({ handler, ariaLabel }) => {
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  return (
    <IconButton
      aria-label={ariaLabel}
      type="button"
      onClick={handler}
      disabled={!isLoggedIn}
    >
      <Checkbox
        icon={<FavoriteBorder fontSize="large" />}
        checkedIcon={<Favorite sx={{ color: "red" }} fontSize="large" />}
      />
    </IconButton>
  );
};

export default LikeButton;

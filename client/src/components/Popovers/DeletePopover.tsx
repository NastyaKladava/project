import React from "react";
import { Box, Popover, styled, Typography } from "@mui/material";
import AppIconButton from "../Buttons/AppIconButton";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { IDeletePopoverProps } from "../../shared/types";
import { useAppDispatch } from "../../hooks/commonHooks";
import { deleteCollection } from "../../store/thunks";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(),
}));

const DeletePopover: React.FC<IDeletePopoverProps> = ({
  itemId,
  setAnchorEl,
  anchorEl,
  currentElementId,
  text,
  deleteHandler,
}) => {
  const dispatch = useAppDispatch();
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl([null, null]);

  return (
    <Popover
      id="simple-popover"
      open={currentElementId === itemId}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <StyledBox>
        <Typography>{text}</Typography>
        <AppIconButton
          ariaLabel="yes"
          handler={deleteHandler}
          // handler={() => dispatch(deleteCollection(itemId))}
        >
          <DoneOutlineIcon />
        </AppIconButton>
      </StyledBox>
    </Popover>
  );
};

export default DeletePopover;

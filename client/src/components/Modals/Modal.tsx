import React from "react";
import { styled, Modal, Box } from "@mui/material";
import { IModalProps } from "../../shared/types";

const StyledModal = styled(Modal)((theme) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(15),
  width: "35vw",
  [theme.breakpoints.up("md")]: {
    width: "35vw",
  },
  [theme.breakpoints.down("md")]: {
    width: "60vw",
  },
  height: "auto",
  borderRadius: theme.spacing(5),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

const AppModal: React.FC<IModalProps> = ({ open, handleClose, children }) => {
  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
    >
      <StyledBox>{children}</StyledBox>
    </StyledModal>
  );
};

export default AppModal;

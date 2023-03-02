import React from "react";
import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import {
  isShowColModalSelector,
  isShowItemModalSelector,
} from "../../store/selectors/mainSelectors";
import CollectionForm from "../Forms/CollectionForm";
import { setShowItemModal } from "../../store/slices/mainSlice";
import AppModal from "./Modal";
import ItemForm from "../Forms/CollectionItemForm";

const ItemModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const isShowItemModal = useAppSelector(isShowItemModalSelector);
  const handleClose = () => dispatch(setShowItemModal(false));

  return (
    <AppModal open={isShowItemModal} handleClose={handleClose}>
      <Typography component="h2" variant="h5" textAlign="center">
        Add new item
      </Typography>
      <ItemForm />
    </AppModal>
  );
};

export default ItemModal;

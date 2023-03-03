import React from "react";
import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import { isShowItemModalSelector } from "../../store/selectors/mainSelectors";
import { setShowItemModal } from "../../store/slices/mainSlice";
import AppModal from "./Modal";
import ItemForm from "../Forms/CollectionItemForm";
import { useTranslation } from "react-i18next";

const ItemModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const isShowItemModal = useAppSelector(isShowItemModalSelector);
  const handleClose = () => dispatch(setShowItemModal(false));

  return (
    <AppModal open={isShowItemModal} handleClose={handleClose}>
      <Typography component="h2" variant="h5" textAlign="center">
        {t("modals.addColItemMessage")}
      </Typography>
      <ItemForm />
    </AppModal>
  );
};

export default ItemModal;

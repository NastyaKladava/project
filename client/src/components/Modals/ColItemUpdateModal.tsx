import React from "react";
import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import { isShowItemUpdateModalSelector } from "../../store/selectors/mainSelectors";
import { setShowColItemUpdateModal } from "../../store/slices/mainSlice";
import AppModal from "./Modal";
import { useTranslation } from "react-i18next";
import UpdateItemForm from "../Forms/CollectionItemUpdateForm";
import { setUpdatedColItem } from "../../store/slices/collectionItemSlice";

const ColItemUpdateModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isShowColItemUpdateModal = useAppSelector(
    isShowItemUpdateModalSelector
  );
  const handleClose = () => {
    dispatch(setShowColItemUpdateModal(false));
    dispatch(setUpdatedColItem(undefined));
  };

  return (
    <AppModal open={isShowColItemUpdateModal} handleClose={handleClose}>
      <Typography component="h2" variant="h5" textAlign="center">
        {t("modals.updateColItemMessage")}
      </Typography>
      <UpdateItemForm />
    </AppModal>
  );
};

export default ColItemUpdateModal;

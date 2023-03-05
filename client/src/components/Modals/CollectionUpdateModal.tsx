import React from "react";
import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import { isShowColUpdateModalSelector } from "../../store/selectors/mainSelectors";
import { setShowColUpdateModal } from "../../store/slices/mainSlice";
import AppModal from "./Modal";
import { useTranslation } from "react-i18next";
import CollectionUpdateForm from "../Forms/CollectionUpdateForm";

const CollectionUpdateModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isShowColUpdateModal = useAppSelector(isShowColUpdateModalSelector);
  const handleClose = () => dispatch(setShowColUpdateModal(false));

  return (
    <AppModal open={isShowColUpdateModal} handleClose={handleClose}>
      <Typography component="h2" variant="h5" textAlign="center">
        {t("modals.updateCollectionMessage")}
      </Typography>
      <CollectionUpdateForm />
    </AppModal>
  );
};

export default CollectionUpdateModal;

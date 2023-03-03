import React from "react";
import { Box, Grid, styled } from "@mui/material";
import CollectionCard from "../Cards/CollectionCard";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import { collectionsDataSelector } from "../../store/selectors/collectionSelector";
import { setShowCollectionModal } from "../../store/slices/mainSlice";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: theme.spacing(5),
}));

const CollectionBox: React.FC = () => {
  const dispatch = useAppDispatch();
  const collectionsData = useAppSelector(collectionsDataSelector);
  const openCollectionModal = () => dispatch(setShowCollectionModal(true));

  return (
    <Grid container spacing={10} p={{ xs: 0, md: 20 }} flex={4}>
      {collectionsData.map((collection, index) => (
        <CollectionCard {...collection} key={index} xs={12} sm={12} md={6} />
      ))}
    </Grid>
  );
};

export default CollectionBox;

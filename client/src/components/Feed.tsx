import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import { useCollection } from "../hooks/collectionHook";
import { useAppDispatch } from "../hooks/commonHooks";
import CollectionCard from "./Cards/CollectionCard";

const StyledBoxNoColections = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: 4,
  height: "100%",
}));

const Feed: React.FC = () => {
  const dispatch = useAppDispatch();
  const { trendCollections } = useCollection();

  return trendCollections.length === 0 ? (
    <StyledBoxNoColections p={{ xs: 0, md: 2 }}>
      <Typography textAlign="center">
        Ther are no available collections for this moment. Login and create a
        new one!
      </Typography>
    </StyledBoxNoColections>
  ) : (
    <Grid container spacing={10} p={{ xs: 0, md: 2 }} flex={4}>
      {trendCollections.map((collection, index) => (
        <CollectionCard key={index} {...collection} xs={12} sm={6} md={4} />
      ))}
    </Grid>
  );
};

export default Feed;

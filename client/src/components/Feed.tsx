import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import { useCollection } from "../hooks/collectionHook";
import CollectionCard from "./Cards/CollectionCard";
import { useTranslation } from "react-i18next";

const StyledBoxNoColections = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: 4,
  height: "100%",
}));

const Feed: React.FC = () => {
  const { t } = useTranslation();
  const { trendCollections } = useCollection();

  return trendCollections.length === 0 ? (
    <StyledBoxNoColections p={{ xs: 0, md: 2 }}>
      <Typography textAlign="center">{t("noCollections")}</Typography>
    </StyledBoxNoColections>
  ) : (
    <>
      <Grid container spacing={10} p={{ xs: 0, md: 2 }} flex={4}>
        {trendCollections.map((collection, index) => (
          <CollectionCard key={index} {...collection} xs={12} sm={6} md={4} />
        ))}
      </Grid>
    </>
  );
};

export default Feed;

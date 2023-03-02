import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import CollectionItemCard from "./Cards/CollectionItemCard";
import { useCollection } from "../hooks/collectionHook";

const StyledBoxNoItems = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: 2,
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  flex: 2,
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Rightbar: React.FC = () => {
  const { latestItems } = useCollection();

  console.log(latestItems);
  return latestItems.length === 0 ? (
    <StyledBoxNoItems>
      <Typography textAlign="center">
        Ther are no added items for this moment. Login and create a new one!
      </Typography>
    </StyledBoxNoItems>
  ) : (
    <StyledBox>
      <Grid container spacing={10}>
        {latestItems.map((item, index) => (
          <CollectionItemCard key={index} {...item} />
        ))}
      </Grid>
    </StyledBox>
  );
};

export default Rightbar;

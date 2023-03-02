import React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const ItemPage: React.FC = () => {
  const id = useParams();
  return <Box>id</Box>;
};

export default ItemPage;

import React from "react";
import { Avatar, Box, Paper, styled, Typography, Grid } from "@mui/material";
import { Person } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import { IColItemComment } from "../../store/types";
import { format } from "timeago.js";
import AppAvatar from "../AppAvatar";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Comment: React.FC<IColItemComment> = ({
  commentAuthor,
  commentDescription,
  createdAt,
}) => {
  return (
    <Grid
      container
      component={Paper}
      elevation={6}
      sx={{ alignItems: "center" }}
      p={3}
    >
      <Grid item xs={2}>
        <AppAvatar width={24} height={24}>
          <Person />
        </AppAvatar>
      </Grid>
      <Grid item xs={10}>
        <StyledBox>
          <Typography variant="h6">{commentAuthor}</Typography>
          <Typography variant="body2">
            {createdAt && format(createdAt)}
          </Typography>
        </StyledBox>

        <Typography paragraph>{commentDescription}</Typography>
      </Grid>
    </Grid>
  );
};

export default Comment;

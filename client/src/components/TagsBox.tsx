import React from "react";
import { Box, Link, styled } from "@mui/material";
import { ITagsBoxPtops } from "../shared/types";
import { convertTags } from "../utils/convertTags";
import { deepPurple } from "@mui/material/colors";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(6),
  flexWrap: "wrap",
  marginBottom: theme.spacing(5),
}));

const TagsBox: React.FC<ITagsBoxPtops> = ({ tags }) => {
  const convertedTags = convertTags(tags);
  return (
    <StyledBox>
      {convertedTags.map((tag, index) => (
        <Link
          key={index}
          underline="none"
          sx={{ color: deepPurple[500] }}
          variant="body2"
        >
          {tag}
        </Link>
      ))}
    </StyledBox>
  );
};

export default TagsBox;

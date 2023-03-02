import React from "react";
import { CardContent, Typography } from "@mui/material";
import { ICollectionItem } from "../../store/types";
import dayjs from "dayjs";
import { DATEFORMAT } from "../../shared/constants/common";

const ColItemCardContent: React.FC<ICollectionItem> = ({ ...props }) => {
  return (
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        Item tags: {props.itemTags}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        From collection:
      </Typography>
      {props["page quantity"] && (
        <Typography variant="body2" color="text.secondary">
          Page quantity: {props["page quantity"]}
        </Typography>
      )}
      {props.price && (
        <Typography variant="body2" color="text.secondary">
          Price: {props.price}
        </Typography>
      )}
      {props.volume && (
        <Typography variant="body2" color="text.secondary">
          Volume: {props.volume}
        </Typography>
      )}
      {props.author && (
        <Typography variant="body2" color="text.secondary">
          Author: {props.author}
        </Typography>
      )}
      {props.type && (
        <Typography variant="body2" color="text.secondary">
          Type: {props.type}
        </Typography>
      )}
      {props.genre && (
        <Typography variant="body2" color="text.secondary">
          Genre: {props.genre}
        </Typography>
      )}
      {props.descr && (
        <Typography variant="body2" color="text.secondary">
          Description {props.descr}
        </Typography>
      )}
      {props.comment && (
        <Typography variant="body2" color="text.secondary">
          Owner comment: {props.comment}
        </Typography>
      )}
      {props["about author"] && (
        <Typography variant="body2" color="text.secondary">
          About author: {props["about author"]}
        </Typography>
      )}
      {props["publication date"] && (
        <Typography variant="body2" color="text.secondary">
          Publication date:
          {dayjs(props["publication date"]).format(DATEFORMAT)}
        </Typography>
      )}
      {props["harvest year"] && (
        <Typography variant="body2" color="text.secondary">
          Harvest year:
          {dayjs(props["harvest year"]).format(DATEFORMAT)}
        </Typography>
      )}

      <Typography variant="body2" color="text.secondary">
        Is item finished by owner:
        {props["is finished"] === false ? "no" : "yes"}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Is item read by owner: {props["is read"] === false ? "no" : "yes"}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Is item tried by owner: {props["is tried"] === false ? "no" : "yes"}
      </Typography>
    </CardContent>
  );
};

export default ColItemCardContent;

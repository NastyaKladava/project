import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Grid,
  IconButton,
  IconButtonProps,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { MoreVert, InsertComment, ExpandMoreSharp } from "@mui/icons-material";
import { ICollectionItem } from "../../store/types";
import { format } from "timeago.js";
import { useNavigate } from "react-router-dom";
import OptionsMenu from "../Menu/CollectionOptionsMenu";
import { DATEFORMAT } from "../../shared/constants/common";
import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import { likeCollectionItem } from "../../store/thunks";
import LikeButton from "../Buttons/LikeButton";
import CommentForm from "../Forms/CommentForm";
import Comment from "../Comment/Comment";
import TagsBox from "../TagsBox";
import { IExpandMoreProps } from "../../shared/types";
import ExpandMore from "../ExpandMore";
import CommentBox from "../Comment/CommentBox";
import CommentButton from "./CommentButton";
import ItemOptionsMenu from "../Menu/ItemOptionsMenu";
import { isLoggedInSelector } from "../../store/selectors/userSelector";

const StyledCard = styled(Card)(({ theme }) => ({
  // height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const CollectionItemCard: React.FC<ICollectionItem> = ({ ...props }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [anchorOptionMenu, setAnchorOptionMenu] = useState<
    [null | HTMLAnchorElement, null | string]
  >([null, null]);

  const cardId: string = props._id;
  console.log(cardId);

  const commentsData = props.comments;
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const [expanded, setExpanded] = useState<string | boolean>(false);

  const handleExpandClick = (i: string) => {
    setExpanded(expanded === i ? false : cardId);
  };

  const openOptionsMenu = (e: any, id: string) => {
    setAnchorOptionMenu([e.currentTarget, id]);
  };

  return (
    <Grid item sx={{ width: "100%" }}>
      <StyledCard>
        <CardHeader
          action={
            <>
              <IconButton
                ariia-aria-label="more"
                type="button"
                onClick={(e) => openOptionsMenu(e, cardId)}
              >
                <MoreVert />
              </IconButton>
              <ItemOptionsMenu
                anchorEl={anchorOptionMenu[0]}
                setAnchorEl={setAnchorOptionMenu}
                menuId={cardId}
                currentElementId={anchorOptionMenu[1]}
              />
            </>
          }
          title={props.itemTitle}
          subheader={props.createdAt && format(props.createdAt)}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            From collection: {props.fromCollection}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Created by: {props.itemAuthor}
          </Typography>
          {props["page quantity"] && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Page quantity: {props["page quantity"]}
            </Typography>
          )}
          {props.price && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Price: {props.price}
            </Typography>
          )}
          {props.volume && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Volume: {props.volume}
            </Typography>
          )}
          {props.author && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Author: {props.author}
            </Typography>
          )}
          {props.type && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Type: {props.type}
            </Typography>
          )}
          {props.genre && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Genre: {props.genre}
            </Typography>
          )}
          {props.descr && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Description {props.descr}
            </Typography>
          )}
          {props.comment && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Owner comment: {props.comment}
            </Typography>
          )}
          {props["about author"] && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              About author: {props["about author"]}
            </Typography>
          )}
          {props["publication date"] && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Publication date:
              {dayjs(props["publication date"]).format(DATEFORMAT)}
            </Typography>
          )}
          {props["harvest year"] && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Harvest year:
              {dayjs(props["harvest year"]).format(DATEFORMAT)}
            </Typography>
          )}
          {props["is finished"] && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Is item finished by owner:
              {props["is finished"]}
            </Typography>
          )}
          {props["is read"] && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Is item read by owner: {props["is read"]}
            </Typography>
          )}
          {props["is tried"] && (
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Is item tried by owner: {props["is tried"]}
            </Typography>
          )}
          <TagsBox tags={props.itemTags} />
        </CardContent>
        <CardActions>
          <Box>
            <LikeButton
              ariaLabel="like"
              handler={() => dispatch(likeCollectionItem(cardId))}
            />
            <Typography variant="body2" component="span">
              {props.likes?.length}
            </Typography>
          </Box>
          <Box>
            <CommentButton ariaLabel="comment" />
            <Typography variant="body2" component="span">
              {props.comments?.length}
            </Typography>
          </Box>

          <ExpandMore
            expand={expanded === cardId}
            onClick={() => handleExpandClick(cardId)}
            aria-expanded={expanded === cardId}
            aria-label="show more"
          >
            <ExpandMoreSharp />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded === cardId} timeout="auto" unmountOnExit>
          <CardContent>
            {isLoggedIn && <CommentForm itemId={cardId} />}
            <CommentBox>
              {commentsData.map((comment, index) => (
                <Comment key={index} {...comment} />
              ))}
            </CommentBox>
          </CardContent>
        </Collapse>
      </StyledCard>
    </Grid>
  );
};

export default CollectionItemCard;

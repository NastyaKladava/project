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
  styled,
  Typography,
} from "@mui/material";
import { MoreVert, ExpandMoreSharp } from "@mui/icons-material";
import { ICollectionItem } from "../../store/types";
import { format } from "timeago.js";
import { useNavigate } from "react-router-dom";
import { DATEFORMAT } from "../../shared/constants/common";
import dayjs from "dayjs";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import { likeCollectionItem } from "../../store/thunks";
import LikeButton from "../Buttons/LikeButton";
import CommentForm from "../Forms/CommentForm";
import Comment from "../Comment/Comment";
import TagsBox from "../TagsBox";
import ExpandMore from "../ExpandMore";
import CommentBox from "../Comment/CommentBox";
import CommentButton from "./CommentButton";
import ItemOptionsMenu from "../Menu/ItemOptionsMenu";
import { isLoggedInSelector } from "../../store/selectors/userSelector";
import { useTranslation } from "react-i18next";

const StyledCard = styled(Card)(({ theme }) => ({
  // height: "100%",
  display: "flex",
  flexDirection: "column",
}));

const CollectionItemCard: React.FC<ICollectionItem> = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const cardId: string = props._id;
  const commentsData = props.comments;

  const [expanded, setExpanded] = useState<string | boolean>(false);
  const handleExpandClick = (i: string) => {
    setExpanded(expanded === i ? false : cardId);
  };
  const [anchorOptionMenu, setAnchorOptionMenu] = useState<
    [null | HTMLAnchorElement, null | string]
  >([null, null]);
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
                disabled={!isLoggedIn}
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
          <Typography component="h3" color="text.secondary" gutterBottom>
            {t("cardItem.fromCollection")}
            {props.fromCollection}
          </Typography>
          <Typography component="h3" color="text.secondary" gutterBottom>
            {t("cardItem.createdBy")} {props.itemAuthor}
          </Typography>
          {props["page quantity"] && (
            <Typography component="h4" color="text.secondary" gutterBottom>
              {t("cardItem.pageQuantity")} {props.itemAuthor}{" "}
              {props["page quantity"]}
            </Typography>
          )}
          {props.price && (
            <Typography component="h4" color="text.secondary" gutterBottom>
              {t("cardItem.price")} {props.price}
            </Typography>
          )}
          {props.volume && (
            <Typography component="h4" color="text.secondary" gutterBottom>
              {t("cardItem.volume")} {props.volume}
            </Typography>
          )}
          {props.author && (
            <Typography component="h4" color="text.secondary" gutterBottom>
              {t("cardItem.author")} {props.author}
            </Typography>
          )}
          {props.type && (
            <Typography component="h4" color="text.secondary" gutterBottom>
              {t("cardItem.type")} {props.type}
            </Typography>
          )}
          {props.genre && (
            <Typography component="h4" color="text.secondary" gutterBottom>
              {t("cardItem.genre")} {props.genre}
            </Typography>
          )}
          {props.descr && (
            <Typography component="h4" color="text.secondary" gutterBottom>
              {t("cardItem.descr")} {props.descr}
            </Typography>
          )}
          {props.comment && (
            <Typography component="h4" color="text.secondary" gutterBottom>
              {t("cardItem.ownerCom")} {props.comment}
            </Typography>
          )}
          {props["about author"] && (
            <Typography component="h4" color="text.secondary" gutterBottom>
              {t("cardItem.aboutAuthor")} {props["about author"]}
            </Typography>
          )}
          {props["publication date"] && (
            <Typography component="h4" color="text.secondary" gutterBottom>
              {t("cardItem.pubDate")}
              {dayjs(props["publication date"]).format(DATEFORMAT)}
            </Typography>
          )}
          {props["harvest year"] && (
            <Typography component="h4" color="text.secondary" gutterBottom>
              {t("cardItem.harvest")}
              {dayjs(props["harvest year"]).format(DATEFORMAT)}
            </Typography>
          )}
          {props["is finished"] && (
            <Typography component="h4" color="text.secondary" gutterBottom>
              {t("cardItem.isFinished")}
              {t("yes")}
            </Typography>
          )}
          {props["is read"] && (
            <Typography component="h4" color="text.secondary" gutterBottom>
              {t("cardItem.isRead")} {t("yes")}
            </Typography>
          )}
          {props["is tried"] && (
            <Typography component="h4" color="text.secondary" gutterBottom>
              {t("cardItem.isTried")} {t("yes")}
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

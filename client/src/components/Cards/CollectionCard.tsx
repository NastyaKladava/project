import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { MoreVert, Person } from "@mui/icons-material";
import { ICollection } from "../../store/types";
import { format } from "timeago.js";
import { Link, useNavigate } from "react-router-dom";
import AppAvatar from "../AppAvatar";
import TagsBox from "../TagsBox";
import AppButton from "../Buttons/AppButton";
import { IGridColCardProps } from "../../shared/types";
import CollectionOptionsMenu from "../Menu/CollectionOptionsMenu";
import { useAppSelector } from "../../hooks/commonHooks";
import { isLoggedInSelector } from "../../store/selectors/userSelector";

const StyledCard = styled(Card)(({ theme }) => ({
  // height: "100%",
  display: "flex",
  flexDirection: "column",
  paddingTop: 0,
}));

const CollectionCard: React.FC<ICollection & IGridColCardProps> = ({
  collectionDescr,
  collectionEmail,
  collectionTags,
  collectionTitle,
  collectionTopic,
  createdAt,
  collectionImageUrl,
  collectionMail,
  collectionAuthor,
  _id,
  xs,
  md,
  sm,
}) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<string | false>(false);
  const [anchorOptionMenu, setAnchorOptionMenu] = useState<
    [null | HTMLAnchorElement, null | string]
  >([null, null]);

  const cardId: any = _id;

  const isLoggedIn = useAppSelector(isLoggedInSelector);
  const openOptionsMenu = (e: any, id: string) => {
    setAnchorOptionMenu([e.currentTarget, id]);
  };

  return (
    <Grid item xs={xs} sm={sm} md={md}>
      <StyledCard>
        <CardHeader
          avatar={
            <AppAvatar width={56} height={56}>
              <Person />
            </AppAvatar>
          }
          action={
            <>
              <IconButton
                ariia-aria-label="more"
                type="button"
                onClick={(e) => openOptionsMenu(e, cardId)}
              >
                <MoreVert />
              </IconButton>
              <CollectionOptionsMenu
                anchorEl={anchorOptionMenu[0]}
                setAnchorEl={setAnchorOptionMenu}
                menuId={cardId}
                currentElementId={anchorOptionMenu[1]}
              />
            </>
          }
          title={collectionTitle}
          subheader={createdAt && format(createdAt)}
        />

        <CardMedia
          component="img"
          height="194"
          image={collectionImageUrl}
          alt={collectionTitle}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Topic: {collectionTopic}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Email: {collectionMail}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Created by: {collectionAuthor}
          </Typography>
          <Typography
            variant="body2"
            color="text.main"
            gutterBottom
            dangerouslySetInnerHTML={{
              __html: collectionDescr,
            }}
          />
          <TagsBox tags={collectionTags} />
          <AppButton
            handler={() => navigate(`/collection/${cardId}`)}
            size="small"
            color="success"
          >
            View
          </AppButton>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

export default CollectionCard;

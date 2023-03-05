import React, { useState } from "react";
import {
  Card,
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
import { useNavigate } from "react-router-dom";
import AppAvatar from "../AppAvatar";
import TagsBox from "../TagsBox";
import AppButton from "../Buttons/AppButton";
import { IGridColCardProps } from "../../shared/types";
import CollectionOptionsMenu from "../Menu/CollectionOptionsMenu";
import { useAppSelector } from "../../hooks/commonHooks";
import { isLoggedInSelector } from "../../store/selectors/userSelector";
import { useTranslation } from "react-i18next";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: 0,

  height: "550px",
  overflowY: "auto",

  "&::-webkit-scrollbar": {
    width: 10,
    borderRadius: theme.spacing(2),
  },
  "&::-webkit-scrollbar-track": {
    borderRadius: theme.spacing(),
    backgroundColor: theme.palette.background.paper,
    width: 5,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.grey[400],
    backgroundClip: "padding-box",
    borderRight: `${theme.spacing()} ${theme.palette.background.paper} solid`,
    borderLeft: `${theme.spacing()} ${theme.palette.background.paper} solid`,
    borderRadius: theme.spacing(2),
  },
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
  const { t } = useTranslation();
  const cardId: any = _id;
  const isLoggedIn = useAppSelector(isLoggedInSelector);

  const [anchorOptionMenu, setAnchorOptionMenu] = useState<
    [null | HTMLAnchorElement, null | string]
  >([null, null]);

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
                disabled={!isLoggedIn}
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
          <Typography component="h3" color="text.secondary" gutterBottom>
            {t("collectionCard.topic")}
            {collectionTopic}
          </Typography>
          <Typography component="h3" color="text.secondary" gutterBottom>
            {t("collectionCard.createdBy")}
            {collectionAuthor}
          </Typography>
          <Typography component="h4" color="text.secondary" gutterBottom>
            {t("collectionCard.email")} {collectionMail}
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
            {t("buttons.view")}
          </AppButton>
        </CardContent>
      </StyledCard>
    </Grid>
  );
};

export default CollectionCard;

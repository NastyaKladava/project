import React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Delete, Update } from "@mui/icons-material";
import { IOptionsMenuProps } from "../../shared/types";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import DeletePopover from "../Popovers/DeletePopover";
import { deleteCollection } from "../../store/thunks";
import { useTranslation } from "react-i18next";
import {
  setShowColUpdateModal,
  setUpdatedCollection,
} from "../../store/slices/mainSlice";
import { collectionsDataSelector } from "../../store/selectors/collectionSelector";
import {
  setImageUploadProgress,
  setImageUrl,
} from "../../store/slices/collectionSlice";

const CollectionOptionsMenu: React.FC<IOptionsMenuProps> = ({
  anchorEl,
  setAnchorEl,
  menuId,
  currentElementId,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const collections = useAppSelector(collectionsDataSelector);
  const currentCollection = collections?.find(
    (collection) => collection?._id === currentElementId
  );

  const closeMenu = (e: React.MouseEvent<HTMLAnchorElement>) =>
    setAnchorEl([null, null]);

  const [anchorDeletePopover, setAnchorDeletePopover] = React.useState<
    [null | HTMLButtonElement, null | string]
  >([null, null]);

  const openDeletePopover = (e: any, id: string) => {
    setAnchorDeletePopover([e.currentTarget, id]);
  };

  const openUpdateModal = () => {
    dispatch(setImageUrl(currentCollection?.collectionImageUrl));
    dispatch(setImageUploadProgress(100));
    dispatch(setShowColUpdateModal(true));
    dispatch(setUpdatedCollection(currentCollection));
  };

  return (
    <>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        anchorEl={anchorEl}
        //   open={Boolean(anchorEl)}
        open={menuId === currentElementId}
        onClose={closeMenu}
      >
        <MenuItem>
          <IconButton
            aria-label="delete"
            onClick={(e) => openDeletePopover(e, menuId)}
          >
            <Delete />
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="update" onClick={openUpdateModal}>
            <Update />
          </IconButton>
        </MenuItem>
      </Menu>
      <DeletePopover
        itemId={menuId}
        anchorEl={anchorDeletePopover[0]}
        setAnchorEl={setAnchorDeletePopover}
        currentElementId={anchorDeletePopover[1]}
        text={t("deleteCollectionMessage")}
        deleteHandler={() => dispatch(deleteCollection(menuId))}
      />
    </>
  );
};

export default CollectionOptionsMenu;

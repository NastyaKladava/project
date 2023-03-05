import React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Delete, Update } from "@mui/icons-material";
import { IOptionsMenuProps } from "../../shared/types";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import DeletePopover from "../Popovers/DeletePopover";
import { deleteCollectionItem } from "../../store/thunks";
import { useTranslation } from "react-i18next";
import { setShowColItemUpdateModal } from "../../store/slices/mainSlice";
import { collectionItemsDataSelector } from "../../store/selectors/collectionItemSelector";
import { setUpdatedColItem } from "../../store/slices/collectionItemSlice";

const ItemOptionsMenu: React.FC<IOptionsMenuProps> = ({
  anchorEl,
  setAnchorEl,
  menuId,
  currentElementId,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const items = useAppSelector(collectionItemsDataSelector);
  const currentItem = items?.find((items) => items?._id === currentElementId);

  const closeMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl([null, null]);
  };

  const [anchorDeletePopover, setAnchorDeletePopover] = React.useState<
    [null | HTMLButtonElement, null | string]
  >([null, null]);

  const openDeletePopover = (e: any, id: string) => {
    setAnchorDeletePopover([e.currentTarget, id]);
  };

  const openUpdateModal = () => {
    dispatch(setShowColItemUpdateModal(true));
    setUpdatedColItem(currentItem);
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
        text={t("deleteColItemMessage")}
        deleteHandler={() => dispatch(deleteCollectionItem(menuId))}
      />
    </>
  );
};

export default ItemOptionsMenu;

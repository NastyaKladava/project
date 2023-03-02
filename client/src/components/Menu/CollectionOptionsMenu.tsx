import React from "react";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { Delete, Update } from "@mui/icons-material";
import { IOptionsMenuProps, UserMenuAnchorType } from "../../shared/types";
import AppIconButton from "../Buttons/AppIconButton";
import { useAppDispatch, useAppSelector } from "../../hooks/commonHooks";
import { collectionsDataSelector } from "../../store/selectors/collectionSelector";
import DeletePopover from "../Popovers/DeletePopover";
import { deleteCollection } from "../../store/thunks";

const CollectionOptionsMenu: React.FC<IOptionsMenuProps> = ({
  anchorEl,
  setAnchorEl,
  menuId,
  currentElementId,
}) => {
  const dispatch = useAppDispatch();
  const closeMenu = (e: React.MouseEvent<HTMLAnchorElement>) =>
    setAnchorEl([null, null]);

  const [anchorDeletePopover, setAnchorDeletePopover] = React.useState<
    [null | HTMLButtonElement, null | string]
  >([null, null]);

  const openDeletePopover = (e: any, id: string) => {
    setAnchorDeletePopover([e.currentTarget, id]);
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
          <AppIconButton ariaLabel="update">
            <Update />
          </AppIconButton>
        </MenuItem>
      </Menu>
      <DeletePopover
        itemId={menuId}
        anchorEl={anchorDeletePopover[0]}
        setAnchorEl={setAnchorDeletePopover}
        currentElementId={anchorDeletePopover[1]}
        text={"Are you sure that you want to delete this collection?"}
        deleteHandler={() => dispatch(deleteCollection(menuId))}
      />
    </>
  );
};

export default CollectionOptionsMenu;

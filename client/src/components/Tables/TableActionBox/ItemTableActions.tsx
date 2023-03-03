import React from "react";
import { Delete, Update } from "@mui/icons-material";
import { Button } from "@mui/material";
import AppButtonGroup from "../../Buttons/AppButtonGroup";
import { IItemTableActionsProps } from "../../../shared/types";
import DeletePopover from "../../Popovers/DeletePopover";
import { useAppDispatch } from "../../../hooks/commonHooks";
import { deleteCollectionItem } from "../../../store/thunks";
import { useTranslation } from "react-i18next";

const ItemTableActions: React.FC<IItemTableActionsProps> = ({
  itemId,
  itemTitle,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [anchorDeletePopover, setAnchorDeletePopover] = React.useState<
    [null | HTMLButtonElement, null | string]
  >([null, null]);

  const openDeletePopover = (e: any, id: string) => {
    setAnchorDeletePopover([e.currentTarget, id]);
  };

  return (
    <>
      <AppButtonGroup
        variant="outlined"
        size="small"
        ariaLabel="item actions button group"
      >
        <Button
          aria-label="delete"
          onClick={(e) => openDeletePopover(e, itemId)}
        >
          <Delete />
        </Button>
        <Button aria-label="update">
          <Update />
        </Button>
      </AppButtonGroup>
      <DeletePopover
        itemId={itemId}
        anchorEl={anchorDeletePopover[0]}
        setAnchorEl={setAnchorDeletePopover}
        currentElementId={anchorDeletePopover[1]}
        text={`Are you sure that you want to delete the item ${itemTitle}?`}
        deleteHandler={() => dispatch(deleteCollectionItem(itemId))}
      />
    </>
  );
};

export default ItemTableActions;

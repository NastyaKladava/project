import React from "react";
import { Delete, Update } from "@mui/icons-material";
import { Button } from "@mui/material";
import AppButtonGroup from "../../Buttons/AppButtonGroup";
import { IItemTableActionsProps } from "../../../shared/types";
import DeletePopover from "../../Popovers/DeletePopover";
import { useAppDispatch, useAppSelector } from "../../../hooks/commonHooks";
import { deleteCollectionItem } from "../../../store/thunks";
import { useTranslation } from "react-i18next";
import { collectionItemsDataSelector } from "../../../store/selectors/collectionItemSelector";
import { setShowColItemUpdateModal } from "../../../store/slices/mainSlice";
import { setUpdatedColItem } from "../../../store/slices/collectionItemSlice";

const ItemTableActions: React.FC<IItemTableActionsProps> = ({
  itemId,
  itemTitle,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const items = useAppSelector(collectionItemsDataSelector);
  const currentItem = items?.find((items) => items._id === itemId);

  const [anchorDeletePopover, setAnchorDeletePopover] = React.useState<
    [null | HTMLButtonElement, null | string]
  >([null, null]);

  const openDeletePopover = (e: any, id: string) => {
    setAnchorDeletePopover([e.currentTarget, id]);
  };

  const openUpdateModal = () => {
    dispatch(setShowColItemUpdateModal(true));
    dispatch(setUpdatedColItem(currentItem));
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
        <Button aria-label="update" onClick={openUpdateModal}>
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

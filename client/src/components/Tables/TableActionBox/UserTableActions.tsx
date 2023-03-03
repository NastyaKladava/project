import React from "react";
import {
  Delete,
  RemoveRedEye,
  Update,
  PublishedWithChanges,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import AppButtonGroup from "../../Buttons/AppButtonGroup";
import { IItemTableActionsProps } from "../../../shared/types";
import { useAppDispatch } from "../../../hooks/commonHooks";
import { changeUserStatus, deleteUser } from "../../../store/thunks";

const UserTableActions: React.FC<IItemTableActionsProps> = ({
  itemId,
  itemTitle,
  firstName,
}) => {
  const dispatch = useAppDispatch();
  const handleDeleteUser = () => dispatch(deleteUser(itemId));
  const handleBlockUser = () => dispatch(changeUserStatus(itemId));

  return (
    <>
      <AppButtonGroup
        variant="outlined"
        size="small"
        ariaLabel="Users actions button group"
      >
        <Tooltip
          title="Delete"
          aria-label="delete user"
          onClick={handleDeleteUser}
        >
          <Delete color="success" />
        </Tooltip>
        <Tooltip
          title="Change status"
          aria-label="block user"
          onClick={handleBlockUser}
        >
          <PublishedWithChanges color="secondary" />
        </Tooltip>
        <Tooltip title="Update" aria-label="update user">
          <Update color="success" />
        </Tooltip>
        <Tooltip title="View" aria-label="view user">
          <RemoveRedEye color="secondary" />
        </Tooltip>
      </AppButtonGroup>
    </>
  );
};

export default UserTableActions;

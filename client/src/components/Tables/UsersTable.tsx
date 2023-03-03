import React from "react";
import { useAppSelector } from "../../hooks/commonHooks";
import AppTable from "./AppTable";
import { UsersTableColumns } from "../../shared/constants/tablesData/usersTableColumns";
import { usersSelector } from "../../store/selectors/userSelector";

const UsersTable: React.FC = () => {
  const users = useAppSelector(usersSelector);

  return <AppTable rows={users} columns={UsersTableColumns} />;
};

export default UsersTable;

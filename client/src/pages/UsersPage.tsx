import React, { useEffect } from "react";
import { Stack, styled } from "@mui/material";
import AppContainer from "../components/Containers/AppContainer";
import Sidebar from "../components/Sidebar";
import { useAdmin } from "../hooks/adminHook";
import NoUsersBox from "../components/Profile/NoUsersBox";
import UsersTable from "../components/Tables/UsersTable";
import { useAppDispatch } from "../hooks/commonHooks";
import { getUsers } from "../store/thunks";

const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: theme.spacing(10),
}));

const UsersPage: React.FC = () => {
  const dispatch = useAppDispatch();
  useAdmin();

  return (
    <AppContainer>
      <StyledStack>
        <Sidebar />
        <UsersTable />
      </StyledStack>
    </AppContainer>
  );
};

export default UsersPage;

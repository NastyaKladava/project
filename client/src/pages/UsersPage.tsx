import React from "react";
import { Stack, styled } from "@mui/material";
import AppContainer from "../components/Containers/AppContainer";
import Sidebar from "../components/Sidebar";
import { useAdmin } from "../hooks/adminHook";
import UsersTable from "../components/Tables/UsersTable";

const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: theme.spacing(10),
}));

const UsersPage: React.FC = () => {
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

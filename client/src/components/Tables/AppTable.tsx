import React, { useState } from "react";
import { Box, LinearProgress, styled } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IAppTableProps } from "../../shared/types";
import { useAppSelector } from "../../hooks/commonHooks";
import { isUserLoadingSelector } from "../../store/selectors/userSelector";
import { isColItemLoadingSelector } from "../../store/selectors/collectionItemSelector";
import NoRowsOverlay from "./NoRowsOverlay";
import { useLocation } from "react-router-dom";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  flex: 4,
  [theme.breakpoints.up("md")]: {
    padding: 15,
    marginTop: 20,
  },
  [theme.breakpoints.down("md")]: {
    padding: 0,
    marginTop: 35,
  },
  [theme.breakpoints.down("xs")]: {
    marginTop: 10,
  },
}));

const AppTable: React.FC<IAppTableProps> = ({ rows, columns }) => {
  const { pathname } = useLocation();
  const isUsersLoading = useAppSelector(isUserLoadingSelector);
  const isColItemsLoading = useAppSelector(isColItemLoadingSelector);
  const [pageSize, setPageSize] = useState<number>(10);

  return (
    <StyledBox>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        getRowId={(row) => row._id}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 20, 30]}
        pagination
        checkboxSelection
        components={{
          Toolbar: GridToolbar,
          LoadingOverlay: LinearProgress,
          NoRowsOverlay: NoRowsOverlay,
        }}
        loading={pathname === "/users" ? isUsersLoading : isColItemsLoading}
        sx={{ p: 5 }}
      />
    </StyledBox>
  );
};

export default AppTable;

import React, { useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { IAppTableProps } from "../../shared/types";

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
        }}
        sx={{ p: 5 }}
      />
    </StyledBox>
  );
};

export default AppTable;

import React, { useState } from "react";
import { Check, Clear, Person2 } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";
import {
  GridColDef,
  GridRenderCellParams,
  GridValueFormatterParams,
} from "@mui/x-data-grid";
import dayjs from "dayjs";
import { ITableColumns } from "../../types";
import { DATEFORMAT } from "../common";
import AppAvatar from "../../../components/AppAvatar";
import AppButton from "../../../components/Buttons/AppButton";
import UserTableActions from "../../../components/Tables/TableActionBox/UserTableActions";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(2),
}));

export const UsersTableColumns: GridColDef<ITableColumns>[] = [
  {
    field: "fullName",
    headerName: "Full Name",
    // sortable: false,
    width: 170,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <StyledBox>
          <AppAvatar width={24} height={24}>
            <Person2 />
          </AppAvatar>
          <Typography component="span">{params.row.lastName}</Typography>{" "}
          <Typography component="span">{params.row.firstName}</Typography>
        </StyledBox>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 160,
  },
  {
    field: "status",
    headerName: "Status",
    width: 140,
    renderCell: (params: GridRenderCellParams) => {
      return params.row.status === "active" ? (
        <AppButton variant="outlined" color="success" size="small">
          {params.row.status}
        </AppButton>
      ) : (
        <AppButton variant="outlined" color="error" size="small">
          {params.row.status}
        </AppButton>
      );
    },
  },
  {
    field: "isAdmin",
    headerName: "Is Admin",
    width: 150,
    renderCell: (params: GridRenderCellParams) => {
      return params.row.isAdmin ? (
        <Check color="error" />
      ) : (
        <Clear color="info" />
      );
    },
  },
  {
    field: "createdAt",
    headerName: "Creation date",
    width: 140,
    valueFormatter: (params: GridValueFormatterParams) => {
      return dayjs(params.value).format(DATEFORMAT);
    },
  },
  {
    field: "updatedAt",
    headerName: "Updation date",
    width: 150,
    valueFormatter: (params: GridValueFormatterParams) => {
      return dayjs(params.value).format(DATEFORMAT);
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => {
      return (
        <UserTableActions
          itemId={params.row._id}
          firstName={params.row.firstName}
          itemTitle={params.row.itemTitle}
        />
      );
    },
  },
];

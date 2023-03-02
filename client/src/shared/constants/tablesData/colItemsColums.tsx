import React, { useState } from "react";
import { Delete, Update } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import {
  GridColDef,
  GridValueFormatterParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import dayjs from "dayjs";
import AppIconButton from "../../../components/Buttons/AppIconButton";
import { ITableColumns } from "../../types";
import { DATEFORMAT } from "../common";
import { useAppDispatch } from "../../../hooks/commonHooks";
import ItemTableActions from "../../../components/Tables/TableActionBox/ItemTableActions";
import { convertTags } from "../../../utils/convertTags";

export const ColItemsTableColumns: GridColDef<ITableColumns>[] = [
  // { field: "_id", headerName: "Id", width: 150 },
  { field: "itemTitle", headerName: "Item title", width: 150 },
  {
    field: "itemTags",
    headerName: "Item tags",
    width: 150,
  },
  { field: "fromCollection", headerName: "Collection", width: 150 },
  {
    field: "fields",
    headerName: "Item fields",
    width: 300,
    valueGetter: (params: GridValueGetterParams) => {
      console.log(params);

      const itemFields = Object.keys(params.row).filter(
        (itemField) =>
          itemField != "_id" &&
          itemField != "userId" &&
          itemField != "createdAt" &&
          itemField != "updatedAt" &&
          itemField != "collectionId" &&
          itemField != "__v" &&
          itemField != "itemTitle" &&
          itemField != "itemTags" &&
          itemField != "fromCollection" &&
          itemField != "likes" &&
          itemField != "comments" &&
          itemField != "itemAuthor"
      );
      const newItemFields = itemFields.join(", ");
      console.log(newItemFields);

      return `${newItemFields}`;
    },
  },
  {
    field: "createdAt",
    headerName: "Creation date",
    width: 150,
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
        <ItemTableActions
          itemId={params.row._id}
          itemTitle={params.row.itemTitle}
        />
      );
    },
  },
];

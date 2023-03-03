import React from "react";
import {
  GridColDef,
  GridValueFormatterParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import dayjs from "dayjs";
import { ITableColumns } from "../../types";
import { DATEFORMAT, NOTOPTIONALFIELDS } from "../common";
import ItemTableActions from "../../../components/Tables/TableActionBox/ItemTableActions";

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
      const itemFields = Object.keys(params.row);
      const newItemFields = itemFields
        .filter((item) => !NOTOPTIONALFIELDS.includes(item))
        .join(", ");
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
          firstName={params.row.firstName}
        />
      );
    },
  },
];

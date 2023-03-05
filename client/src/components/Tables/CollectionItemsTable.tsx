import React from "react";
import { useAppSelector } from "../../hooks/commonHooks";
import { collectionItemsDataSelector } from "../../store/selectors/collectionItemSelector";
import AppTable from "./AppTable";
import { ColItemsTableColumns } from "../../shared/constants/tablesData/colItemsColums";

const CollectionItemsTable: React.FC = () => {
  const collectionItemsData = useAppSelector(collectionItemsDataSelector);

  return <AppTable rows={collectionItemsData} columns={ColItemsTableColumns} />;
};

export default CollectionItemsTable;

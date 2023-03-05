import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isServerLoading, isServerError } from "../../utils/storeUtils";
import {
  addColItemComment,
  addCollectionItem,
  deleteCollectionItem,
  getLatestColItems,
  getUserColItems,
  likeCollectionItem,
  updateColitem,
} from "../thunks";
import { ICollectionItem, ICollectionItemSlice } from "../types";

const initialState: ICollectionItemSlice = {
  itemsData: [],
  latestItemsData: [],
  isColItemError: false,
  isColItemLoading: false,
  isColItemSuccess: false,
  errorColItemMessage: null,
  successColItemMessage: null,
  updatedColItem: undefined,
};

const collectionItemSlice = createSlice({
  name: "itemsData",
  initialState,
  reducers: {
    clearColItemState: (state) => {
      state.itemsData = [];
      state.isColItemError = false;
      state.isColItemLoading = false;
      state.isColItemSuccess = false;
      state.errorColItemMessage = null;
      state.successColItemMessage = null;
      state.updatedColItem = undefined;
    },

    setColItemError: (state, action) => {
      state.isColItemError = action.payload;
      state.errorColItemMessage = null;
    },
    setColItemSuccess: (state, action) => {
      state.isColItemSuccess = action.payload;
      state.successColItemMessage = null;
    },
    setUpdatedColItem: (
      state,
      action: PayloadAction<ICollectionItem | undefined>
    ) => {
      state.updatedColItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCollectionItem.fulfilled, (state, action) => {
      state.isColItemLoading = false;
      state.isColItemSuccess = true;
      state.itemsData.push(action.payload.item);
      state.successColItemMessage = action.payload.message;
    });

    builder.addCase(getUserColItems.fulfilled, (state, action) => {
      state.isColItemLoading = false;
      state.isColItemSuccess = true;
      state.itemsData = action.payload;
    });
    builder.addCase(deleteCollectionItem.fulfilled, (state, action) => {
      state.isColItemLoading = false;
      state.isColItemSuccess = true;
      state.itemsData = state.itemsData.filter(
        (item) => item._id !== action.payload.id
      );
      state.latestItemsData = state.latestItemsData.filter(
        (item) => item._id !== action.payload.id
      );
      state.successColItemMessage = action.payload.message;
    });
    builder.addCase(getLatestColItems.fulfilled, (state, action) => {
      state.isColItemLoading = false;
      state.isColItemSuccess = true;
      state.latestItemsData = action.payload;
    });

    builder.addCase(addColItemComment.fulfilled, (state, action) => {
      state.isColItemLoading = false;
      state.isColItemSuccess = true;
      state.successColItemMessage = action.payload.message;
    });

    builder.addCase(likeCollectionItem.fulfilled, (state, action) => {
      state.isColItemLoading = false;
      state.isColItemSuccess = true;
      state.successColItemMessage = action.payload.message;
    });

    builder.addCase(updateColitem.fulfilled, (state, action) => {
      state.isColItemLoading = false;
      state.isColItemSuccess = true;
      state.successColItemMessage = action.payload.message;

      const item = state.itemsData.find(
        (item) => item._id === action.payload.item._id
      );
      if (item) {
        state.itemsData = state.itemsData.filter(
          (item) => item._id !== action.payload.item._id
        );
        const updatedArray = state.itemsData;
        updatedArray.push(action.payload.item);
        state.itemsData = updatedArray;
      }
    });

    builder.addMatcher(
      isServerError,
      (state, action: PayloadAction<string>) => {
        state.errorColItemMessage = action.payload;
        state.isColItemError = true;
        state.isColItemLoading = false;
      }
    );
    builder.addMatcher(
      isServerLoading,
      (state, action: PayloadAction<string>) => {
        state.isColItemLoading = true;
      }
    );
  },
});

export default collectionItemSlice.reducer;

export const {
  setColItemError,
  setColItemSuccess,
  clearColItemState,
  setUpdatedColItem,
} = collectionItemSlice.actions;

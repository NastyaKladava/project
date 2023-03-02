import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isServerLoading, isServerError } from "../../utils/storeUtils";
import {
  addColItemComment,
  addCollectionItem,
  deleteCollectionItem,
  getLatestColItems,
  getUserColItems,
  likeCollectionItem,
} from "../thunks";
import { ICollectionItemSlice } from "../types";

const initialState: ICollectionItemSlice = {
  itemsData: [],
  latestItemsData: [],
  isColItemError: false,
  isColItemLoading: false,
  isColItemSuccess: false,
  errorColItemMessage: null,
  successColItemMessage: null,
};

const collectionItemSlice = createSlice({
  name: "itemsData",
  initialState,
  reducers: {
    clearColItemState: () => {
      return initialState;
    },

    setColItemError: (state, action) => {
      state.isColItemError = action.payload;
      state.errorColItemMessage = null;
    },
    setColItemSuccess: (state, action) => {
      state.isColItemSuccess = action.payload;
      state.successColItemMessage = null;
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

export const { setColItemError, setColItemSuccess, clearColItemState } =
  collectionItemSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditorState } from "draft-js";
import { isServerLoading, isServerError } from "../../utils/storeUtils";
import {
  addCollection,
  deleteCollection,
  getCollection,
  getTrendCollection,
  getUserCollections,
} from "../thunks";
import { ICollectionSlice } from "../types";

const initialState: ICollectionSlice = {
  trendCollections: [],
  collectionsData: [],
  editContent: "",
  editorState: EditorState.createEmpty(),
  isCollectionError: false,
  isCollectionLoading: false,
  isCollectionSuccess: false,
  errorCollectionMessage: null,
  successCollectionMessage: null,
  currentCollection: null,
  imageUrl: null,
  imageUploadProgress: 0,
};

const collectionSlice = createSlice({
  name: "collectionsData",
  initialState,
  reducers: {
    clearCollectionState: () => {
      return initialState;
    },
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
    setImageUploadProgress: (state, action) => {
      state.imageUploadProgress = action.payload;
    },
    setCollectionError: (state, action) => {
      state.isCollectionError = action.payload;
      state.errorCollectionMessage = null;
    },
    setCollectionSuccess: (state, action) => {
      state.isCollectionSuccess = action.payload;
      state.successCollectionMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCollection.fulfilled, (state, action) => {
      state.isCollectionLoading = false;
      state.isCollectionSuccess = true;
      state.collectionsData.push(action.payload.collection);
      state.successCollectionMessage = action.payload.message;
    });

    builder.addCase(getUserCollections.fulfilled, (state, action) => {
      state.isCollectionLoading = false;
      state.isCollectionSuccess = true;
      state.collectionsData = action.payload;
    });

    builder.addCase(getCollection.fulfilled, (state, action) => {
      state.isCollectionLoading = false;
      state.isCollectionSuccess = true;
      state.currentCollection = action.payload;
    });

    builder.addCase(getTrendCollection.fulfilled, (state, action) => {
      state.isCollectionLoading = false;
      state.isCollectionSuccess = true;
      state.trendCollections = action.payload;
    });

    builder.addCase(deleteCollection.fulfilled, (state, action) => {
      state.isCollectionLoading = false;
      state.isCollectionSuccess = true;
      state.collectionsData = state.collectionsData.filter(
        (item) => item._id !== action.payload.id
      );
      state.trendCollections = state.trendCollections.filter(
        (item) => item._id !== action.payload.id
      );
      state.successCollectionMessage = action.payload.message;
    });

    builder.addMatcher(
      isServerError,
      (state, action: PayloadAction<string>) => {
        state.errorCollectionMessage = action.payload;
        state.isCollectionError = true;
        state.isCollectionLoading = false;
      }
    );
    builder.addMatcher(
      isServerLoading,
      (state, action: PayloadAction<string>) => {
        state.isCollectionLoading = true;
      }
    );
  },
});

export default collectionSlice.reducer;

export const {
  setImageUrl,
  setImageUploadProgress,
  setCollectionError,
  setCollectionSuccess,
  clearCollectionState,
} = collectionSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditorState } from "draft-js";
import { isServerLoading, isServerError } from "../../utils/storeUtils";
import {
  addCollection,
  deleteCollection,
  getCollection,
  getTrendCollection,
  getUserCollections,
  updateCollection,
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
    clearCollectionState: (state) => {
      state.collectionsData = [];
      state.editContent = "";
      state.editorState = EditorState.createEmpty();
      state.isCollectionError = false;
      state.isCollectionLoading = false;
      state.isCollectionSuccess = false;
      state.errorCollectionMessage = null;
      state.successCollectionMessage = null;
      state.currentCollection = null;
      state.imageUrl = null;
      state.imageUploadProgress = 0;
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

    builder.addCase(updateCollection.fulfilled, (state, action) => {
      state.isCollectionLoading = false;
      state.isCollectionSuccess = true;
      state.successCollectionMessage = action.payload.message;

      const collection = state.collectionsData.find(
        (collection) => collection._id === action.payload.collection._id
      );
      if (collection) {
        // collection.collectionTitle = action.payload.collection.collectionTitle;
        // collection.collectionTopic = action.payload.collection.collectionTopic;
        // collection.collectionDescr = action.payload.collection.collectionDescr;
        // collection.collectionTags = action.payload.collection.collectionTags;
        // collection.collectionImageUrl =
        //   action.payload.collection.collectionImageUrl;
        // collection.collectionFields =
        //   action.payload.collection.collectionFields;
        // collection.updatedAt = action.payload.collection.updatedAt;

        state.collectionsData = state.collectionsData.filter(
          (collection) => collection._id !== action.payload.collection._id
        );
        const updatedArray = state.collectionsData;
        updatedArray.push(action.payload.collection);
        state.collectionsData = updatedArray;
      }
    });

    builder.addMatcher(
      isServerError,
      (state, action: PayloadAction<string>) => {
        state.errorCollectionMessage = action.payload;
        state.isCollectionError = true;
        state.isCollectionLoading = false;
      }
    );
    builder.addMatcher(isServerLoading, (state) => {
      state.isCollectionLoading = true;
    });
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

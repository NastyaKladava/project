import { createAsyncThunk } from "@reduxjs/toolkit";
import localStorageKeys from "../shared/constants/localStorageKeys";
import Service from "../shared/services";
import { RootState } from "./index";
import {
  IColItemComment,
  IColItemResponse,
  ICollection,
  ICollectionItem,
  ICollectionResponse,
  ICommentResponse,
  ICurUser,
  IDeleteResponse,
  ILikeResponse,
  ILogInResponse,
  IuserRegData,
} from "./types";

//register and login
export const registerUser = createAsyncThunk<
  string,
  IuserRegData,
  { rejectValue: string }
>(
  "/api/auth/register",
  async function (
    { firstName, lastName, email, password },
    { rejectWithValue }
  ) {
    try {
      const res = await Service.register({
        firstName,
        lastName,
        email,
        password,
      });
      return res.data.message;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk<
  ILogInResponse,
  IuserRegData,
  { rejectValue: string }
>("/api/auth/login", async function (data, { rejectWithValue }) {
  try {
    const res = await Service.logIn(data);
    const resData = (await res.data.user) as ICurUser;
    if (res.status === 200) {
      localStorage.setItem(localStorageKeys.TOKEN, resData.token);
      return res.data;
    }
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

//get all users for admin
export const getUsers = createAsyncThunk<
  ICurUser[],
  undefined,
  { rejectValue: string }
>("/api/users", async function (_, { rejectWithValue }) {
  try {
    const res = await Service.getUsers();
    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

//profile
export const getUser = createAsyncThunk<
  ICurUser,
  string,
  { rejectValue: string }
>("/api/profile/:id", async function (id, { rejectWithValue }) {
  try {
    const res = await Service.getUser(id);
    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const likeCollectionItem = createAsyncThunk<
  ILikeResponse,
  string,
  { rejectValue: string }
>("/api/profile/like/:itemId", async function (itemId, { rejectWithValue }) {
  try {
    const res = await Service.likeCollectionItem(itemId);
    return { id: itemId, message: res.data.message };
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

//collections
export const addCollection = createAsyncThunk<
  // ICollection,
  ICollectionResponse,
  ICollection,
  { rejectValue: string }
>("/api/collection", async function (collectionsData, { rejectWithValue }) {
  try {
    const res = await Service.addCollection(collectionsData);
    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const getUserCollections = createAsyncThunk<
  ICollection[],
  undefined,
  { rejectValue: string }
>("/api/collection//", async function (_, { rejectWithValue }) {
  try {
    const res = await Service.getUserCollections();

    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const getCollection = createAsyncThunk<
  ICollection,
  string | undefined,
  { rejectValue: string }
>("/api/collection/:id", async function (id, { rejectWithValue }) {
  try {
    const res = await Service.getCollection(id);
    console.log(res.data);
    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const getTrendCollection = createAsyncThunk<
  ICollection[],
  undefined,
  { rejectValue: string }
>("/api/collection/trend", async function (_, { rejectWithValue }) {
  try {
    const res = await Service.getTrendCollections();
    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const deleteCollection = createAsyncThunk<
  IDeleteResponse,
  string,
  { rejectValue: string }
>("/api/collection/delete/:id", async function (id, { rejectWithValue }) {
  try {
    const res = await Service.deleteCollection(id);
    return { id: id, message: res.data.message };
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

//collection items
export const addCollectionItem = createAsyncThunk<
  IColItemResponse,
  ICollectionItem,
  { rejectValue: string }
>("/api/item", async function (itemData, { rejectWithValue }) {
  try {
    const res = await Service.addCollectionItem(itemData);
    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const getUserColItems = createAsyncThunk<
  ICollectionItem[],
  string | undefined,
  { rejectValue: string }
>(
  "/api/item/all/:collectionId",
  async function (collectionId, { rejectWithValue }) {
    try {
      const res = await Service.getUserColItems(collectionId);
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteCollectionItem = createAsyncThunk<
  IDeleteResponse,
  string,
  { rejectValue: string }
>("/api/item/delete/:id", async function (id, { rejectWithValue }) {
  try {
    const res = await Service.deleteCollectionItem(id);
    return { id: id, message: res.data.message };
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const getLatestColItems = createAsyncThunk<
  ICollectionItem[],
  undefined,
  { rejectValue: string }
>("/api/item/latest", async function (_, { rejectWithValue }) {
  try {
    const res = await Service.getLatestColItems();
    return res.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

//item comments
export const addColItemComment = createAsyncThunk<
  ICommentResponse,
  IColItemComment,
  { rejectValue: string }
>("/api/comment", async function (commentData, { rejectWithValue }) {
  try {
    const res = await Service.addColItemComment(commentData);
    return res.data;
  } catch (error: any) {
    console.log(error.response.data.message);
    return rejectWithValue(error.response.data.message);
  }
});

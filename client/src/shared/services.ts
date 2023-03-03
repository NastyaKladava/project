import http from "./constants/http-common";
import {
  IColItemComment,
  ICollection,
  ICollectionItem,
  IuserRegData,
} from "../store/types";
import localStorageKeys from "./constants/localStorageKeys";

//register and login
const register = (data: IuserRegData) => {
  return http.post("/api/auth/register", data);
};

const logIn = (data: IuserRegData) => {
  return http.post("/api/auth/login", data);
};

//get users for admin
const getUsers = () => {
  return http.get("/api/users", {
    headers: { accessToken: localStorage.getItem(localStorageKeys.TOKEN) },
  });
};

const deleteUser = (id: string) => {
  return http.delete(`/api/users/delete/${id}`, {
    headers: { accessToken: localStorage.getItem(localStorageKeys.TOKEN) },
  });
};

const changeUserStatus = (id: string) => {
  return http.put(`/api/users/block/${id}`, {
    headers: { accessToken: localStorage.getItem(localStorageKeys.TOKEN) },
  });
};

//profile
const getUser = (id: string) => {
  return http.get(`/api/profile/${id}`, {
    headers: { accessToken: localStorage.getItem(localStorageKeys.TOKEN) },
  });
};

const likeCollectionItem = (itemId: string) => {
  return http.put(`/api/profile/like/${itemId}`, {
    headers: { accessToken: localStorage.getItem(localStorageKeys.TOKEN) },
  });
};

//collections
const addCollection = (collectionsData: ICollection) => {
  return http.post("/api/collection", collectionsData, {
    headers: { accessToken: localStorage.getItem(localStorageKeys.TOKEN) },
  });
};

const getUserCollections = () => {
  return http.get("/api/collection", {
    headers: { accessToken: localStorage.getItem(localStorageKeys.TOKEN) },
  });
};

const getCollection = (id: string | undefined) => {
  return http.get(`/api/collection/${id}`);
};

const getTrendCollections = () => {
  return http.get("/api/collection/trend");
};

const deleteCollection = (id: string) => {
  return http.delete(`/api/collection/delete/${id}`, {
    headers: { accessToken: localStorage.getItem(localStorageKeys.TOKEN) },
  });
};

const updateCollection = (id: string) => {
  return http.post(`/api/collection/${id}`, {
    headers: { accessToken: localStorage.getItem(localStorageKeys.TOKEN) },
  });
};

//collection items
const addCollectionItem = (itemData: ICollectionItem) => {
  return http.post("/api/item", itemData, {
    headers: { accessToken: localStorage.getItem(localStorageKeys.TOKEN) },
  });
};

const getUserColItems = (collectionId: string | undefined) => {
  return http.get(`/api/item/all/${collectionId}`, {
    headers: { accessToken: localStorage.getItem(localStorageKeys.TOKEN) },
  });
};

const deleteCollectionItem = (id: string) => {
  return http.delete(`/api/item/delete/${id}`, {
    headers: { accessToken: localStorage.getItem(localStorageKeys.TOKEN) },
  });
};

const getLatestColItems = () => {
  return http.get("/api/item/latest");
};

//item comments
const addColItemComment = (commentData: IColItemComment) => {
  return http.post("/api/comment", commentData, {
    headers: { accessToken: localStorage.getItem(localStorageKeys.TOKEN) },
  });
};

const getColItemComments = (itemId: string) => {
  return http.get(`/api/comment/${itemId}`);
};

const Service = {
  register,
  logIn,
  getUser,
  getUsers,
  addCollection,
  getUserCollections,
  getCollection,
  getTrendCollections,
  deleteCollection,
  updateCollection,
  addCollectionItem,
  getUserColItems,
  deleteCollectionItem,
  getLatestColItems,
  likeCollectionItem,
  addColItemComment,
  getColItemComments,
  deleteUser,
  changeUserStatus,
};

export default Service;

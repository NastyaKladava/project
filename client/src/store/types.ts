import { EditorState } from "draft-js";

//MainSlice
export interface IMainState {
  isShowCollectionModal: boolean;
  isShowColUpdateModal: boolean;
  isShowItemModal: boolean;
  isShowColItemUpdateModal: boolean;
  isShowSnackbar: boolean;
  isShowPassword: boolean;
  infoMessage: null | string;
  isAppMode: boolean;
  updatedCollection: ICollection | undefined;
}

//userSlice

export interface IuserRegData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ICurUser {
  id: string;
  firstName: string;
  email: string;
  token: string;
  status: string;
  isAdmin: boolean;
  collections: ICollection[] | [];
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string;
  status: string;
  isAdmin: boolean;
  collections: ICollection[] | [];
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserSlice {
  userRegData: IuserRegData;
  currentUser: null | ICurUser;
  users: [] | IUser[];
  isUserLoading: boolean;
  isUserError: boolean;
  isUserSuccess: boolean;
  errorUserMessage: string | null | undefined;
  successUserMessage: string | null | undefined;
  isLoggedIn: boolean;
  isRegistered: boolean;
  isAdmin: boolean;
}

//collectionSlice
export interface ICollectionSlice {
  trendCollections: ICollection[];
  collectionsData: ICollection[];
  editContent: string;
  editorState: EditorState;
  isCollectionError: boolean;
  isCollectionLoading: boolean;
  isCollectionSuccess: boolean;
  errorCollectionMessage: null | string | undefined;
  successCollectionMessage: null | string | undefined;
  currentCollection: null | ICollection;
  imageUrl: null | string;
  imageUploadProgress: number;
}

export interface ICollection {
  userId?: string;
  _id?: string;
  collectionTitle: string;
  collectionTopic: string;
  collectionDescr: string;
  collectionEmail: string;
  collectionTags: string[];
  collectionImageUrl: string;
  collectionFields: ICollectionField[];
  createdAt?: Date;
  updatedAt?: Date;
  collectionItems?: number;
  collectionAuthor: string;
  collectionMail: string;
}

export interface ICollectionField {
  title: string;
  type: string;
  firstLetter: string;
}

export interface IAddColItemData {
  collectionId: string | undefined;
  itemData: ICollectionItem;
}

export interface IColDescr {
  collectionDescr: string;
}

//collectionItem slice

export interface ICollectionItemSlice {
  itemsData: ICollectionItem[];
  latestItemsData: ICollectionItem[];
  updatedColItem: undefined | ICollectionItem;
  isColItemError: boolean;
  isColItemLoading: boolean;
  isColItemSuccess: boolean;
  errorColItemMessage: null | string | undefined;
  successColItemMessage: null | string | undefined;
}

export interface ICollectionItem {
  _id: string;
  userId?: string;
  collectionId: string;
  itemTitle: string;
  itemTags: string[];
  itemAuthor: string;
  fromCollection: string;
  comments?: IColItemComment[] | [];
  likes?: string[] | [];
  createdAt?: Date;
  updatedAt?: Date;

  "page quantity"?: number;
  price?: number;
  volume?: number;
  author?: string;
  type?: string;
  genre?: string;
  descr?: string;
  comment?: string;
  "about author"?: string;
  "publication date"?: Date;
  "harvest year"?: Date;
  "is read"?: boolean;
  "is finished"?: boolean;
  "is tried"?: boolean;
}

export interface IColItemComment {
  _id?: string;
  userId?: string;
  itemId: string;
  // collectionId: string;
  commentDescription: string;
  commentAuthor: string;
  createdAt?: Date;
  updatedAt?: Date;
}

//thunks responses
export type ResponseType = { message: string };

export interface ILogInResponse extends ResponseType {
  user: ICurUser;
}

export interface ICollectionResponse extends ResponseType {
  collection: ICollection;
}

export interface IDeleteResponse extends ResponseType {
  id: string;
}

export interface IColItemResponse extends ResponseType {
  item: ICollectionItem;
}

export interface ICommentResponse extends ResponseType {
  item: IColItemComment;
}

export interface ILikeResponse extends ResponseType {
  id: string;
}

export interface IUpdateCollectionRequest {
  id: string | undefined;
  updatedCollection: ICollection;
}

export interface IUpdateColItemRequest {
  id: string | undefined;
  updatedItem: ICollectionItem;
}

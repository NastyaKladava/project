import { IFieldsProps } from "../types";

export const sigInFields: IFieldsProps[] = [
  {
    id: "mail",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    autoFocus: true,
    defaultValue: "",
    errorMessage: "Email is required",
  },
  {
    id: "firstName",
    label: "First Name",
    name: "firstName",
    autoComplete: "given-name",
    autoFocus: true,
    defaultValue: "",
    errorMessage: "First Name is required",
  },
];

export const sigUpFields: IFieldsProps[] = [
  {
    id: "firstName",
    label: "First Name",
    name: "firstName",
    autoComplete: "given-name",
    autoFocus: true,
    defaultValue: "",
    errorMessage: "First Name is required",
  },
  {
    id: "lastName",
    label: "Last Name",
    name: "lastName",
    autoComplete: "family-name",
    defaultValue: "",
    errorMessage: "Last Name is required",
  },
  {
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    defaultValue: "",
    errorMessage: "Email is required",
  },
];

export const collectionTopic = ["Alcohol", "Books", "Serials"];

// export const collectionTopic = [
//   { title: "Alcohol" },
//   { title: "Books" },
//   { title: "Serials" },
// ];

// export const ICollectionFields = [
//   "Page quantity",
//   "Price",
//   "Volume",
//   "Author",
//   "Type",
//   "Genre",
//   "Description",
//   "Comment",
//   "About author",
//   "Publication date",
//   "Harvest Year",
//   "Is read",
//   "Is finished",
//   "Is tried",
// ];

export const collectionFields = [
  { title: "Page quantity", type: "number" },
  { title: "Price", type: "number" },
  { title: "Volume", type: "number" },
  { title: "Author", type: "string" },
  { title: "Type", type: "string" },
  { title: "Genre", type: "string" },
  { title: "Description", type: "text" },
  { title: "Comment", type: "text" },
  { title: "About author", type: "text" },
  { title: "Publication date", type: "date" },
  { title: "Harvest Year", type: "boolean" },
  { title: "Is read", type: "boolean" },
  { title: "Is finished", type: "boolean" },
  { title: "Is tried", type: "boolean" },
];

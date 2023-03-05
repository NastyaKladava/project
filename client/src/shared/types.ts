import React from "react";
import {
  AlertColor,
  IconButtonProps,
  InputProps,
  SxProps,
  Theme,
} from "@mui/material";
import { Control, FieldValues, UseFormHandleSubmit } from "react-hook-form";
import { ICollectionField, ICollectionItem, IUser } from "../store/types";
import { GridRowsProp } from "@mui/x-data-grid";
import { ContentState, EditorState } from "draft-js";

export interface IBasicFieldsProps {
  id: string;
  label: string;
  name: string;
  control?: Control;
  errorMessage: string;
  type?: string;
}

export interface IFieldsProps extends IBasicFieldsProps {
  placeholder?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  multiline?: boolean;
  variant?: "filled" | "outlined" | "standard";
  defaultValue: string | string[] | number | undefined;
  InputProps?: InputProps;
}

export interface ICheckboxProps extends IBasicFieldsProps {
  defaultValue: boolean;
}

export interface IDateFieldProps extends IBasicFieldsProps {
  defaultValue: Date;
  inputFormat: string;
}

export interface ISignInInput {
  email: string;
  password: string;
}

export interface IButtonGroupProps {
  variant: "outlined" | "contained" | "text";
  size: "small" | "medium" | "large";
  ariaLabel: string;
  children?: React.ReactNode;
}

export interface IButtonProps {
  type?: "submit" | "button" | "reset";
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
  handler?: () => void;
  disabled?: boolean;
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  sx?: SxProps;
}

export interface IIconButtonProps extends IButtonProps {
  ariaLabel: string;
}

export interface ITooltipButtonProps extends IIconButtonProps {
  title: string;
}

export interface IFormProps {
  handleData: (event: React.FormEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
  // handleData: UseFormHandleSubmit<FieldValues>;
  sx?: SxProps<Theme>;
}

export interface IAutocompleteProps {
  name: string;
  defaultValue: string | string[] | undefined;
  id: string;
  label: string;
  placeholder?: string;
  control: Control;
  options: string[];
  freeSolo: boolean;
  multiple?: boolean;
  errorMessage: string;
}

export interface IGroupedProps {
  name: string;
  defaultValue: string | string[] | ICollectionField[] | undefined | null;
  id: string;
  label: string;
  placeholder?: string;
  control: Control;
  menuData: IMenuGrouppedOption[];
  multiple?: boolean;
  errorMessage: string;
  freeSolo?: boolean;
}

export type UserMenuAnchorType = {
  anchorEl: null | HTMLAnchorElement;
  setAnchorEl: (value: null | HTMLAnchorElement) => void;

  menuId?: string;
  currentElementId?: string | null;
};

export interface IMenuFormatProps extends UserMenuAnchorType {
  fontWeight: string;
  setFontWeight: (value: string) => void;
}

export interface IOptionsMenuProps {
  anchorEl: null | HTMLAnchorElement;
  setAnchorEl: (value: [null | HTMLAnchorElement, null | string]) => void;
  menuId: string;
  currentElementId: string | null;
}

export interface ITextAreaFormattedProps {
  control: Control;
}

export interface IRichTextProps {
  control: Control;
  defaultValue: EditorState | string | undefined | ContentState;
}

export interface IModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export interface INoCollectionProps {
  mainText: string;
  buttonHandler: () => void;
}

export interface IMenuGrouppedOption {
  title: string;
  type?: string;
  firstLetter?: string;
}

export interface Boxprops {
  isDragActive: boolean;
  isDragAccept: boolean;
  isDragReject: boolean;
}

export interface IDeletePopoverProps {
  itemId: string;
  anchorEl: HTMLButtonElement | null;
  setAnchorEl: (value: [HTMLButtonElement | null, null | string]) => void;
  currentElementId: string | null;
  text: string;
  deleteHandler: () => void;
}

export interface ITableColumns {
  field: string;
  headerName: string;
  width: number;
  _id: string;
  itemTitle: string;
  firstName: string;
}

export interface IAppTableProps {
  rows: GridRowsProp<ICollectionItem | IUser>;
  columns: any;
}

export interface IItemTableActionsProps {
  itemId: string;
  itemTitle: string;
  firstName: string;
}

export interface IItemCommentProps {
  itemId: string;
}

export interface ISnackbarProps {
  // handleClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
  severity: AlertColor;
  message: string;
}

export interface IEditorFieldProps {
  value: EditorState;
  onChange: (...event: any[]) => void;
}

// export interface IFooterProps {
//   description: string;
//   title: string;
// }

export interface IMainHeaderProps {
  title: string;
}

export interface IAppAvatarProps {
  children: React.ReactNode;
  width: number;
  height: number;
}

export interface ITagsBoxPtops {
  tags: string[];
}

export interface ICardContentItemProps {
  cards: string[];
}

export interface IExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export interface ICommentBoxProps {
  children: React.ReactNode;
}

export interface IContainerProps {
  children: React.ReactNode;
}

export interface IGridColCardProps {
  xs: number;
  sm: number;
  md: number;
}

export interface IAddFabProps {
  title: string;
  handler: () => void;
  ariaLabel: string;
}

export type TimerIdType = NodeJS.Timeout;

export interface IRequireAuthProps {
  children: React.ReactNode;
}

export interface IColUpdateFormProps {
  itemId: string;
}

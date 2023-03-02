import { GridValidRowModel } from "@mui/x-data-grid";

export const convertTags = (tagsArray: string[]): string[] => {
  const newTagsArray = tagsArray
    .map((tag) => "#" + tag)
    .join(",")
    .split(",");

  return newTagsArray;
};

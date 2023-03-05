import { EditorState } from "draft-js";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { IRichTextProps } from "../../shared/types";
import EditorField from "./EditorField";

const RichText: React.FC<IRichTextProps> = ({ control, defaultValue }) => {
  return (
    <Controller
      name="collectionDescr"
      defaultValue={defaultValue}
      control={control}
      render={({ field: { onChange, value } }) => {
        return <EditorField value={value} onChange={onChange} />;
      }}
      rules={{ required: true }}
    />
  );
};
export default RichText;

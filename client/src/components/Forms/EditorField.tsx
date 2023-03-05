import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { IEditorFieldProps } from "../../shared/types";
import { EDITOROPTIONS } from "../../shared/constants/common";
import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderWidth: 2,
  borderRadius: theme.spacing(2),
  borderColor: theme.palette.info.main,
  borderStyle: "solid",
  // backgroundColor: theme.palette.divider,
  color: theme.palette.mode,
}));

const EditorField: React.FC<IEditorFieldProps> = ({ value, onChange }) => {
  const [editorState, setEditorState] = useState<EditorState>(value);
  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  return (
    <StyledBox>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          options: EDITOROPTIONS,
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
        }}
      />
    </StyledBox>
  );
};

export default EditorField;

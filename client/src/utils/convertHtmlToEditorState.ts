import { ContentState, EditorState } from "draft-js";
import htmlToDraft from "html-to-draftjs";

export const convertHtmlToEditorState = (
  richTextDefaultValue: string | undefined
) => {
  const blocksFromHtml = htmlToDraft(richTextDefaultValue! || "<p></p>");
  const { contentBlocks, entityMap } = blocksFromHtml!;
  const contentState = ContentState.createFromBlockArray(
    contentBlocks,
    entityMap
  );
  const editorState = EditorState.createWithContent(contentState);
  return editorState;
};

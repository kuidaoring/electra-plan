import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot } from "lexical";
import { useEffect } from "react";

const SetInitialValuePlugin = ({ id, editorState }) => {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    editor.update(() => {
      $getRoot().clear();
    });
    if (editorState) {
      editor.setEditorState(editorState);
    }
  }, [editor, id]);
  return null;
};

export default SetInitialValuePlugin;

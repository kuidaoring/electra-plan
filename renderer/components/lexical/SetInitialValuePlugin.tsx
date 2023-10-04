import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot } from "lexical";
import { useEffect } from "react";

const SetInitialValuePlugin = ({ id, editorState, isJson }) => {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    editor.update(() => {
      $getRoot().clear();
    });
    if (editorState) {
      if (isJson) {
        editor.setEditorState(editor.parseEditorState(editorState));
      } else {
        editor.setEditorState(editorState);
      }
    }
  }, [editor, id]);
  return null;
};

export default SetInitialValuePlugin;

import { $isLinkNode, LinkNode } from "@lexical/link";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getNearestNodeFromDOMNode,
  $getSelection,
  $isRangeSelection,
  LexicalEditor,
} from "lexical";
import { useEffect } from "react";

type LinkFilter = (event: MouseEvent, linkNode: LinkNode) => boolean;

type Props = {
  filter?: LinkFilter;
  newTab?: boolean;
};

const ClickableLinkPlugin: React.FC<Props> = ({ filter, newTab = true }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    function onClick(e: Event) {
      const event = e as MouseEvent | PointerEvent;
      const linkDomNode = getLinkDomNode(event, editor);

      if (linkDomNode === null) {
        return;
      }

      const href = linkDomNode.getAttribute("href");

      if (
        linkDomNode.getAttribute("contenteditable") === "false" ||
        href === undefined
      ) {
        return;
      }

      const selection = editor.getEditorState().read($getSelection);
      if ($isRangeSelection(selection) && !selection.isCollapsed()) {
        return;
      }

      let linkNode = null;
      editor.update(() => {
        const maybeLinkNode = $getNearestNodeFromDOMNode(linkDomNode);

        if ($isLinkNode(maybeLinkNode)) {
          linkNode = maybeLinkNode;
        }
      });

      if (
        linkNode === null ||
        (filter !== undefined && !filter(event, linkNode))
      ) {
        return;
      }

      try {
        if (href !== null) {
          const isMiddle = event.type === "auxclick" && event.button === 1;
          const targetString =
            newTab || event.metaKey || event.ctrlKey || isMiddle
              ? "_blank"
              : "_self";
          window.open(href, targetString);
          event.preventDefault();
        }
      } catch {
        // do nothing
      }
    }

    return editor.registerRootListener(
      (
        rootElement: null | HTMLElement,
        prevRootElement: null | HTMLElement
      ) => {
        if (prevRootElement !== null) {
          prevRootElement.removeEventListener("click", onClick);
          prevRootElement.removeEventListener("auxclick", onClick);
        }

        if (rootElement !== null) {
          rootElement.addEventListener("click", onClick);
          rootElement.addEventListener("auxclick", onClick);
        }
      }
    );
  }, [editor, filter, newTab]);
  return null;
};

const getLinkDomNode = (
  event: MouseEvent | PointerEvent,
  editor: LexicalEditor
): HTMLAnchorElement | null => {
  return editor.getEditorState().read(() => {
    const domNode = event.target as Node;

    if (isLinkDomeNode(domNode)) {
      return domNode as HTMLAnchorElement;
    }

    if (domNode.parentNode && isLinkDomeNode(domNode.parentNode)) {
      return domNode.parentNode as HTMLAnchorElement;
    }

    return null;
  });
};

const isLinkDomeNode = (domNode: Node): boolean => {
  return domNode.nodeName.toLocaleLowerCase() === "a";
};

export default ClickableLinkPlugin;

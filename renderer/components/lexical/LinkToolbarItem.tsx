import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { TOGGLE_LINK_COMMAND } from "@lexical/link";
import { Button, Input, Popover, Tooltip } from "antd";
import { useState } from "react";

import styles from "../../styles/LinkToolbarItem.module.css";
import { LinkOutlined } from "@ant-design/icons";

const LinkToolbarItem = () => {
  const [url, setUrl] = useState("");
  const [urlPopoverOpen, setUrlPopoverOpen] = useState(false);
  const [submittable, setSubmittable] = useState(false);
  const [editor] = useLexicalComposerContext();
  const isUrl = (urlString: string) => {
    try {
      const url = new URL(urlString);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (e) {
      return false;
    }
  };
  return (
    <div className={styles.toolbarWrapper}>
      <div className={styles.toolbar}>
        <Popover
          content={
            <>
              <Input
                placeholder="URLを入力"
                value={url}
                onChange={(event) => {
                  setUrl(event.target.value);
                  setSubmittable(isUrl(event.target.value));
                }}
              />
              <Button
                size="small"
                disabled={!submittable}
                onClick={() => {
                  editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
                  setUrlPopoverOpen(false);
                }}
              >
                挿入
              </Button>
            </>
          }
          trigger="click"
          open={urlPopoverOpen}
          onOpenChange={(newOpen) => setUrlPopoverOpen(newOpen)}
        >
          <Tooltip title="リンクに変換">
            <Button icon={<LinkOutlined />} size="small" type="text" />
          </Tooltip>
        </Popover>
      </div>
    </div>
  );
};

export default LinkToolbarItem;

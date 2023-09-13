import {
  CalendarOutlined,
  CloseOutlined,
  FormOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Empty,
  Input,
  InputRef,
  List,
  Space,
} from "antd";
import { DrawerOpenAtom, SelectedTaskAtom } from "../atoms/atoms";
import { useAtom, useSetAtom } from "jotai";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { LinkNode, AutoLinkNode } from "@lexical/link";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { $canShowPlaceholder } from "@lexical/text";
import SetInitialValuePlugin from "./lexical/SetInitialValuePlugin";
import LinkToolbarItem from "./lexical/LinkToolbarItem";

import styles from "../styles/DetailDrawer.module.css";
import ClickableLinkPlugin from "./lexical/ClickableLinkPlugin";
import { useRef } from "react";

const DetailDrawer: React.FC = () => {
  const setDrawerOpen = useSetAtom(DrawerOpenAtom);
  const [task, setTask] = useAtom(SelectedTaskAtom);
  const titleInputRef = useRef<InputRef>(null);
  if (!task) {
    return (
      <div className={styles.container}>
        <Empty />
      </div>
    );
  }
  const onClose = () => {
    setDrawerOpen(false);
  };
  const toggleDone = () => {
    setTask((prev) => {
      return { ...prev, completed: !prev.completed };
    });
  };
  const onTitleChange = (event) => {
    setTask((prev) => {
      return { ...prev, title: event.currentTarget.value };
    });
  };
  const onDueDateChange = (nextDueDate) => {
    setTask((prev) => {
      return { ...prev, dueDate: nextDueDate };
    });
  };
  const onPlanDateChange = (nextPlanDate) => {
    setTask((prev) => {
      return { ...prev, planDate: nextPlanDate };
    });
  };
  const onDescriptionChange = (editorState) => {
    editorState.read(() => {
      const hasDescprion = !$canShowPlaceholder(false);
      setTask((prev) => {
        return {
          ...prev,
          description: editorState,
          hasDescription: hasDescprion,
        };
      });
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>
          <Checkbox checked={task.completed} onChange={toggleDone} />
          <Input.TextArea
            bordered={false}
            value={task.title}
            autoSize
            onChange={onTitleChange}
            onPressEnter={(e) => {
              e.preventDefault();
              titleInputRef.current.blur();
            }}
            ref={titleInputRef}
            size="large"
          />
          <Button type="text" icon={<CloseOutlined />} onClick={onClose} />
        </div>
        <List itemLayout="horizontal">
          <List.Item>
            <List.Item.Meta
              title={
                <>
                  <FormOutlined />
                  <DatePicker
                    bordered={false}
                    suffixIcon={null}
                    placeholder="予定日を設定"
                    value={task.planDate}
                    onChange={onPlanDateChange}
                    format="M/D(ddd)"
                  />
                </>
              }
            ></List.Item.Meta>
          </List.Item>
          <List.Item>
            <List.Item.Meta
              title={
                <>
                  <CalendarOutlined />
                  <DatePicker
                    bordered={false}
                    suffixIcon={null}
                    placeholder="期限日を設定"
                    value={task.dueDate}
                    onChange={onDueDateChange}
                    format="M/D(ddd)"
                  />
                </>
              }
            />
          </List.Item>
          <List.Item>
            <div className={styles.editorContainer}>
              <LexicalComposer
                initialConfig={{
                  namespace: "DetailDrawer",
                  onError: (error) => console.log(error),
                  nodes: [LinkNode, AutoLinkNode],
                }}
              >
                <LinkToolbarItem />
                <RichTextPlugin
                  contentEditable={
                    <ContentEditable className={styles.contentEditable} />
                  }
                  placeholder={
                    <div className={styles.placeholder}>説明文を追加</div>
                  }
                  ErrorBoundary={LexicalErrorBoundary}
                />
                <LinkPlugin />
                <OnChangePlugin onChange={onDescriptionChange} />
                <HistoryPlugin />
                <SetInitialValuePlugin
                  id={task.id}
                  editorState={task.description}
                />
                <ClickableLinkPlugin newTab={false} />
              </LexicalComposer>
            </div>
          </List.Item>
        </List>
      </div>
    </div>
    /*</Drawer>*/
  );
};
export default DetailDrawer;

import { CalendarOutlined, FormOutlined } from "@ant-design/icons";
import { Checkbox, DatePicker, Drawer, List } from "antd";
import { DrawerOpenAtom, SelectedTaskAtom } from "../atoms/atoms";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { $getRoot } from "lexical";
import { $canShowPlaceholder } from "@lexical/text";

import styles from "../styles/DetailDrawer.module.css";

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

const DetailDrawer: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useAtom(DrawerOpenAtom);
  const [task, setTask] = useAtom(SelectedTaskAtom);
  if (!task) {
    return;
  }
  const onClose = () => {
    setDrawerOpen(false);
  };
  const toggleDone = () => {
    setTask((prev) => {
      return { ...prev, completed: !prev.completed };
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
    <Drawer
      open={drawerOpen}
      title={
        <>
          <Checkbox checked={task.completed} onChange={toggleDone} />{" "}
          {task.title}
        </>
      }
      closable={false}
      placement="right"
      onClose={onClose}
      width={300}
    >
      <List itemLayout="horizontal">
        <List.Item>
          <List.Item.Meta
            avatar={<FormOutlined />}
            title={
              <DatePicker
                bordered={false}
                suffixIcon={null}
                placeholder="予定日を設定"
                value={task.planDate}
                onChange={onPlanDateChange}
                format="M/D(ddd)"
              />
            }
          ></List.Item.Meta>
        </List.Item>
        <List.Item>
          <List.Item.Meta
            avatar={<CalendarOutlined />}
            title={
              <DatePicker
                bordered={false}
                suffixIcon={null}
                placeholder="期限日を設定"
                value={task.dueDate}
                onChange={onDueDateChange}
                format="M/D(ddd)"
              />
            }
          />
        </List.Item>
        <List.Item>
          <div className={styles.editorContainer}>
            <LexicalComposer
              initialConfig={{
                namespace: "DetailDrawer",
                onError: (error) => console.log(error),
              }}
            >
              <PlainTextPlugin
                contentEditable={
                  <ContentEditable className={styles.contentEditable} />
                }
                placeholder={
                  <div className={styles.placeholder}>説明文を追加</div>
                }
                ErrorBoundary={LexicalErrorBoundary}
              />
              <OnChangePlugin onChange={onDescriptionChange} />
              <SetInitialValuePlugin
                id={task.id}
                editorState={task.description}
              />
            </LexicalComposer>
          </div>
        </List.Item>
      </List>
    </Drawer>
  );
};
export default DetailDrawer;

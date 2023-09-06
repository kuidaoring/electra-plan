import { CalendarOutlined, FormOutlined } from "@ant-design/icons";
import { Checkbox, DatePicker, Drawer, List } from "antd";
import { DrawerOpenAtom, SelectedTaskAtom } from "../atoms/atoms";
import { useAtom } from "jotai";
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
      size="large"
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
    </Drawer>
  );
};
export default DetailDrawer;

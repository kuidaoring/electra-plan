import {
  CalendarOutlined,
  CloseOutlined,
  DeleteOutlined,
  RocketOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Empty,
  Input,
  InputRef,
  List,
  Popconfirm,
} from "antd";
import {
  CurrentTaskAtom,
  DeleteTaskAtom,
  DrawerOpenAtom,
  SelectedTaskAtom,
} from "../atoms/atoms";
import { useAtomValue, useSetAtom } from "jotai";
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
import dayjs from "dayjs";

const DetailDrawer: React.FC = () => {
  const setDrawerOpen = useSetAtom(DrawerOpenAtom);
  const setTask = useSetAtom(SelectedTaskAtom);
  const task = useAtomValue(CurrentTaskAtom);
  const deleteTask = useSetAtom(DeleteTaskAtom);
  const titleInputRef = useRef<InputRef>(null);
  if (!task) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <Empty />
        </div>
      </div>
    );
  }
  const onClose = () => {
    setDrawerOpen(false);
  };
  const toggleDone = () => {
    setTask((prev) => {
      return { ...prev, completedAt: prev.completedAt ? null : new Date() };
    });
  };
  const onTitleChange = (event) => {
    setTask((prev) => {
      return { ...prev, title: event.currentTarget.value };
    });
  };
  const onDueDateChange = (nextDueDate) => {
    setTask((prev) => {
      return { ...prev, dueDate: nextDueDate?.toDate() };
    });
  };
  const onPlanDateChange = (nextPlanDate) => {
    setTask((prev) => {
      return { ...prev, planDate: nextPlanDate?.toDate() };
    });
  };
  const onDescriptionChange = (editorState) => {
    editorState.read(() => {
      const hasDescprion = !$canShowPlaceholder(false);
      const nextEditorState = hasDescprion
        ? JSON.stringify(editorState)
        : undefined;
      setTask((prev) => {
        return {
          ...prev,
          description: nextEditorState,
          hasDescription: hasDescprion,
        };
      });
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Checkbox checked={!!task.completedAt} onChange={toggleDone} />
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
          className={styles.titleTextArea}
        />
        <Button type="text" icon={<CloseOutlined />} onClick={onClose} />
      </div>
      <List itemLayout="horizontal">
        <List.Item>
          <List.Item.Meta
            title={
              <>
                <RocketOutlined />
                {task.planDate &&
                dayjs(task.planDate).isSame(dayjs(), "day") ? (
                  <Button type="link" onClick={() => onPlanDateChange(null)}>
                    今日のタスクに追加されました
                    <CloseOutlined />
                  </Button>
                ) : (
                  <Button type="text" onClick={() => onPlanDateChange(dayjs())}>
                    今日のタスクに追加
                  </Button>
                )}
              </>
            }
          ></List.Item.Meta>
        </List.Item>
        <List.Item>
          <List.Item.Meta
            title={
              <>
                <ScheduleOutlined />
                <DatePicker
                  bordered={false}
                  suffixIcon={null}
                  placeholder="予定日を設定"
                  value={task.planDate ? dayjs(task.planDate) : undefined}
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
                  value={task.dueDate ? dayjs(task.dueDate) : undefined}
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
                isJson={true}
              />
              <ClickableLinkPlugin newTab={false} />
            </LexicalComposer>
          </div>
        </List.Item>
      </List>
      <div className={styles.footer}>
        <Popconfirm
          title={`"${task.title}"を削除します。`}
          description="この操作は元に戻すことができません。"
          okText="タスクを削除"
          cancelText="キャンセル"
          onConfirm={deleteTask}
        >
          <Button type="text" icon={<DeleteOutlined />} />
        </Popconfirm>
      </div>
    </div>
  );
};
export default DetailDrawer;

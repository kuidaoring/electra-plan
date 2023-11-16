import { Empty, List, Tag } from "antd";
import { Task } from "../model/Task";
import React, { ReactNode } from "react";
import { PrimitiveAtom, useAtomValue } from "jotai";
import { RawTaskListAtom, TaskListAtom } from "../atoms/atoms";
import TaskListItem from "./TaskListItem";
import dayjs from "dayjs";

type Props = {
  filter: "completed" | "incompleted";
  today: boolean;
};

type Item = {
  task: Task;
  atom: PrimitiveAtom<Task>;
};

const TaskList: React.FC<Props> = ({ filter, today }) => {
  const taskAtomList = useAtomValue(TaskListAtom);
  const rawTaskList = useAtomValue(RawTaskListAtom);
  const taskList = taskAtomList.map((atom, index) => {
    return { task: rawTaskList[index], atom: atom };
  });
  const filteredTaskList = taskList
    .filter((item) => {
      const completed = !!item.task.completedAt;
      return filter === "completed" ? completed : !completed;
    })
    .filter((item) => {
      return (
        !today ||
        (item.task.planDate && dayjs(item.task.planDate).isSame(dayjs(), "day"))
      );
    });

  const renderItem = (item: Item): ReactNode => {
    return <TaskListItem atom={item.atom} />;
  };
  if (taskList.findLastIndex.length < 1) {
    return <Empty />;
  }
  return (
    <List
      itemLayout="horizontal"
      size="small"
      dataSource={filteredTaskList}
      renderItem={renderItem}
      header={
        filter === "completed" ? (
          <Tag color="blue-inverse">完了済み</Tag>
        ) : (
          <Tag color="volcano-inverse">未完了</Tag>
        )
      }
      rowKey={(item) => item.task.id}
    />
  );
};

export default TaskList;

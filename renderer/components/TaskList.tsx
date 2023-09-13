import { Empty, List, Tag } from "antd";
import { Task } from "../interfaces";
import React, { ReactNode } from "react";
import { PrimitiveAtom, useAtomValue } from "jotai";
import { TaskAtomsAtom, TaskListAtom } from "../atoms/atoms";
import TaskListItem from "./TaskListItem";

type Props = {
  filter: "completed" | "incompleted";
};

type Item = {
  task: Task;
  atom: PrimitiveAtom<Task>;
};

const TaskList: React.FC<Props> = ({ filter }) => {
  const rawTaskList = useAtomValue(TaskListAtom);
  const taskList = useAtomValue(TaskAtomsAtom).map((atom, index) => {
    return { task: rawTaskList[index], atom: atom };
  });
  const filteredTaskList = taskList.filter((item) => {
    const completed = item.task.completed;
    return filter === "completed" ? completed : !completed;
  });

  const renderItem = (item: Item, index: number): ReactNode => {
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
      bordered={true}
      rowKey={(item) => item.task.id}
    />
  );
};

export default TaskList;

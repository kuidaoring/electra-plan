import { List } from "antd";
import { Task } from "../interfaces";
import React, { ReactNode } from "react";
import { PrimitiveAtom, useAtom } from "jotai";
import { TaskAtomsAtom } from "../atoms/atoms";
import TaskListItem from "./TaskListItem";

const TaskList: React.FC = () => {
  const [taskList] = useAtom(TaskAtomsAtom);
  const renderItem = (atom: PrimitiveAtom<Task>, index: number): ReactNode => {
    return <TaskListItem atom={atom} />;
  };
  return (
    <List
      itemLayout="horizontal"
      dataSource={taskList}
      renderItem={renderItem}
    />
  );
};

export default TaskList;

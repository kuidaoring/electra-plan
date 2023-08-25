import { List, Typography } from "antd";
const { Title } = Typography;
import { Task } from "../interfaces";
import React, { ReactNode } from "react";
import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";
import { TaskAtomsAtom } from "../atoms/atoms";
import TaskListItem from "./TaskListItem";

type Props = {
  filter: "completed" | "incompleted";
};

const TaskList: React.FC<Props> = ({ filter }) => {
  const [taskList] = useAtom(TaskAtomsAtom);
  const renderItem = (atom: PrimitiveAtom<Task>, index: number): ReactNode => {
    return <TaskListItem atom={atom} filter={filter} />;
  };
  return (
    <>
      {filter === "completed" && <Title>完了済み</Title>}
      <List
        itemLayout="horizontal"
        dataSource={taskList}
        renderItem={renderItem}
      />
    </>
  );
};

export default TaskList;

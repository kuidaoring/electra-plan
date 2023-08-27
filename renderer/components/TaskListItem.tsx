import { Checkbox, List, Tag, Typography } from "antd";
import { PrimitiveAtom, useAtom, useSetAtom } from "jotai";
import { Task } from "../interfaces";
import { DrawerOpenAtom, SelectedIdAtom } from "../atoms/atoms";
const { Text } = Typography;

type Props = {
  atom: PrimitiveAtom<Task>;
  filter: "completed" | "incompleted";
};

const TaskListItem = ({ atom, filter }: Props) => {
  const [task, setTask] = useAtom(atom);
  const setSelectedId = useSetAtom(SelectedIdAtom);
  const setDrawerOpen = useSetAtom(DrawerOpenAtom);
  const toggleDone = () => {
    setTask((prev) => {
      return { ...prev, completed: !prev.completed };
    });
  };
  if (filter === "completed" && !task.completed) {
    return null;
  }
  if (filter === "incompleted" && task.completed) {
    return null;
  }
  return (
    <List.Item
      key={task.id}
      onClick={(e) => {
        setDrawerOpen(true);
        setSelectedId(task.id);
      }}
    >
      <List.Item.Meta
        avatar={
          <Checkbox
            checked={task.completed}
            onChange={toggleDone}
            onClick={(e) => e.stopPropagation()}
          />
        }
        title={
          task.completed ? (
            <Text delete>{task.title}</Text>
          ) : (
            <Text>{task.title}</Text>
          )
        }
        description={task.dueDate}
      />
      <Tag color="blue">Plan:{task.dueDate}</Tag>
      <Tag color="magenta">Due:{task.dueDate}</Tag>
    </List.Item>
  );
};

export default TaskListItem;

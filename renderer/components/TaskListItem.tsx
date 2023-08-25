import { Checkbox, List, Tag, Typography } from "antd";
import { PrimitiveAtom, useAtom, useSetAtom } from "jotai";
import { Task } from "../interfaces";
import { DrawerOpenAtom, DrawerTaskAtom } from "../atoms/atoms";
const { Text } = Typography;

type Props = {
  atom: PrimitiveAtom<Task>;
};

const TaskListItem = ({ atom }: Props) => {
  const [task, setTask] = useAtom(atom);
  const setDrawerTask = useSetAtom(DrawerTaskAtom);
  const setDrawerOpen = useSetAtom(DrawerOpenAtom);
  const toggleDone = () => {
    setTask((prev) => {
      return { ...prev, done: !prev.done };
    });
  };
  return (
    <List.Item
      onClick={() => {
        setDrawerOpen(true);
        setDrawerTask(task);
      }}
    >
      <List.Item.Meta
        avatar={<Checkbox checked={task.done} onChange={toggleDone} />}
        title={
          task.done ? (
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

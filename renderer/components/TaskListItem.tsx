import { Checkbox, List, Tag, Typography } from "antd";
import { PrimitiveAtom, useAtom, useSetAtom } from "jotai";
import { Task } from "../interfaces";
import { DrawerOpenAtom, SelectedIdAtom } from "../atoms/atoms";
import "dayjs/locale/ja";
const { Text } = Typography;

type Props = {
  atom: PrimitiveAtom<Task>;
};

const TaskListItem = ({ atom }: Props) => {
  const [task, setTask] = useAtom(atom);
  const setSelectedId = useSetAtom(SelectedIdAtom);
  const setDrawerOpen = useSetAtom(DrawerOpenAtom);
  const toggleDone = () => {
    setTask((prev) => {
      return { ...prev, completed: !prev.completed };
    });
  };
  return (
    <List.Item
      onClick={() => {
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
      />
      {task.planDate && (
        <Tag color="blue">
          予定日:{task.planDate.locale("ja").format("M/DD(ddd)")}
        </Tag>
      )}
      {task.dueDate && (
        <Tag color="magenta">
          期限日:{task.dueDate.locale("ja").format("M/DD(ddd)")}
        </Tag>
      )}
    </List.Item>
  );
};

export default TaskListItem;

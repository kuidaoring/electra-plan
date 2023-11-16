import { Checkbox, List, Typography } from "antd";
import { PrimitiveAtom, useAtom, useSetAtom } from "jotai";
import { Task } from "../model/Task";
import { DrawerOpenAtom, SelectedIdAtom } from "../atoms/atoms";
import "dayjs/locale/ja";
import TaskListItemMeta from "./TaskListItemMeta";
import styles from "../styles/ListItem.module.css";
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
      return { ...prev, completedAt: prev.completedAt ? null : new Date() };
    });
  };
  return (
    <List.Item
      onClick={() => {
        setDrawerOpen(true);
        setSelectedId(task.id);
      }}
      className={styles.listItem}
    >
      <List.Item.Meta
        avatar={
          <Checkbox
            checked={!!task.completedAt}
            onChange={toggleDone}
            onClick={(e) => e.stopPropagation()}
          />
        }
        title={
          task.completedAt ? (
            <Text delete>{task.title}</Text>
          ) : (
            <Text>{task.title}</Text>
          )
        }
        description={<TaskListItemMeta task={task} />}
      />
    </List.Item>
  );
};

export default TaskListItem;

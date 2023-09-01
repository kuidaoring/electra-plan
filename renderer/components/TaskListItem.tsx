import { Checkbox, List, Space, Tag, Typography } from "antd";
import { PrimitiveAtom, useAtom, useSetAtom } from "jotai";
import { Task } from "../interfaces";
import { DrawerOpenAtom, SelectedIdAtom } from "../atoms/atoms";
import "dayjs/locale/ja";
import {
  CalendarOutlined,
  FileTextOutlined,
  FormOutlined,
} from "@ant-design/icons";
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
      <Space direction="vertical">
        {task.planDate && (
          <Tag color="blue" icon={<FormOutlined />}>
            {task.planDate.locale("ja").format("M/D(ddd)")}
          </Tag>
        )}
        {task.dueDate && (
          <Tag color="magenta" icon={<CalendarOutlined />}>
            {task.dueDate.locale("ja").format("M/D(ddd)")}
          </Tag>
        )}
        {task.hasDescription && (
          <Tag color="green" icon={<FileTextOutlined />}>
            メモ
          </Tag>
        )}
      </Space>
    </List.Item>
  );
};

export default TaskListItem;

import { Tag } from "antd";
import { Task } from "../interfaces";
import {
  CalendarOutlined,
  FileTextOutlined,
  FormOutlined,
} from "@ant-design/icons";

type Props = {
  task: Task;
};

const TaskListItemMeta: React.FC<Props> = ({ task }) => {
  if (!task.planDate && !task.dueDate && !task.hasDescription) {
    return null;
  }
  return (
    <>
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
    </>
  );
};
export default TaskListItemMeta;

import { Divider, Space } from "antd";
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
    <Space split={<Divider type="vertical" />}>
      {task.planDate && (
        <Space>
          <FormOutlined />
          {task.planDate.locale("ja").format("M/D(ddd)")}
        </Space>
      )}
      {task.dueDate && (
        <Space>
          <CalendarOutlined />
          {task.dueDate.locale("ja").format("M/D(ddd)")}
        </Space>
      )}
      {task.hasDescription && (
        <Space>
          {<FileTextOutlined />}
          メモ
        </Space>
      )}
    </Space>
  );
};
export default TaskListItemMeta;

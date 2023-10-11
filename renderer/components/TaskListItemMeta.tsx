import { Divider, Space } from "antd";
import { Task } from "../interfaces";
import {
  CalendarOutlined,
  FileTextOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";

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
          <ScheduleOutlined />
          {dayjs(task.planDate).locale("ja").format("M/D(ddd)")}
        </Space>
      )}
      {task.dueDate && (
        <Space>
          <CalendarOutlined />
          {dayjs(task.dueDate).locale("ja").format("M/D(ddd)")}
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

import { Divider, Space, Typography } from "antd";
import {
  Task,
  formatDueDate,
  formatPlanDate,
  isDueDateExpired,
  isDueDateToday,
  isPlanDateExpired,
  isPlanDateToday,
} from "../model/Task";
import {
  CalendarOutlined,
  FileTextOutlined,
  ScheduleOutlined,
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
        <Typography.Text type={getPlanDateType(task)}>
          <Space>
            <ScheduleOutlined />
            {formatPlanDate(task)}
          </Space>
        </Typography.Text>
      )}
      {task.dueDate && (
        <Typography.Text type={getDueDateType(task)}>
          <Space>
            <CalendarOutlined />
            {formatDueDate(task)}
          </Space>
        </Typography.Text>
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

const getPlanDateType = (task: Task) => {
  if (isPlanDateExpired(task)) {
    return "danger";
  }
  if (isPlanDateToday(task)) {
    return "warning";
  }
  return "secondary";
};

const getDueDateType = (task: Task) => {
  if (isDueDateExpired(task)) {
    return "danger";
  }
  if (isDueDateToday(task)) {
    return "warning";
  }
  return "secondary";
};

export default TaskListItemMeta;

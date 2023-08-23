import { CalendarOutlined, FormOutlined } from "@ant-design/icons";
import { Checkbox, Drawer, List, Typography } from "antd";
import { Task } from "../interfaces";
const { Text } = Typography;

type Props = {
  task: Task;
  open: boolean;
  onClose: () => void;
  onUpdateDescription: (description: string) => void;
};

const DetailDrawer: React.FC<Props> = ({
  task,
  open,
  onClose,
  onUpdateDescription,
}) => {
  return (
    <Drawer
      open={open}
      title={
        <>
          <Checkbox checked={task.done} /> {task.title}
        </>
      }
      closable={false}
      placement="right"
      onClose={onClose}
      width={300}
    >
      <List itemLayout="horizontal">
        <List.Item>
          <List.Item.Meta
            avatar={<CalendarOutlined />}
            title={task.dueDate ?? ""}
          ></List.Item.Meta>
        </List.Item>
        <List.Item>
          <List.Item.Meta
            avatar={<FormOutlined />}
            title={task.planDate ?? ""}
          ></List.Item.Meta>
        </List.Item>
        <List.Item>
          <Text
            editable={{
              onChange: onUpdateDescription,
            }}
          >
            {task.description}
          </Text>
        </List.Item>
      </List>
    </Drawer>
  );
};
export default DetailDrawer;

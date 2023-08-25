import { CalendarOutlined, FormOutlined } from "@ant-design/icons";
import { Checkbox, Drawer, List, Typography } from "antd";
import { DrawerOpenAtom, DrawerTaskAtom } from "../atoms/atoms";
import { useAtom, useAtomValue } from "jotai";
const { Text } = Typography;

const DetailDrawer: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useAtom(DrawerOpenAtom);
  const task = useAtomValue(DrawerTaskAtom);
  const onClose = () => {
    setDrawerOpen(false);
  };
  return (
    <Drawer
      open={drawerOpen}
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
          <Text>{task.description}</Text>
        </List.Item>
      </List>
    </Drawer>
  );
};
export default DetailDrawer;

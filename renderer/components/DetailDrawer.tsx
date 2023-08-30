import { CalendarOutlined, FormOutlined } from "@ant-design/icons";
import { Checkbox, DatePicker, Drawer, List, Typography } from "antd";
import { DrawerOpenAtom, SelectedTaskAtom } from "../atoms/atoms";
import { useAtom } from "jotai";
const { Text } = Typography;

const DetailDrawer: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useAtom(DrawerOpenAtom);
  const [task, setTask] = useAtom(SelectedTaskAtom);
  if (!task) {
    return;
  }
  const onClose = () => {
    setDrawerOpen(false);
  };
  const toggleDone = () => {
    setTask((prev) => {
      return { ...prev, completed: !prev.completed };
    });
  };
  const onDueDateChange = (nextDueDate) => {
    setTask((prev) => {
      return { ...prev, dueDate: nextDueDate };
    });
  };
  const onPlanDateChange = (nextPlanDate) => {
    setTask((prev) => {
      return { ...prev, planDate: nextPlanDate };
    });
  };
  return (
    <Drawer
      open={drawerOpen}
      title={
        <>
          <Checkbox checked={task.completed} onChange={toggleDone} />{" "}
          {task.title}
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
            avatar={<FormOutlined />}
            title={
              <DatePicker
                bordered={false}
                suffixIcon={null}
                placeholder="予定日を設定"
                value={task.planDate}
                onChange={onPlanDateChange}
                format="M/D(ddd)"
              />
            }
          ></List.Item.Meta>
        </List.Item>
        <List.Item>
          <List.Item.Meta
            avatar={<CalendarOutlined />}
            title={
              <DatePicker
                bordered={false}
                suffixIcon={null}
                placeholder="期限日を設定"
                value={task.dueDate}
                onChange={onDueDateChange}
                format="M/D(ddd)"
              />
            }
          />
        </List.Item>
        <List.Item>
          <Text>{task.description}</Text>
        </List.Item>
      </List>
    </Drawer>
  );
};
export default DetailDrawer;

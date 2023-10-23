import {
  CalendarOutlined,
  CheckSquareOutlined,
  LeftOutlined,
  RightOutlined,
  RocketOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
const { Sider } = Layout;
import type { MenuProps } from "antd";
import styles from "../styles/Sidebar.module.css";
import { useState } from "react";
import Link from "next/link";
import { useAtomValue } from "jotai";
import { RawTaskListAtom } from "../atoms/atoms";
import dayjs from "dayjs";

const Sidebar = ({ className, selected }) => {
  const [colapsed, setColapsed] = useState(false);
  const taskList = useAtomValue(RawTaskListAtom);

  const todaysNotCompletedTaskCount = taskList.filter(
    (task) =>
      !task.completedAt &&
      task.planDate &&
      dayjs(task.planDate).isSame(dayjs(), "day")
  ).length;

  const allNotCompletedTaskCount = taskList.filter(
    (task) => !task.completedAt
  ).length;

  const menuItems = [
    {
      label: (
        <Link href="/list/today" className={styles.menuLink}>
          <span>今日のタスク</span>
          {todaysNotCompletedTaskCount > 0 && (
            <span className={styles.taskCountTag}>
              {todaysNotCompletedTaskCount}
            </span>
          )}
        </Link>
      ),
      title: "今日のタスク",
      icon: <RocketOutlined />,
      key: "today",
    },
    {
      label: "予定日別タスク",
      titile: "予定日別タスク",
      icon: <ScheduleOutlined />,
    },
    {
      label: "期限日別タスク",
      title: "期限日別タスク",
      icon: <CalendarOutlined />,
    },
    {
      label: (
        <Link href="/list/all" className={styles.menuLink}>
          <span>全てのタスク</span>
          {allNotCompletedTaskCount > 0 && (
            <span className={styles.taskCountTag}>
              {allNotCompletedTaskCount}
            </span>
          )}
        </Link>
      ),
      title: "全てのタスク",
      icon: <CheckSquareOutlined />,
      key: "all",
    },
  ];

  return (
    <Sider
      className={className}
      style={{ backgroundColor: "rgb(244, 244, 245)" }}
      width={colapsed ? 100 : 250}
      collapsed={colapsed}
    >
      <div className={styles.container}>
        <Menu
          className={styles.menu}
          items={menuItems as MenuProps["items"]}
          defaultSelectedKeys={[selected]}
          style={{ borderRight: "none" }}
        />
        <div className={styles.footer}>
          <Button
            type="text"
            icon={colapsed ? <RightOutlined /> : <LeftOutlined />}
            onClick={() => setColapsed((prev) => !prev)}
          />
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;

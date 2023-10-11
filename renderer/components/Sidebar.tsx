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

const menuItems = [
  {
    label: <Link href="/list/today">今日のタスク</Link>,
    icon: <RocketOutlined />,
    key: "today",
  },
  {
    label: "予定日別タスク",
    icon: <ScheduleOutlined />,
  },
  {
    label: "期限日別タスク",
    icon: <CalendarOutlined />,
  },
  {
    label: <Link href="/list/all">全てのタスク</Link>,
    icon: <CheckSquareOutlined />,
    key: "all",
  },
];

const Sidebar = ({ className, selected }) => {
  const [colapsed, setColapsed] = useState(false);

  return (
    <Sider
      className={className}
      style={{ backgroundColor: "rgb(244, 244, 245)" }}
      collapsed={colapsed}
    >
      <div className={styles.container}>
        <Menu
          className={styles.menu}
          items={menuItems as MenuProps["items"]}
          defaultSelectedKeys={[selected]}
          style={{ borderRight: "none" }}
        ></Menu>
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

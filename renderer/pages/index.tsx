import React from "react";
import "ress";
import { ConfigProvider, Layout, Space, theme } from "antd";
const { Content } = Layout;
import DetailDrawer from "../components/DetailDrawer";
import TaskList from "../components/TaskList";
import TaskAddForm from "../components/TaskAddForm";
import jaJP from "antd/locale/ja_JP";
import "dayjs/locale/ja";
import { useAtomValue } from "jotai";
import { DrawerOpenAtom } from "../atoms/atoms";
import styles from "../styles/Index.module.css";

const ListPage: React.FC = () => {
  const drawerOpen = useAtomValue(DrawerOpenAtom);
  return (
    <ConfigProvider locale={jaJP}>
      <Layout className={styles.pageLayout}>
        <Content className={styles.leftContent}>
          <div>left</div>
        </Content>
        <Layout className={styles.centerLayout}>
          <Content style={{ position: "sticky", top: 0, zIndex: 1 }}>
            <TaskAddForm />
          </Content>
          <Content className={styles.listContent}>
            <Space direction="vertical" style={{ display: "flex" }}>
              <TaskList filter="incompleted" />
              <TaskList filter="completed" />
            </Space>
          </Content>
        </Layout>
        <Content
          className={`${styles.rightContent} ${
            drawerOpen ? "" : styles.rightContentClose
          }`}
        >
          <DetailDrawer />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};
export default ListPage;

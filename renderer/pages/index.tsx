import React from "react";
import "ress";
import { ConfigProvider, Layout, Space } from "antd";
const { Content } = Layout;
import DetailDrawer from "../components/DetailDrawer";
import TaskList from "../components/TaskList";
import TaskAddForm from "../components/TaskAddForm";
import jaJP from "antd/locale/ja_JP";
import "dayjs/locale/ja";
import { useAtomValue } from "jotai";
import { DrawerOpenAtom } from "../atoms/atoms";

const ListPage: React.FC = () => {
  const drawerOpen = useAtomValue(DrawerOpenAtom);
  return (
    <ConfigProvider
      locale={jaJP}
      theme={{
        token: {
          colorBgLayout: "rgb(250, 250, 250)",
        },
      }}
    >
      <Layout
        style={{ minHeight: "100vh", display: "flex", flexDirection: "row" }}
      >
        <Layout style={{ height: "100vh", flex: 1 }}>
          <Content style={{ position: "sticky", top: 0, zIndex: 1 }}>
            <TaskAddForm />
          </Content>
          <Content style={{ margin: "10px", overflow: "scroll" }}>
            <Space direction="vertical" style={{ display: "flex" }}>
              <TaskList filter="incompleted" />
              <TaskList filter="completed" />
            </Space>
          </Content>
        </Layout>
        <Content style={{ flex: 1, display: drawerOpen ? "block" : "none" }}>
          <DetailDrawer />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};
export default ListPage;

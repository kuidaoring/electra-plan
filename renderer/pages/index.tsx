import React from "react";
import "ress";
import { ConfigProvider, Layout, Space } from "antd";
const { Content, Footer } = Layout;
import DetailDrawer from "../components/DetailDrawer";
import TaskList from "../components/TaskList";
import TaskAddForm from "../components/TaskAddForm";
import jaJP from "antd/locale/ja_JP";
import "dayjs/locale/ja";

const ListPage: React.FC = () => {
  return (
    <ConfigProvider locale={jaJP}>
      <Layout style={{ minHeight: "100vh" }}>
        <Content style={{ margin: "10px" }}>
          <Space direction="vertical" style={{ display: "flex" }}>
            <TaskList filter="incompleted" />
            <TaskList filter="completed" />
          </Space>
        </Content>
        <Footer
          style={{
            position: "sticky",
            bottom: 0,
          }}
        >
          <TaskAddForm />
        </Footer>
        <DetailDrawer />
      </Layout>
    </ConfigProvider>
  );
};
export default ListPage;

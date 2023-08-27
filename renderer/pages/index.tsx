import React from "react";
import { Layout, Space } from "antd";
const { Content, Footer } = Layout;
import DetailDrawer from "../components/DetailDrawer";
import TaskList from "../components/TaskList";
import TaskAddForm from "../components/TaskAddForm";

const ListPage: React.FC = () => {
  return (
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
  );
};
export default ListPage;

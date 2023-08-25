import React from "react";
import { Layout } from "antd";
const { Content, Footer } = Layout;
import DetailDrawer from "../components/DetailDrawer";
import { TaskListAtom } from "../atoms/atoms";
import { useAtom } from "jotai";
import TaskList from "../components/TaskList";
import TaskAddForm from "../components/TaskAddForm";

const ListPage: React.FC = () => {
  const [data, setData] = useAtom(TaskListAtom);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ margin: "10px" }}>
        <TaskList filter="incompleted" />
        <TaskList filter="completed" />
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

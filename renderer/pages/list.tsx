import React, { useState } from "react";
import {
  Checkbox,
  Drawer,
  Form,
  Input,
  Layout,
  List,
  Space,
  Tag,
  Typography,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

const { Text } = Typography;

type Task = {
  title: string;
  dueDate: string;
  done: boolean;
};

const initialData: Array<Task> = [
  {
    title: "hoge",
    dueDate: "2023-08-19",
    done: false,
  },
  {
    title: "2件目",
    dueDate: "2023-08-18",
    done: true,
  },
  {
    title:
      "Electraという単語は、電気やエネルギーと関連づけられることがあります。そのため、この名前は効率的な計画やタスクの管理を意味し、エネルギーを活用して作業を進めることを強調するかもしれません。",
    dueDate: "2023-08-18",
    done: true,
  },
];

const ListPage: React.FC = () => {
  const [data, setData] = useState(initialData);
  const [drawerData, setDrawerData] = useState<Task>({
    title: "",
    dueDate: "",
    done: false,
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [form] = Form.useForm();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ margin: "10px" }}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                setDrawerData(item);
                setDrawerOpen(true);
              }}
            >
              <List.Item.Meta
                avatar={
                  <Checkbox
                    checked={item.done}
                    onChange={() => {
                      const newData = data.slice();
                      newData[index].done = !item.done;
                      setData(newData);
                    }}
                  />
                }
                title={
                  item.done ? (
                    <Text delete>{item.title}</Text>
                  ) : (
                    <Text>{item.title}</Text>
                  )
                }
                description={item.dueDate}
              />
              <Tag color="blue">Plan:{item.dueDate}</Tag>
              <Tag color="magenta">Due:{item.dueDate}</Tag>
            </List.Item>
          )}
        />
      </Content>
      <Footer
        style={{
          position: "sticky",
          bottom: 0,
        }}
      >
        <Form
          form={form}
          onFinish={(values) => {
            setData([
              {
                title: values.todo,
                dueDate: "2023-08-19",
                done: false,
              },
              ...data,
            ]);
            form.resetFields();
          }}
        >
          <Form.Item name="todo">
            <Input />
          </Form.Item>
        </Form>
      </Footer>
      <Drawer
        open={drawerOpen}
        title={drawerData.title}
        placement="right"
        onClose={() => setDrawerOpen(false)}
        width={300}
      >
        <p>
          <Tag color="blue">Plan:{drawerData.dueDate}</Tag>
          <Tag color="magenta">Due:{drawerData.dueDate}</Tag>
        </p>
        <p>{drawerData.dueDate}</p>
      </Drawer>
    </Layout>
  );
};
export default ListPage;

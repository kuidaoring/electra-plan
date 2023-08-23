import React, { useState } from "react";
import { Checkbox, Form, Input, Layout, List, Tag, Typography } from "antd";
const { Content, Footer } = Layout;
import { Task } from "../interfaces";
import DetailDrawer from "../components/DetailDrawer";

const { Text } = Typography;

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
    description: `
    Electraの要素： "Electra"という単語は、電気やエネルギーと関連づけられることがあります。そのため、この名前は効率的な計画やタスクの管理を意味し、エネルギーを活用して作業を進めることを強調するかもしれません。

    計画と組織： "Plan"は計画や組織を指す言葉です。ElectraPlanという名前は、ユーザーがタスクやプロジェクトを効果的に計画し、整理するためのツールであることを示唆しています。
    
    高度な機能と技術： "Electra"の部分が、高度な技術や機能性を意味することもあります。したがって、この名前は高度な機能や技術を備えたTODOリストアプリであることを表現しているかもしれません。
    
    モダンさと進化： "Electra"はモダンで進化的なイメージも持っています。これにより、ElectraPlanは新しいアプローチや使いやすいインターフェースを提供する、モダンなTODOリストアプリを暗示するかもしれません。
    
    総じて、"ElectraPlan"はエネルギーや効率性、計画、高度な機能、進化などの要素を結びつけた名前と言えるでしょう。ただし、名前の解釈は主観的であり、ユーザーにどのような印象を与えるかは実際のブランディングやデザインとも関連します。
    `,
  },
];

const ListPage: React.FC = () => {
  const [data, setData] = useState(initialData);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [drawerData, setDrawerData] = useState<Task>({
    title: "",
    dueDate: "",
    done: false,
    description: "",
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
                setSelectedIndex(index);
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
      <DetailDrawer
        task={drawerData}
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
          setSelectedIndex(-1);
        }}
        onUpdateDescription={(description) => {
          const newData = data.slice();
          newData[selectedIndex].description = description;
          setData(newData);
        }}
      ></DetailDrawer>
    </Layout>
  );
};
export default ListPage;

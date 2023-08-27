import { Form, Input } from "antd";
import { useAtom } from "jotai";
import { TaskListAtom } from "../atoms/atoms";
import { nanoid } from "nanoid";

const TaskAddForm = () => {
  const [taskList, setTaskList] = useAtom(TaskListAtom);
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      onFinish={(values) => {
        setTaskList([
          {
            id: nanoid(),
            title: values.todo,
            dueDate: "2023-08-19",
            completed: false,
          },
          ...taskList,
        ]);
        form.resetFields();
      }}
    >
      <Form.Item name="todo">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default TaskAddForm;

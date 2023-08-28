import { Button, DatePicker, Form, Input, Space } from "antd";
import { useAtom } from "jotai";
import { TaskListAtom } from "../atoms/atoms";
import { nanoid } from "nanoid";
import { Dayjs } from "dayjs";

type FormValue = {
  todo: string;
  dueDate?: Dayjs;
  planDate?: Dayjs;
};

const TaskAddForm = () => {
  const [taskList, setTaskList] = useAtom(TaskListAtom);
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      onFinish={(values: FormValue) => {
        setTaskList([
          {
            id: nanoid(),
            title: values.todo,
            dueDate: values.dueDate,
            planDate: values.planDate,
            completed: false,
          },
          ...taskList,
        ]);
        form.resetFields();
      }}
    >
      <Space.Compact block={true}>
        <Form.Item name="todo">
          <Input />
        </Form.Item>
        <Form.Item name="planDate">
          <DatePicker placeholder="予定日" format="M/DD(ddd)" />
        </Form.Item>
        <Form.Item name="dueDate">
          <DatePicker placeholder="期限日" format="M/DD(ddd)" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登録
          </Button>
        </Form.Item>
      </Space.Compact>
    </Form>
  );
};

export default TaskAddForm;

import { Button, DatePicker, Form, Input, Space } from "antd";
import { useAtom } from "jotai";
import { TaskListAtom } from "../atoms/atoms";
import { nanoid } from "nanoid";
import { Dayjs } from "dayjs";
import { ChangeEvent, useState } from "react";
import { CalendarOutlined, FormOutlined } from "@ant-design/icons";

type FormValue = {
  title: string;
  dueDate?: Dayjs;
  planDate?: Dayjs;
};

const TaskAddForm = () => {
  const [taskList, setTaskList] = useAtom(TaskListAtom);
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = useState(false);

  const validateForm = (title: string): void => {
    setSubmittable(!!title && !!title.match(/\S/g));
  };

  return (
    <Form
      form={form}
      onFinish={(values: FormValue) => {
        setTaskList([
          {
            id: nanoid(),
            title: values.title.trim(),
            dueDate: values.dueDate,
            planDate: values.planDate,
            completed: false,
          },
          ...taskList,
        ]);
        form.resetFields();
        setSubmittable(false);
      }}
    >
      <Space.Compact block>
        <Form.Item name="title">
          <Input
            placeholder="タスクを追加"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              validateForm(e.target.value)
            }
          />
        </Form.Item>
        <Form.Item name="planDate">
          <DatePicker
            placeholder="予定日を設定"
            suffixIcon={<FormOutlined />}
            format="M/D(ddd)"
          />
        </Form.Item>
        <Form.Item name="dueDate">
          <DatePicker
            placeholder="期限日を設定"
            suffixIcon={<CalendarOutlined />}
            format="M/D(ddd)"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={!submittable}>
            登録
          </Button>
        </Form.Item>
      </Space.Compact>
    </Form>
  );
};

export default TaskAddForm;

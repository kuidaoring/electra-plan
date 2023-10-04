import { Button, DatePicker, Form, Input, Space } from "antd";
import { useSetAtom } from "jotai";
import { CreateTaskAtom } from "../atoms/atoms";
import { nanoid } from "nanoid";
import { Dayjs } from "dayjs";
import { ChangeEvent, useState } from "react";
import {
  CalendarOutlined,
  FormOutlined,
  PlusOutlined,
} from "@ant-design/icons";

type FormValue = {
  title: string;
  dueDate?: Dayjs;
  planDate?: Dayjs;
};

const TaskAddForm = () => {
  const createTask = useSetAtom(CreateTaskAtom);
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = useState(false);

  const validateForm = (title: string): void => {
    setSubmittable(!!title && !!title.match(/\S/g));
  };

  return (
    <Form
      form={form}
      onFinish={(values: FormValue) => {
        createTask({
          id: nanoid(),
          title: values.title.trim(),
          dueDate: values.dueDate?.toDate(),
          planDate: values.planDate?.toDate(),
          completed: false,
          hasDescription: false,
          archived: false,
          createdAt: new Date(),
        }).then(() => {
          console.log("task created");
        });
        form.resetFields();
        setSubmittable(false);
      }}
    >
      <Space.Compact block>
        <Form.Item name="title" style={{ width: "100%" }}>
          <Input
            placeholder="タスク"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              validateForm(e.target.value)
            }
          />
        </Form.Item>
        <Form.Item name="planDate">
          <DatePicker
            placeholder="予定日"
            suffixIcon={<FormOutlined />}
            format="M/D(ddd)"
          />
        </Form.Item>
        <Form.Item name="dueDate">
          <DatePicker
            placeholder="期限日"
            suffixIcon={<CalendarOutlined />}
            format="M/D(ddd)"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            icon={<PlusOutlined />}
            disabled={!submittable}
          />
        </Form.Item>
      </Space.Compact>
    </Form>
  );
};

export default TaskAddForm;

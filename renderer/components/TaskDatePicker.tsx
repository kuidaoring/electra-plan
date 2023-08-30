import { DatePicker } from "antd";
import { Dayjs } from "dayjs";
import { ReactNode } from "react";

type Props = {
  onChange?: (newDateValue: Dayjs) => void;
  value?: Dayjs;
  placeholder?: string;
  icon?: ReactNode;
};

const TaskDatePicker: React.FC<Props> = ({
  onChange,
  value,
  placeholder,
  icon,
}) => {
  return (
    <DatePicker
      suffixIcon={icon}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      format="M/D(ddd)"
    />
  );
};

export default TaskDatePicker;

import dayjs from "dayjs";

export type Task = {
  id: string;
  title: string;
  dueDate?: Date;
  planDate?: Date;
  completedAt?: Date;
  description?: string;
  hasDescription: boolean;
  archivedAt?: Date;
  createdAt: Date;
};

export const formatPlanDate = (task: Task) => {
  return formatDate(task.planDate);
};

export const formatDueDate = (task: Task) => {
  return formatDate(task.dueDate);
};

const formatDate = (date: Date) => {
  return dayjs(date).locale("ja").format("M/D(ddd)");
};

export const isPlanDateExpired = (task: Task) => {
  return !task.completedAt && task.planDate
    ? isDateExpired(task.planDate)
    : false;
};

export const isDueDateExpired = (task: Task) => {
  return !task.completedAt && task.dueDate
    ? isDateExpired(task.dueDate)
    : false;
};

const isDateExpired = (date: Date) => {
  return date && dayjs(date).isBefore(dayjs(), "day");
};

export const isPlanDateToday = (task: Task) => {
  return !task.completedAt && task.planDate
    ? isDateToday(task.planDate)
    : false;
};

export const isDueDateToday = (task: Task) => {
  return !task.completedAt && task.dueDate ? isDateToday(task.dueDate) : false;
};

const isDateToday = (date: Date) => {
  return date && dayjs(date).isSame(dayjs(), "day");
};

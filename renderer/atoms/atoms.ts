import { atom } from "jotai";
import { splitAtom } from "jotai/utils";
import { Task } from "../interfaces";
import { nanoid } from "nanoid";
import dayjs from "dayjs";

const initialTaskList: Array<Task> = [
  {
    id: nanoid(),
    title: "hoge_atom",
    planDate: dayjs("2023-08-09"),
    dueDate: dayjs("2023-08-19"),
    completed: false,
  },
  {
    id: nanoid(),
    title: "2件目_atom",
    dueDate: dayjs("2023-08-18"),
    completed: true,
  },
  {
    id: nanoid(),
    title:
      "Electraという単語は、電気やエネルギーと関連づけられることがあります。そのため、この名前は効率的な計画やタスクの管理を意味し、エネルギーを活用して作業を進めることを強調するかもしれません。",
    dueDate: dayjs("2023-08-18"),
    completed: true,
  },
];
export const TaskListAtom = atom(initialTaskList);
// export const TaskListAtom = atom<Task[]>([]);
export const TaskAtomsAtom = splitAtom(TaskListAtom);
export const DrawerOpenAtom = atom(false);
export const SelectedIdAtom = atom("");
export const SelectedTaskAtom = atom(
  (get) => {
    const taskList = get(TaskAtomsAtom);
    const id = get(SelectedIdAtom);
    const atom = taskList.find((atom) => get(atom).id === id);
    return atom ? get(atom) : null;
  },
  (get, set, newValue) => {
    const taskList = get(TaskAtomsAtom);
    const id = get(SelectedIdAtom);
    const task = taskList.find((taskAtom) => get(taskAtom).id === id);
    if (!task) {
      return;
    }
    set(task, newValue);
  }
);

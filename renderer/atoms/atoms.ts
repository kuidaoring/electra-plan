import { PrimitiveAtom, atom, useSetAtom } from "jotai";
import { splitAtom } from "jotai/utils";
import { Task } from "../interfaces";
import { nanoid } from "nanoid";
import dayjs from "dayjs";

const initialTaskList: Array<Task> = [
  {
    id: nanoid(),
    title: "hoge_atom",
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
    description: `
    Electraの要素： "Electra"という単語は、電気やエネルギーと関連づけられることがあります。そのため、この名前は効率的な計画やタスクの管理を意味し、エネルギーを活用して作業を進めることを強調するかもしれません。

    計画と組織： "Plan"は計画や組織を指す言葉です。ElectraPlanという名前は、ユーザーがタスクやプロジェクトを効果的に計画し、整理するためのツールであることを示唆しています。
    
    高度な機能と技術： "Electra"の部分が、高度な技術や機能性を意味することもあります。したがって、この名前は高度な機能や技術を備えたTODOリストアプリであることを表現しているかもしれません。
    
    モダンさと進化： "Electra"はモダンで進化的なイメージも持っています。これにより、ElectraPlanは新しいアプローチや使いやすいインターフェースを提供する、モダンなTODOリストアプリを暗示するかもしれません。
    
    総じて、"ElectraPlan"はエネルギーや効率性、計画、高度な機能、進化などの要素を結びつけた名前と言えるでしょう。ただし、名前の解釈は主観的であり、ユーザーにどのような印象を与えるかは実際のブランディングやデザインとも関連します。
    `,
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
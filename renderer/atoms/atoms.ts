import { PrimitiveAtom, atom } from "jotai";
import { Task } from "../interfaces";

const createTaskAtom = (task: Task) => {
  const baseAtom = atom(task);
  const anAtom = atom(
    (get) => get(baseAtom),
    async (get, set, update) => {
      const nextValue =
        typeof update === "function" ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      await window.electron.updateTask(nextValue);
    }
  );
  return anAtom;
};

const BaseTaskListAtom = atom<PrimitiveAtom<Task>[]>([]);
BaseTaskListAtom.onMount = (set) => {
  window.electron.getAllTasks().then((tasks) =>
    set(
      tasks.map((task) => {
        return createTaskAtom(task);
      })
    )
  );
};

export const TaskListAtom = atom((get) => {
  return get(BaseTaskListAtom);
});

export const RawTaskListAtom = atom((get) => {
  return get(BaseTaskListAtom).map((atom) => get(atom));
});

export const SelectedIdAtom = atom("");
export const SelectedTaskAtom = atom(
  (get) => {
    const atom = get(TaskListAtom).find(
      (atom) => get(atom).id === get(SelectedIdAtom)
    );
    return atom ? get(atom) : null;
  },
  async (get, set, newValue) => {
    const atom = get(TaskListAtom).find(
      (atom) => get(atom).id === get(SelectedIdAtom)
    );
    if (!atom) {
      return;
    }
    const nextValue =
      typeof newValue === "function" ? newValue(get(atom)) : newValue;
    set(atom, nextValue);
    await window.electron.updateTask(nextValue as Task);
  }
);

export const CreateTaskAtom = atom(null, async (get, set, newTask: Task) => {
  set(BaseTaskListAtom, (prev) => {
    return [...prev, createTaskAtom(newTask)];
  });
  await window.electron.createTask(newTask);
});

export const DeleteTaskAtom = atom(null, async (get, set) => {
  const selected = get(SelectedTaskAtom);
  if (selected) {
    set(BaseTaskListAtom, (prev) => {
      return prev.filter((atom) => get(atom).id !== selected.id);
    });
    await window.electron.deleteTask(selected.id);
  }
});

export const DrawerOpenAtom = atom(false);

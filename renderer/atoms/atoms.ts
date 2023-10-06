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

const PrevTimerAtom = atom<ReturnType<typeof setTimeout> | undefined>(
  undefined
) as PrimitiveAtom<ReturnType<typeof setTimeout> | undefined>;
const _CurrentTaskAtom = atom<Task | null>(null) as PrimitiveAtom<Task | null>;
export const CurrentTaskAtom = atom((get) => {
  return get(_CurrentTaskAtom);
});
const _SelectedIdAtom = atom("");
export const SelectedIdAtom = atom(
  (get) => {
    return get(_SelectedIdAtom);
  },
  (get, set, id) => {
    set(_SelectedIdAtom, id);
    const atom = get(TaskListAtom).find((atom) => get(atom).id === id);
    set(_CurrentTaskAtom, get(atom));
  }
);
export const SelectedTaskAtom = atom(
  (get) => {
    const atom = get(TaskListAtom).find(
      (atom) => get(atom).id === get(SelectedIdAtom)
    );
    return atom ? get(atom) : null;
  },
  async (get, set, newValue: Task | Function) => {
    const atom = get(TaskListAtom).find(
      (atom) => get(atom).id === get(SelectedIdAtom)
    );
    if (!atom) {
      return;
    }

    clearTimeout(get(PrevTimerAtom));

    const nextValue =
      typeof newValue === "function" ? newValue(get(atom)) : newValue;

    const onDebounceStart = () => {
      set(_CurrentTaskAtom, nextValue);
    };

    const onDebounceEnd = () => {
      set(atom, get(_CurrentTaskAtom));
    };

    onDebounceStart();

    const nextTimerId = setTimeout(() => {
      onDebounceEnd();
    }, 500);

    set(PrevTimerAtom, nextTimerId);
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

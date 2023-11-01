import "reflect-metadata";
import { DataSource, IsNull } from "typeorm";
import { TaskEntity } from "./entity/taskEntity";
import { Task } from "../renderer/interfaces";
import dayjs from "dayjs";

class TaskDatabase {
  dataSource: DataSource;

  constructor(path: string) {
    this.dataSource = new DataSource({
      type: "sqlite",
      database: path,
      entities: [TaskEntity],
    });
    this.dataSource.initialize();
  }

  getAllTasks(): Promise<Task[]> {
    return this.dataSource.manager
      .find(TaskEntity, {
        where: { archivedAt: IsNull() },
        order: { createdAt: "DESC" },
      })
      .then((tasks) => {
        return tasks.map((task) => {
          return entityToModel(task);
        });
      });
  }

  getTodayTasks(): Promise<Task[]> {
    return this.dataSource.manager
      .find(TaskEntity, {
        where: {
          archivedAt: IsNull(),
          planDate: dayjs().startOf("day").toISOString(),
        },
        order: { createdAt: "DESC" },
      })
      .then((tasks) => {
        return tasks.map((task) => {
          return entityToModel(task);
        });
      });
  }

  createTask(task: Task) {
    return this.dataSource.manager.save(modelToEntity(task));
  }

  updateTask(task: Task) {
    return this.dataSource.manager.save(modelToEntity(task));
  }

  deleteTask(id: string) {
    return this.dataSource.manager.delete(TaskEntity, id);
  }
}

const entityToModel = (entity: TaskEntity): Task => {
  return {
    id: entity.id,
    title: entity.title,
    dueDate: entity.dueDate ? dayjs(entity.dueDate).toDate() : undefined,
    planDate: entity.planDate ? dayjs(entity.planDate).toDate() : undefined,
    completedAt: entity.completedAt
      ? dayjs(entity.completedAt).toDate()
      : undefined,
    description: entity.description ? entity.description : undefined,
    hasDescription: !!entity.description,
    archivedAt: entity.archivedAt
      ? dayjs(entity.archivedAt).toDate()
      : undefined,
    createdAt: dayjs(entity.createdAt).toDate(),
  };
};

const modelToEntity = (model: Task): TaskEntity => {
  return new TaskEntity(
    model.id,
    model.title,
    model.dueDate ? dayjs(model.dueDate).toISOString() : null,
    model.planDate ? dayjs(model.planDate).toISOString() : null,
    model.completedAt ? dayjs(model.completedAt).toISOString() : null,
    model.description ? model.description : null,
    model.archivedAt ? dayjs(model.archivedAt).toISOString() : null,
    dayjs(model.createdAt).toISOString()
  );
};

export default TaskDatabase;

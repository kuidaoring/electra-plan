import "reflect-metadata";
import { DataSource } from "typeorm";
import { TaskEntity } from "./entity/taskEntity";
import { Task } from "../renderer/interfaces";
import dayjs from "dayjs";

class TaskDatabase {
  dataSource: DataSource;

  constructor(path: string) {
    this.dataSource = new DataSource({
      type: "sqlite",
      database: path,
      enableWAL: true,
      entities: [TaskEntity],
    });
    this.dataSource.initialize();
  }

  getAllTasks(): Promise<Task[]> {
    return this.dataSource.manager
      .find(TaskEntity, {
        where: { archived: false },
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
    completed: entity.completed,
    description: entity.description,
    hasDescription: !!entity.description,
    archived: entity.archived,
    createdAt: dayjs(entity.createdAt).toDate(),
  };
};

const modelToEntity = (model: Task): TaskEntity => {
  return new TaskEntity(
    model.id,
    model.title,
    model.dueDate ? dayjs(model.dueDate).toISOString() : undefined,
    model.planDate ? dayjs(model.planDate).toISOString() : undefined,
    model.completed,
    model.description,
    model.archived,
    dayjs(model.createdAt).toISOString()
  );
};

export default TaskDatabase;

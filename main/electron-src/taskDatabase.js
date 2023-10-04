"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const taskEntity_1 = require("./entity/taskEntity");
const dayjs_1 = __importDefault(require("dayjs"));
class TaskDatabase {
    dataSource;
    constructor(path) {
        this.dataSource = new typeorm_1.DataSource({
            type: "sqlite",
            database: path,
            enableWAL: true,
            entities: [taskEntity_1.TaskEntity],
        });
        this.dataSource.initialize();
    }
    getAllTasks() {
        return this.dataSource.manager
            .find(taskEntity_1.TaskEntity, {
            where: { archived: false },
            order: { createdAt: "DESC" },
        })
            .then((tasks) => {
            return tasks.map((task) => {
                return entityToModel(task);
            });
        });
    }
    createTask(task) {
        return this.dataSource.manager.save(modelToEntity(task));
    }
    updateTask(task) {
        return this.dataSource.manager.save(modelToEntity(task));
    }
    deleteTask(id) {
        return this.dataSource.manager.delete(taskEntity_1.TaskEntity, id);
    }
}
const entityToModel = (entity) => {
    return {
        id: entity.id,
        title: entity.title,
        dueDate: entity.dueDate ? (0, dayjs_1.default)(entity.dueDate).toDate() : undefined,
        planDate: entity.planDate ? (0, dayjs_1.default)(entity.planDate).toDate() : undefined,
        completed: entity.completed,
        description: entity.description,
        hasDescription: !!entity.description,
        archived: entity.archived,
        createdAt: (0, dayjs_1.default)(entity.createdAt).toDate(),
    };
};
const modelToEntity = (model) => {
    return new taskEntity_1.TaskEntity(model.id, model.title, model.dueDate ? (0, dayjs_1.default)(model.dueDate).toISOString() : undefined, model.planDate ? (0, dayjs_1.default)(model.planDate).toISOString() : undefined, model.completed, model.description, model.archived, (0, dayjs_1.default)(model.createdAt).toISOString());
};
exports.default = TaskDatabase;

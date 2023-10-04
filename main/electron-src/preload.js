"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const electron_1 = require("electron");
console.log("preload.ts");
// Since we disabled nodeIntegration we can reintroduce
// needed node functionality here
process.once("loaded", () => {
    global.ipcRenderer = electron_1.ipcRenderer;
});
exports.API = {
    getAllTasks: () => {
        return electron_1.ipcRenderer.invoke("task:getAllTasks");
    },
    createTask: (task) => {
        return electron_1.ipcRenderer.invoke("task:createTask", task);
    },
    updateTask: (task) => {
        return electron_1.ipcRenderer.invoke("task:updateTask", task);
    },
    deleteTask: (id) => {
        return electron_1.ipcRenderer.invoke("task:deleteTask", id);
    },
};
electron_1.contextBridge.exposeInMainWorld("electron", exports.API);

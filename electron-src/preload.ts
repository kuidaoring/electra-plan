/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  ipcRenderer,
  IpcRenderer,
  contextBridge,
  IpcRendererEvent,
} from "electron";
import { Task } from "../renderer/interfaces";

declare global {
  namespace NodeJS {
    interface Global {
      ipcRenderer: IpcRenderer;
    }
  }
}

console.log("preload.ts");

// Since we disabled nodeIntegration we can reintroduce
// needed node functionality here
process.once("loaded", () => {
  global.ipcRenderer = ipcRenderer;
});

export const API = {
  getAllTasks: (): Promise<Task[]> => {
    return ipcRenderer.invoke("task:getAllTasks");
  },
  createTask: (task: Task): Promise<void> => {
    return ipcRenderer.invoke("task:createTask", task);
  },
  updateTask: (task: Task): Promise<void> => {
    return ipcRenderer.invoke("task:updateTask", task);
  },
  deleteTask: (id: string): Promise<void> => {
    return ipcRenderer.invoke("task:deleteTask", id);
  },
  onOpenTask: (
    callback: (event: IpcRendererEvent, id: string) => void
  ): void => {
    ipcRenderer.on("task:openTask", callback);
  },
};

contextBridge.exposeInMainWorld("electron", API);

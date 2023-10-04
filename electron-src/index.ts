// Native
import { join } from "path";
import { format } from "url";
import fs from "fs";

// Packages
import {
  BrowserWindow,
  app,
  ipcMain,
  IpcMainEvent,
  shell,
  IpcMainInvokeEvent,
} from "electron";
import isDev from "electron-is-dev";
import prepareNext from "electron-next";

// Database
import { Database } from "sqlite3";
import TaskDatabase from "./taskDatabase";
import { Task } from "../renderer/interfaces";

// const taskDatabase = initDatabase(app.getPath("appData"));
const taskDatabase = initDatabase(app.getPath("appData"));

function initDatabase(appDataPath: string) {
  const appDataDir = join(appDataPath, "electra-plan");
  if (!fs.existsSync(appDataDir)) {
    fs.mkdirSync(appDataDir);
  }
  const databaseFilePath = join(appDataDir, "data.db");
  const database = new Database(databaseFilePath);
  const ddl = `
  CREATE TABLE IF NOT EXISTS tasks(
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    planDate TEXT,
    dueDate TEXT,
    completed INTEGER NOT NULL,
    archived INTEGER NOT NULL,
    createdAt TEXT
  )
`;
  database.serialize(() => {
    database.run(ddl);
  });
  return new TaskDatabase(databaseFilePath);
}

// Prepare the renderer once the app is ready
app.on("ready", async () => {
  await prepareNext("./renderer");

  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 1000,
    minHeight: 800,
    titleBarStyle: "hidden",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, "preload.js"),
    },
  });

  const handleLinkClick = (
    details: Electron.Event<Electron.WebContentsWillNavigateEventParams>
  ) => {
    if (details.url.match(/^https?:/)) {
      details.preventDefault();
      shell.openExternal(details.url);
    }
  };
  mainWindow.webContents.on("will-navigate", handleLinkClick);

  const url = isDev
    ? "http://localhost:8000/"
    : format({
        pathname: join(__dirname, "../renderer/out/index.html"),
        protocol: "file:",
        slashes: true,
      });

  mainWindow.loadURL(url);
});

// Quit the app once all windows are closed
app.on("window-all-closed", app.quit);

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on("message", (event: IpcMainEvent, message: any) => {
  console.log(message);
  setTimeout(() => event.sender.send("message", "hi from electron"), 500);
});

ipcMain.handle("task:getAllTasks", () => {
  return taskDatabase.getAllTasks();
});

ipcMain.handle("task:createTask", (_event: IpcMainInvokeEvent, task: Task) => {
  return taskDatabase.createTask(task);
});

ipcMain.handle("task:updateTask", (_event: IpcMainInvokeEvent, task: Task) => {
  return taskDatabase.updateTask(task);
});

ipcMain.handle("task:deleteTask", (_event: IpcMainInvokeEvent, id: string) => {
  return taskDatabase.deleteTask(id);
});

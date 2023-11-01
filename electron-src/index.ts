// Native
import { join } from "path";
import { format } from "url";
import fs from "fs";

// Packages
import {
  BrowserWindow,
  app,
  ipcMain,
  shell,
  IpcMainInvokeEvent,
  Tray,
  Menu,
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
    completedAt TEXT,
    archivedAt TEXT,
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

  const tray = new Tray(join(__dirname, "../../asset/trayIconTemplate@2x.png"));
  tray.setToolTip("Electra Plan");
  const updateTray = () => {
    setTimeout(async () => {
      const todayTasks = await taskDatabase.getTodayTasks();
      if (todayTasks.length === 0) {
        tray.setContextMenu(
          Menu.buildFromTemplate([
            { label: "今日のタスクはありません", enabled: false },
          ])
        );
        return;
      }
      const template: Electron.MenuItemConstructorOptions[] = [
        { label: "今日のタスク", enabled: false },
        { type: "separator" },
      ];
      todayTasks.forEach((task) => {
        template.push({
          icon: !!task.completedAt
            ? join(__dirname, "../../asset/menuCheckIconTemplate@2x.png")
            : join(__dirname, "../../asset/menuEmptyIconTemplate@2x.png"),
          label: task.title,
        });
      });
      tray.setContextMenu(Menu.buildFromTemplate(template));
      tray.setTitle(
        `${todayTasks.filter((task) => !!task.completedAt).length} / ${
          todayTasks.length
        }`
      );
    }, 100);
  };

  ipcMain.handle("task:getAllTasks", () => {
    updateTray();
    return taskDatabase.getAllTasks();
  });

  ipcMain.handle(
    "task:createTask",
    (_event: IpcMainInvokeEvent, task: Task) => {
      const taskEntityPromise = taskDatabase.createTask(task);
      updateTray();
      return taskEntityPromise;
    }
  );

  ipcMain.handle(
    "task:updateTask",
    (_event: IpcMainInvokeEvent, task: Task) => {
      const taskEntityPromise = taskDatabase.updateTask(task);
      updateTray();
      return taskEntityPromise;
    }
  );

  ipcMain.handle(
    "task:deleteTask",
    (_event: IpcMainInvokeEvent, id: string) => {
      const deleteResultPromise = taskDatabase.deleteTask(id);
      updateTray();
      return deleteResultPromise;
    }
  );

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
    ? "http://localhost:8000/list/all"
    : format({
        pathname: join(__dirname, "../renderer/out/index.html"),
        protocol: "file:",
        slashes: true,
      });

  mainWindow.loadURL(url);
});

// Quit the app once all windows are closed
app.on("window-all-closed", app.quit);

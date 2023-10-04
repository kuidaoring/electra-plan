"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Native
const path_1 = require("path");
const url_1 = require("url");
const fs_1 = __importDefault(require("fs"));
// Packages
const electron_1 = require("electron");
const electron_is_dev_1 = __importDefault(require("electron-is-dev"));
const electron_next_1 = __importDefault(require("electron-next"));
// Database
const sqlite3_1 = require("sqlite3");
const taskDatabase_1 = __importDefault(require("./taskDatabase"));
// const taskDatabase = initDatabase(app.getPath("appData"));
const taskDatabase = initDatabase(electron_1.app.getPath("appData"));
function initDatabase(appDataPath) {
    const appDataDir = (0, path_1.join)(appDataPath, "electra-plan");
    if (!fs_1.default.existsSync(appDataDir)) {
        fs_1.default.mkdirSync(appDataDir);
    }
    const databaseFilePath = (0, path_1.join)(appDataDir, "data.db");
    const database = new sqlite3_1.Database(databaseFilePath);
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
    return new taskDatabase_1.default(databaseFilePath);
}
// Prepare the renderer once the app is ready
electron_1.app.on("ready", async () => {
    await (0, electron_next_1.default)("./renderer");
    const mainWindow = new electron_1.BrowserWindow({
        width: 1000,
        height: 800,
        minWidth: 1000,
        minHeight: 800,
        titleBarStyle: "hidden",
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: (0, path_1.join)(__dirname, "preload.js"),
        },
    });
    const handleLinkClick = (details) => {
        if (details.url.match(/^https?:/)) {
            details.preventDefault();
            electron_1.shell.openExternal(details.url);
        }
    };
    mainWindow.webContents.on("will-navigate", handleLinkClick);
    const url = electron_is_dev_1.default
        ? "http://localhost:8000/"
        : (0, url_1.format)({
            pathname: (0, path_1.join)(__dirname, "../renderer/out/index.html"),
            protocol: "file:",
            slashes: true,
        });
    mainWindow.loadURL(url);
});
// Quit the app once all windows are closed
electron_1.app.on("window-all-closed", electron_1.app.quit);
// listen the channel `message` and resend the received message to the renderer process
electron_1.ipcMain.on("message", (event, message) => {
    console.log(message);
    setTimeout(() => event.sender.send("message", "hi from electron"), 500);
});
electron_1.ipcMain.handle("task:getAllTasks", () => {
    return taskDatabase.getAllTasks();
});
electron_1.ipcMain.handle("task:createTask", (_event, task) => {
    return taskDatabase.createTask(task);
});
electron_1.ipcMain.handle("task:updateTask", (_event, task) => {
    return taskDatabase.updateTask(task);
});
electron_1.ipcMain.handle("task:deleteTask", (_event, id) => {
    return taskDatabase.deleteTask(id);
});

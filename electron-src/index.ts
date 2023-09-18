// Native
import { join } from "path";
import { format } from "url";

// Packages
import { BrowserWindow, app, ipcMain, IpcMainEvent, shell } from "electron";
import isDev from "electron-is-dev";
import prepareNext from "electron-next";

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
      contextIsolation: false,
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

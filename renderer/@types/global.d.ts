import { API } from "../../electron-src/preload";

declare global {
  interface Window {
    electron: typeof API;
  }
}

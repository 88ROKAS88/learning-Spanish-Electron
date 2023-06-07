const electron = require("electron");
const url = require("url");
const path = require("path");
const { app, BrowserWindow } = electron;

let mainWindow;

app.on("ready", function () {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/mainWindow.html`);
});

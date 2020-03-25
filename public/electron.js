const { app, BrowserWindow, Menu, Tray } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

let tray = null;
function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    fullscreen: true,
    alwaysOnTop: true,
    frame: false,
    transparent: true,
    icon: "../build/logo192.png"
    // webPreferences: {
    //   nodeIntegration: true
    // }
  });

  //load a local HTML file
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  win.setIgnoreMouseEvents(true);

  // Open the DevTools.
  // win.webContents.openDevTools();
  // win.hide();
  const iconPath = path.join(__dirname, "../build/logo192.png");

  tray = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Hide",
      click: function() {
        win.hide();
      }
    },
    {
      label: "Show",
      click: function() {
        win.show();
      }
    },
    {
      label: "Quit",
      click: function() {
        app.quit();
      }
    }
  ]);
  tray.setToolTip("This is my application.");
  tray.setContextMenu(contextMenu);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// const iconPath = path.join(__dirname, "../build/logo192.png");

// let tray = null;
// app.on("ready", () => {
//   tray = new Tray(iconPath);
//   const contextMenu = Menu.buildFromTemplate([
//     {
//       label: "Hide",
//       click: function() {
//         app.exit();
//       }
//     },
//     {
//       label: "Quit",
//       click: function() {
//         app.quit();
//       }
//     }
//   ]);
//   tray.setToolTip("This is my application.");
//   tray.setContextMenu(contextMenu);
// });

const { app, BrowserWindow } = require("electron")


function createwindow(){
  const win = new BrowserWindow({ window: 800, height: 600 });

  win.loadURL("http://localhost:3000");
}

app.on("ready", createwindow);
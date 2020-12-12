const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1920,
    height: 850,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: true
  })

  win.loadFile('index.html')
  win.webContents.openDevTools()
}

try {
    require('electron-reloader')(module)
} catch (_) {}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
const { app, BrowserWindow } = require('electron');

let mainWindow;

// Window Close
function onClosed() {
    mainWindow = null;
}

// Window Create
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 640,
        height: 480
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.on('closed', onClosed);
}

// IF OSX, sleep mode
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    } 
});

// IF OSX sleep mode New Window check
app.on('activate', () => {
    if (!mainWindow) {
        createWindow();
    }
});

// new start
app.on('ready', () => {
    createWindow();
});
const electron = require('electron');
const app = electron.app;
const windows = require('./windows');

app.on('ready', createWindow);

function createWindow(){
    windows.main.init();
    windows.main.show();
}; 
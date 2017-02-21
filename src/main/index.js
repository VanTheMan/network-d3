const electron = require('electron');
const app = electron.app;
const windows = require('./windows');
const ipc = require('./ipc');

app.on('ready', createWindow);

function createWindow(){
    windows.main.init();
    windows.main.show();
}; 

ipc.init();
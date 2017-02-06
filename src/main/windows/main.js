const path = require('path');

const main = module.exports = {
    window: null,
    init,
    show,
    hide
}

const electron = require('electron');
const app = electron.app;

function init(options){
    if (main.window){
        return main.window.show();
    }

    const window = main.window = new electron.BrowserWindow({
        width: 900,
        height: 600
    });

    window.loadURL('file://' + path.join(__dirname, '../..', 'static', 'main.html'));
}

function show(){
    main.window.show();
}

function hide(){
    main.window.hide();
}
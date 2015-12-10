/// <reference path="../typings/github-electron/github-electron.d.ts" />
const app : GitHubElectron.App = require('app');
const Menu = require('menu');
const BrowserWindow = require('browser-window');
import * as dgram from 'dgram';

let mainWindow = null;
const client = require('electron-connect').client;

app.on('ready', function() {

  mainWindow = new BrowserWindow({width: 1400, height: 1000});
  mainWindow.toggleDevTools()
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  client.create(mainWindow);

  Menu.setApplicationMenu(menu);

  mainWindow.on('closed', function() {
    app.quit();
  });
});

let template = [
  {
    label: 'Quit',
    submenu: [
      {
        label: 'Quit Speller',
        accelerator: 'Command+Q',
        click: function() {
          app.quit();
        }
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Open DevTools',
        accelerator: 'Alt+Command+I',
        click: function() {
          BrowserWindow.getFocusedWindow().toggleDevTools();
        }
      }
    ]
  }
];

var menu = Menu.buildFromTemplate(template);
const host = {
    address: "0.0.0.0",
    port: 8000
}
const socket = dgram.createSocket("udp4");

socket.on('listening', () => {
    var address = socket.address();
    console.log('UDP socket listening on ' + address.address + ":" + address.port);
});

socket.on('message', (message, remote) => {
    console.log(remote.address + ':' + remote.port +' - ' + message);
    mainWindow.send('receive-command', message);
});

socket.bind(host.port, host.address);

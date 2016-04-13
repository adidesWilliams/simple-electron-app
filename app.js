var app = require('app');
var BrowserWindow = require('browser-window');
var ipcMain = require('electron').ipcMain;

var mainWindow = null;
var testWindow = null;

app.on('window-all-closed', function(){
	if(process != 'darwin'){
		app.quit();
	}
});

app.on('ready', function(){

//----mainwindow	
	mainWindow = new BrowserWindow({
		width: 500,
		height: 400,
		resizable: false,
		frame: false
	});

	mainWindow.loadURL('file://'+__dirname+'/html/index.html');

	mainWindow.on('close', function(){
		if(process.platform != 'darwin') {
			mainWindow = null;
		}

	});

//----testWindow
	testWindow = new BrowserWindow({
		width: 500,
		height: 400,
		show: false,
		resizable: false,
		frame: false
	})

	testWindow.loadURL('file://'+__dirname+'/html/test.html');

	testWindow.on('close', function(){
		testWindow = null;
	});

//-----messages from renderer

ipcMain.on('new-entry', function(){
	testWindow.show();
});

ipcMain.on('hide-test', function(){
	testWindow.hide();
});

ipcMain.on('close-main-window', function(){
	app.quit();
});


});
var remote = require('remote');

var ipcRenderer = require('electron').ipcRenderer;

var Menu = remote.require('menu');

var menu = Menu.buildFromTemplate([
	{	label: 'Data Entry', 
			submenu:
			[
				{ label: 'New File', click: function(){ ipcRenderer.send('new-entry'); } },
				{ label: 'Exit', click: function(){ ipcRenderer.send('close-main-window'); } }

			] 
	}



]);

Menu.setApplicationMenu(menu);
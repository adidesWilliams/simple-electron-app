var ipcRenderer = require('electron').ipcRenderer;

$('#new-entry').on('click', function(e){
	e.preventDefault();
	ipcRenderer.send('new-entry');
});

$('#hide-test').on('click', function(){
	ipcRenderer.send('hide-test');
});
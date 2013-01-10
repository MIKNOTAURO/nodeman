var events = require('events');
var eventEmitter = new events.EventEmitter();

function mLoop(){
	console.log('Starting app');
	eventEmitter.emit('AppStart');

	console.log('Run App');
	eventEmitter.emit('AppRun');

	console.log('Stop App');
	eventEmitter.emit('AppStop');
}

function onAppStart(){
	console.log('handling App Start Event');
}

function onAppRun(){
	console.log('handling App Run Event');
}

function onAppStop(){
	console.log('handling App Stop Event');
}

eventEmitter.on('AppStart', onAppStart);
eventEmitter.on('AppRun', onAppRun);
eventEmitter.on('AppStop', onAppStop);


mLoop();
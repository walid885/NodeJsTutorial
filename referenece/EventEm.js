const EventEmitter = require('events')

// create a class

class MyEmitter extends EventEmitter {}
const myEM = new MyEmitter()

// event listner 
myEM.on('event',() => console.log("event fired"));

// init event 
myEM.emit('event')

// practicale use , logger 
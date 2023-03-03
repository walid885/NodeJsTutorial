const Logger = require('./Logger')
const logger = new Logger();
logger.on('message',(data) => console.log('Called listner ', data)); 
logger.log("hello world ")
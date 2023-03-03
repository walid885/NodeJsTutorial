/*const Logger = require('./Logger')
const logger = new Logger();
logger.on('message',(data) => console.log('Called listner ', data)); 
logger.log("hello world ") */ 

const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res)=>{
if ( req.url === '/'){
    res.writeHead(200, {'content-type': 'text/html'});
    res.end('<h1> Home mdafakaaaa </h1>')
}

}); 
const port = process.env.port || 5000
server.listen(port,() => console.log(`Server is running on port ${port}`))
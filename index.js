/*const Logger = require('./Logger')
const logger = new Logger();
logger.on('message',(data) => console.log('Called listner ', data)); 
logger.log("hello world ") */ 

const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res)=>{
if ( req.url === '/'){
    fs.readFile(path.join(__dirname,'public','index.html') , (err, content) =>{
        res.writeHead(200, {'content-type':'text/html'});
        if (err) throw err ;
        res.end(content);

    })

}
if ( req.url === '/about'){
    fs.readFile(path.join(__dirname,'public','about.html') , (err, content) =>{
        res.writeHead(200, {'content-type':'text/html'});
        if (err) throw err ;
        res.end(content);

    })

}

}); 
const port = process.env.port || 5000
server.listen(port,() => console.log(`Server is running on port ${port}`))
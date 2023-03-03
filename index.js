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
if ( req.url === '/api/users'){
const users = [
    {name: 'Bob Smith',age:40},
    {name: 'John DOe', age:30}

];
res.writeHead(200,{'Content-Type': 'application/json' })
res.end(JSON.stringify(users));
}

}); 
const port = process.env.port || 5000
server.listen(port,() => console.log(`Server is running on port ${port}`))
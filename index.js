/*const Logger = require('./Logger')
const logger = new Logger();
logger.on('message',(data) => console.log('Called listner ', data)); 
logger.log("hello world ") */ 

const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res)=>{
/*if ( req.url === '/'){
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
}*/
// Build file PATH
let filePath = path.join(__dirname, 'public', req.url ==='/' ? 'index.html' : req.url );

//extension of a file 
let extname = path.extname(filePath)

//Initial Content type 
let contentType = 'text/html';
switch(extname){
    case '.js': 
        contentType = 'text/javascript';
        break;
    case '.css': 
        contentType = 'text/css';
        break;
    case '.json': 
        contentType = 'application/json';
        break;
    case '.png': 
        contentType = 'image/png';
        break;
    case '.jpg': 
        contentType = 'image/jpg';
        break;
}
// Reading the file 
fs.readFile(filePath,(err,conetnt)=>{
    if (err){
        if(err.code === "ENONET"){
            //page not found 
            fs.readFile(path.join(__dirname, 'public', 'NotFOund.html'),(err,content)=>
            {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(conetnt,'utf8');
            })
        }else {
            // some server ERROR
            res.writeHead(500);
            res.end(`Server ERROR ! : ${err.code}`);
        }
    }else {
        //success !! 
        res.writeHead(200,{'Content-Type':contentType});
        res.end(conetnt,'utf8');


    }
})

}); 
const port = process.env.port || 5000
server.listen(port,() => console.log(`Server is running on port ${port}`))
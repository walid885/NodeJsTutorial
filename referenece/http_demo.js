const http = require('http')

// create server object 
http.createServer((req,resp) =>{
    //write rsponse 
    resp.write('hello world');
    resp.end(); 
}).listen(5000, ()=> console.log(' server is running . .. .'));
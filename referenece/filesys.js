// creating the fs and path variabales
const fs = require('fs')
const path = require("path")

// create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
    if (err) throw err ; 
    console.log("folder created ... ");
})

//create and write to a file ,
fs.writeFile(
    path.join(__dirname, '/test','hello.txt'), 
    'Hello world!',
    err => {
        if(err) throw err; 
        console.log("file written to . . . . ");
    }
)

//write file => overwrite  
// in order to get over the overwriting problem, we have to use the append file 
fs.readFile(
    path.join(__dirname, '/test','hello.txt'), 'utf8', 
    'Hello world!',
    (err, data) => {
        if(err) throw err; 
        console.log(data);
    }
)

// we can rename using the rename file method 

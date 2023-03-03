const os = require('os')

//platform 
console.log(os.platform());

// cpu arch 
console.log(os.arch());

// cpu core infos
console.log(os.cpus());

// we can have diffrent type of infos , for 
// system specification , using os. => memory, freememory etc 
//uptime
console.log(os.uptime/(3600));
var fs = require("fs");
fs.mkdirSync("day1");
fs.writeFileSync("day1/hello.txt", "Hello World");
fs.appendFileSync("day1/hello.txt", " from Aalok Tanwar");



// command line arguements 
var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

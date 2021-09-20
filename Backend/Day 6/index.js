var fs = require("fs");
fs.mkdir("day1");
fs.writeFile("day1/hello.txt", "Hello World");
fs.appendFile("day1/hello.txt", " from Aalok Tanwar");

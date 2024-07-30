const fs = require("fs");
// fs.mkdirSync("fileone");
fs.writeFileSync("one.txt","one");
fs.writeFileSync("one.txt","two");
fs.appendFileSync("one.txt","  or three included");
const read = fs.readFileSync("one.txt","utf-8");
console.log(read)

fs.renameSync("one.txt","oone.txt");
fs.unlinkSync("oone.txt");
fs.rmdirSync("fileone")
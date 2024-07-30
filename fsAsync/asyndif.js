const fs = require("fs");

// sync

// const data =fs.readFileSync("async.txt","utf-8");
// console.log(data)
// console.log("after the data")

// async

fs.readFile("async.txt","utf-8",(err,data)=>{
    console.log(data)
})
console.log("after the data")
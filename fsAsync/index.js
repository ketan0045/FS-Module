const fs = require("fs");
// fs.writeFile("async.txt","Hello file one 1",(err)=>{
//  console.log("complete");
//  console.log(err);
// });

// fs.appendFile("async.txt", " Hello file two 2", (err) => {
//     console.log("complete two");
//     console.log(err);
// })

fs.readFile("async.txt","utf-8",(err,data)=>{
    console.log(data)
});
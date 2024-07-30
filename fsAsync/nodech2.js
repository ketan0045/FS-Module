const fs = require("fs");

// fs.mkdir("folasy",()=>{ 
//     console.log("folder create")
// })

// fs.writeFile("./folasy/bio.txt","async crud one",()=>{
//     console.log("created")
// })

// fs.appendFile("./folasy/bio.txt","  or async crud two",(err)=>{
//         console.log("created two")
//     })

// fs.readFile("./folasy/bio.txt","utf-8",(bug,allData)=>{
//     console.log(allData)
//     console.log(bug)
// })

// fs.rename("./folasy/bio.txt","./folasy/myBio.txt",(err)=>{
//     console.log("aplied rename")
// })

// fs.unlink("./folasy/myBio.txt",(err)=>{
//     console.log("file delete")
// })

fs.rmdir("./folasy",(err)=>{
    console.log("folder delete")
})
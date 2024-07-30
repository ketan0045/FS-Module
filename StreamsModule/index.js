const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    // fs.readFile("input.txt",(err,data)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         console.log(data)
    //         res.end(data.toString())
    //     }
    // })


    // 2nd ways line by line check
    // reading from a stream
    // create a readablle stream
    // 

        // const restremsss = fs.createReadStream("input.txt")

        // restremsss.on("data",(chunkdatass)=>{
        //     console.log(chunkdatass.toString()) 
        //     res.write(chunkdatass)
        // })

        // restremsss.on("end",()=>{
        //     res.end()
        // })

        // restremsss.on("error",(err)=>{
        //     console.log(err)
        //     res.end("file not found")
        // })

    // 3nd ways 

    const restremsss = fs.createReadStream("input.txt")
    restremsss.pipe(res)
})


server.listen(8000,"127.0.0.1")




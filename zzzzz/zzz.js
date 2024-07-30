// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     fs.readFile(("filess.txt", (err, data) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(data)
//             res.end(data.toString())
//         }
//     }))
// })

// server.listen("4000", "127.0.0.1", () => {
//     console.log("firrrr")
// })

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {


    const restremsss = fs.createReadStream("filess.txt")

    restremsss.on("data", (chunkdatass) => {
        console.log(chunkdatass.toString())
        res.write(chunkdatass)
    })

    restremsss.on("end", () => {
        res.end()
    })

    restremsss.on("error", (err) => {
        console.log(err)
        res.end("file not found")
    })


});

server.listen(4000, "127.0.0.1", () => {
    console.log("Server is running on http://127.0.0.1:4000");
});



const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    // (readFileSync then one time call when asyncnus then multi time call that make readFileSync (one time call in top ) and if else use that multi time call)
    const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`, "utf-8");
    const objData = JSON.parse(data);

    if (req.url == "/") {
        res.end("this is Home pages")
    } else if (req.url == "/about") {
        res.end("this is About pages")
    } else if (req.url == "/contact") {
        // res.write("new Contact ")
        // res.end()
        res.end("this is Contact pages")
    } else if (req.url == "/userapi") {
        // fs.readFile(`${__dirname}/UserApi/userapi.json`,"utf-8",(err,data)=>{
        //     console.log(data);
        //     const objData = JSON.parse(data);  
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(objData[2].name);
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>404 error client side</h1>")
    }
});

server.listen(9000, "127.0.0.1", () => {
    console.log("listen ")
});








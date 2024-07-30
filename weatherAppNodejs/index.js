// const http = require("http");
// const fs = require("fs");
// var requests = require("requests");


// const homeFile = fs.readFileSync("home.html", "utf-8");
// // console.log(homeFile,"hhhhhhhhhhhhhhhhhhhhhhhhhhhhh")

// const replaceVal = (tempVal, orgVal) => {
//     console.log(orgVal, "orgValorgValorgValorgVal")
//     let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
//     temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
//     temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
//     temperature = temperature.replace("{%location%}", orgVal.name);
//     temperature = temperature.replace("{%country%}", orgVal.sys.country);


//     return temperature;
// };

// const server = http.createServer((req, res) => {
//     if (req.url == "/") {
//         requests(
//             "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=a6906cd9ad62832601f49d1d3d2b2f38"
//         )
//             .on("data", (chunk) => {
//                 const objdata = JSON.parse(chunk);
//                 const arrData = [objdata];
//                 // console.log(arrData[0].main.temp);
//                 const realTimeData = arrData
//                     .map((val) => replaceVal(homeFile, val))
//                     .join("");
//                 res.write(realTimeData);
//                 console.log(realTimeData);
//             })
//             .on('end', (err) => {
//                 if (err) return console.log('connection closed due to errors', err);

//                 console.log('end');
//             });
//     }
// });

// server.listen(8000, "127.0.0.1")


const http = require("http");
const fs = require("fs");
var requests = require("requests");


const homeFile = fs.readFileSync("home.html", "utf-8");


const replaceVal = (tempVal, orgVal) => {
  console.log(tempVal, "tempVal333 ")
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
  temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
  temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
  temperature = temperature.replace("{%location%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);  

  return temperature;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=pune&appid=a6906cd9ad62832601f49d1d3d2b2f38"
    )
      .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        // console.log(arrData[0].main.temp);
        const realTimeData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");
        res.write(realTimeData);
        console.log(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  } else {
    res.end("File not found");
  }
});

server.listen(8000, "127.0.0.1");








 







































































































































































































































































































































































































































































































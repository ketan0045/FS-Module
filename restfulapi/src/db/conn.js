const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/student-api", { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>
    console.log("connection successful - restfulapi")
).catch((e) => console.log("No connection - restfulapi", e));

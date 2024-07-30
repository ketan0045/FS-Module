const express = require('express');
require("./db/conn")
const Student = require("./models/student");

const app = express();
const port = process.env.PORT || 8000;

const studentRouter = require("./routers/student")

app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
});


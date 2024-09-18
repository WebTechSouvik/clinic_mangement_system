const express = require("express");
const dotenv = require("dotenv");
const db = require("./models/index.js");
const helloRouter = require("./routes/helloRouter.js");
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


// router

app.use('/', helloRouter);

module.exports = app;
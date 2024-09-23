const express = require("express");
const dotenv = require("dotenv");
const db = require("./models/index.js");
const helloRouter = require("./routes/helloRouter.js");
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');
require('dotenv').config();
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());
app.use('/user', userRouter);


// router

app.use('/', helloRouter);

module.exports = app;
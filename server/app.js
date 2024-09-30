const express = require("express");
const dotenv = require("dotenv");
const db = require("./models/index.js");
const helloRouter = require("./routes/helloRouter.js");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const errorMideleware = require("./middlewares/errorMidileware.js");
const patientRouter = require('./routes/patientRouter.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'views', 'assets')));
app.use(cookieParser());
app.set('view engine', 'ejs');



// router

// app.use('/', helloRouter);
app.use('/', userRouter);
app.use('/patients', patientRouter);




// golbal middleware
app.use(errorMideleware)

module.exports = app;
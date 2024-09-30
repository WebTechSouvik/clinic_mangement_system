const express = require("express");
const dotenv = require("dotenv");
const db = require("./models/index.js");
const helloRouter = require("./routes/helloRouter.js");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const errorMideleware = require("./middlewares/errorMidileware.js");


require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


const userRouter = require('./routes/userRouter');
const patientRouter = require("./routes/patientRouter.js")


app.use('/assets', express.static(path.join(__dirname, 'views', 'assets')));
app.use("/views",express.static(path.join(__dirname,"views")))
app.use(cookieParser());
app.set('view engine', 'ejs');





app.use('/user', userRouter);
app.use("/patient",patientRouter)
app.use('/', helloRouter);







// golbal middleware
app.use(errorMideleware)

module.exports = app;
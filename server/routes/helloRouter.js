const express = require('express');
const testRouter = express.Router();
const helloController = require('../controller/helloController.js');

testRouter.get('/sayHello', helloController.sayHello);

module.exports = testRouter;
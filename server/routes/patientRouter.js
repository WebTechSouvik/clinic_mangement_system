const express = require('express');
const patientRouter = express.Router();
const patientController = require('../controller/patientController')

patientRouter.get('/patientHome', patientController.showPatientHome);

module.exports = patientRouter;
const express = require('express');
const router = express.Router();
const appoinmentController = require('../controller/appoinmentController');


router.get('/appoinment_home', appoinmentController.showAppoinmentHome);


module.exports = router;


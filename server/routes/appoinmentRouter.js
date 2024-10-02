const express = require('express');
const router = express.Router();
const appoinmentController = require('../controller/appoinmentController');


router.get('/', appoinmentController.showAppoinmentHome);
router.post('/add', appoinmentController.addAppoinment);

module.exports = router;


const express = require('express');
const router = express.Router();
const appoinmentController = require('../controller/appoinmentController');


router.get('/', appoinmentController.showAppoinmentHome);
router.get('/detalis', appoinmentController.appoinmentDetalis);

module.exports = router;


const express = require('express');
const router = express.Router();
const { showTestHome, viewTestByAppoinment, viewTestReport }= require('../controller/testController');
const { jwtAuthMiddleware } = require('../middlewares/jwtAuthMiddleware');

// router.use(jwtAuthMiddleware)
router.get('/', showTestHome);
router.get("/report",viewTestReport)
router.get('/:appoinmentId', viewTestByAppoinment);


module.exports = router;

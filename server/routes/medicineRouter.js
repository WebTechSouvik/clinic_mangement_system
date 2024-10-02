const express = require('express');
const router = express.Router();
const medicineController = require('../controller/medicineController');
const { jwtAuthMiddleware } = require('../middlewares/jwtAuthMiddleware');

// router.use(jwtAuthMiddleware)
router.get('/', medicineController.showMedicineHome);
router.get('/:appoinmentId', medicineController.viewMedicineByAppoinment);

module.exports = router;

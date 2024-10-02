const express = require('express');
const router = express.Router();
const medicineController = require('../controller/medicineController');


router.get('/', medicineController.showMedicineHome);
router.get('/viewMedicine', medicineController.viewMedicine);

module.exports = router;


const { Router } = require("express")
const { jwtAuthMiddleware } = require('../middlewares/jwtAuthMiddleware');
const { createPatientController, getAllPatientController, getDeatilsOfPatient, showPatientHome, patientDetails } = require("../controller/patientController");

const router = Router()



// router.use(jwtAuthMiddleware)

router.route("/create").post(createPatientController)

router.route('/').get(showPatientHome)
router.route('/details').get(patientDetails)
router.route("/:id").get(getAllPatientController)
router.route("/detalis/:id").get(getDeatilsOfPatient)


module.exports = router


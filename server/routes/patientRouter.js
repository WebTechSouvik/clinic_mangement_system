
const { Router } = require("express")
const { jwtAuthMiddleware } = require('../middlewares/jwtAuthMiddleware');
const { createPatientController, getAllPatientController, getDeatilsOfPatient, showPatientHome } = require("../controller/patientController");

const router = Router()



// router.use(jwtAuthMiddleware)

router.route("/create").post(createPatientController)

router.route('/patientHome', showPatientHome)
router.route("/:id").get(getAllPatientController)
router.route("/detalis/:id").get(getDeatilsOfPatient)


module.exports = router


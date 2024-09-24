const {Router}=require("express")
const { jwtAuthMiddleware } = require('../middlewares/jwtAuthMiddleware');
const { createPatientController } = require("../controller/patientController");

const router=Router()



router.use(jwtAuthMiddleware)

router.route("/create").post(createPatientController)

module.exports=router
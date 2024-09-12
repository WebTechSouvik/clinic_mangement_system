const {Router}=require("express")
const { userRegister, userLogin } = require("../controller/userController")

const router=Router()

router.route("/register").post(userRegister)

router.route("/login").post(userLogin)

module.exports=router
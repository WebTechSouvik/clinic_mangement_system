const {Patient}=require("../models")
const { createPtaient } = require("../services/patientService")
const asyncHandeler = require("../utils/asyncHandelaer")



const createPatientController=asyncHandeler(async(req,res)=>{

	const id=req.user.id

	const patient=await createPtaient(id,req.body)


	res.status(201).json({status:"sucess",message:"patient created successfull",patient})


})

module.exports={
	createPatientController
}
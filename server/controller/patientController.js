
const { Patient } = require("../models");
const {
	createPtaient,
	getAllPatientByUser,
	getPatientsDetailsByID,
} = require("../services/patientService");
const asyncHandeler = require("../utils/asyncHandelaer");

const createPatientController = asyncHandeler(async (req, res) => {
	const id = req.user.id;

	const patient = await createPtaient(id, req.body);

	res.status(201).json({
		status: "sucess",
		message: "patient created successfull",
		patient,
	});
});

const getAllPatientController = asyncHandeler(async (req, res) => {
	const { id } = req.params;

	const allpatient = await getAllPatientByUser(id);

	if (allpatient.length == 0) {
		return res.status(200).json({ message: "cant find any patient" });
	}

	return res.status(200).json({ allpatient });
});

const getDeatilsOfPatient = asyncHandeler(async (req, res) => {
	const { id } = req.params;

	const patientDetalis = await getPatientsDetailsByID(id);

	
	return res.status(200).json({ patientDetalis });
});

module.exports = {
	createPatientController,
	getAllPatientController,
	getDeatilsOfPatient,
};

   

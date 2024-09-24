const { where } = require("sequelize");
const { Patient, Address, City, State, Country, User } = require("../models");

const createPtaient = async (userId, patientInfo) => {
	const {
		first_name,
		last_name,
		phone_no,
		age,
		gender,
		dob,
		address_line_1,
		address_line_2,
		city_name,
		state_name,
		country_name,
	} = patientInfo;

	//check coutry is present or not

	let country = await Country.findOne({ where: { name: country_name } });
	if (!country) {
		country = await Country.create({ name: country_name });
	}

	//check state is present or not

	let state = await State.findOne({ where: { state_name } });
	if (!state) {
		state = await State.create({
			state_name,
			country_id: country.id,
		});
	}

	//check city is present or not

	let city = await City.findOne({ where: { city_name } });

	if (!city) {
		city = await City.create({ city_name, state_id: state.id });
	}

	// create new address

	const address = await Address.create({
		address_line_1,
		address_line_2,
		city_id: city.id,
	});

	// create new patient

	const patient = await Patient.create({
		first_name,
		last_name,
		phone_no,
		age,
		gender,
		dob,
		address_id: address.id,
		user_id: userId,
	});

	return patient;
};

const getAllPatientByUser = async (userId) => {
	const user = await User.findByPk(userId);

	if (!user) {
		throw new Error("user does not exist");
	}

	const allPatient = await user.getPatients();

	return allPatient;
};

const getPatientsDetailsByID = async (patientId) => {
	const patientDetalis = await Patient.findOne({
		where: { id: patientId },
		include: {
			model: Address,
			attributes: { exclude: ["createdAt", "updatedAt"] },
			include: {
				model: City,
				attributes: { exclude: ["createdAt", "updatedAt"] },
				include: {
					model: State,
					attributes: { exclude: ["createdAt", "updatedAt"] },
					include: {
						model: Country,
						attributes: { exclude: ["createdAt", "updatedAt"] },
					},
				},
			},
		},
	});

	return patientDetalis;
};

module.exports = { createPtaient, getAllPatientByUser, getPatientsDetailsByID };

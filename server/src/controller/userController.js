const { where } = require("sequelize");
const { User } = require("../../models");
const generateToken = require("../utils/token");

const userRegister = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.create({ email, password });

		if (user) {
			res.status(201).json({
				success: true,
				message: "user register succesfull",
				user,
			});
		}
	} catch (err) {
		console.log(err);
	}
};

const userLogin = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = User.findOne({
			where: {
				email,
			},
		});

		if (!user) {
			res.status(400).json({
				success: false,
				message: "user doesnot exsit",
			});
		}

		const token = generateToken(user);
		res.status(200).json({
			success: true,
			message: "login sucessfull",
			token,
		});
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	userRegister,
	userLogin
};

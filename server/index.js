const express = require("express");
const dotenv = require("dotenv");
const db = require("./models");
const app = require("./app.js");

dotenv.config();

db.sequelize.sync().then(() => {
	app.listen(process.env.PORT || 8000, () => {
		console.log(`server started on port${process.env.PORT}`);
	});
}).catch((err)=>{
	console.log("something went worng!!!!!!")
	process.exit(1)
});

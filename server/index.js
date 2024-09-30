const express = require("express");
const dotenv = require("dotenv");
const db = require('./models/index');
const app = require("./app.js");

dotenv.config();


const port = process.env.PORT || 8000;

db.sequelize.sync().then(() => {
	console.log('Database Synced');
	app.listen(port, () => {
		console.log(`Server is running on port ${port}`);
	});
}).catch((err) => {
	console.log('Error syncing database:', err);
});

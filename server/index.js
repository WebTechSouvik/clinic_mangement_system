const express = require("express");
const dotenv = require("dotenv");
const db = require("./models/index.js");
const app = require("./app.js");

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
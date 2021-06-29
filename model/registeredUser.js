const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
	name: String,
	username: String,
	password: String,
	email: String

});

module.exports = mongoose.model("registeredUser", registerSchema);
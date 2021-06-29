"use strict";

const registeredUser = require("../model/registeredUser.js"),
	mongoose = require("mongoose");

exports.getAllRegisteredUsers = (req, res) =>{
	registeredUser.find({})
	.exec()
	.then((registeredUsers) => {
		res.render("registeredUsers", {users: registeredUsers});
	})
	.catch((error) => {
		console.log(error.message);
		return [];
	})
	.then(()=>{
		console.log("Promise Complete");
	});
};

exports.saveNewUser = (req, res)=>{
	registeredUser.create({
		name: req.body.full_name,
		username: req.body.user_name,
		password: req.body.password,
		email: req.body.email
	})
	.then(()=>{
		res.send("<h1>Thanks</h1>");
	})
	.catch((error) => {
		res.send(error);
	});
}


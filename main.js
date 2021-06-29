"use strict";

const
	express = require("express"),
	app = express(),
	layouts = require("express-ejs-layouts"),
	mongoose = require("mongoose"),
	homeController = require("./controllers/homeController.js"),
	errorController = require("./controllers/errorController.js"),
	registeredUser = require("./model/registeredUser.js"),
	registerController = require("./controllers/registerControllers");

mongoose.Promise = global.Promise;

//using mongoose from now on
/*const
	mongoDb = require("mongodb").MongoClient,
	dbUrl = "mongodb://localhost:27017/",
	dbName = "sound_strong_db";


mongoDb.connect(dbUrl, (error, client)=>{
	if(error) throw error;

	let db = client.db(dbName);
	db.collection("contacts").
	find().
	toArray((error, data) => {
		if (error) throw error;
		console.log(data);
	});

	db.collection("contacts").
	insert({"name": "Obama",
	"email": "ObamaFaoundations@gmail.com"},
	(error, db)=>{
		if (error) throw error;
		console.log(db);
	});
});*/
// using mongoose 

mongoose.connect(
	"mongodb://localhost:27017/sound_strong_db",
	{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.once("open", ()=>{
	console.log("Succesfully connected to mongoDb!");
});


/*
registeredUser.create({
	name: "Sherlock",
	username: "Sherlock_DIck",
	password: "ff00f0f",
	email: "ShelockBakerStreet@gmail.com"
}, (error, savedDocument) =>{
	if(error) throw error;
	console.log(savedDocument);
});
*/

/*
registeredUser.findOne({name: "Sherlock"})
.exec((error, data)=>{
	if(error) throw error;
	console.log(data.email);
})
*/


/*
registeredUser.findOne({name: "Sherlock"}, (error, data)=>{
	if(error) throw error;
	console.log(data);
});

*/



app.use(layouts);
app.use(express.static("public"));
app.set("port", process.env.PORT || 3000);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set("view engine", "ejs");



app.get("/", homeController.indexPageLoader);
app.get("/instruments", homeController.showInstruments);
app.get("/rooms", homeController.showRooms);
app.get("/login", homeController.showLogin);
app.get("/signup", homeController.showSignup);
app.post("/contact", homeController.showContacts);
app.get("/registeredUsers", registerController.getAllRegisteredUsers);
app.post("/register", registerController.saveNewUser);



app.use(errorController.pageNotFound);
app.use(errorController.internalError);

app.listen(app.get("port"), ()=>{
	console.log(`Server is listening at port: ${app.get("port")}`)});


exports.indexPageLoader = (req, res)=>{
	res.render("index.ejs");
};

exports.showInstruments = (req, res) => {
	res.render("instruments.ejs")
};

exports.showRooms = (req, res) =>{
	res.render("rooms")
};

exports.showContacts = (req, res)=>{
		res.send(`<h1>Thank you for contacting us</h1>`)
};

exports.showLogin = (req, res) => {
		res.render("login")
};

exports.showSignup = (req, res) => {
	res.render("signin")
};
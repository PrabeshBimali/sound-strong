const httpStatus = require("http-status-codes");

exports.pageNotFound = (req, res) => {
	let errorCode = httpStatus.NOT_FOUND;
	res.status(errorCode);
	res.render("error");
};


exports.internalError = (req, res, error)=>{

	let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
	console.log(`error occured: ${error.stack}`);
	res.status(errorCode);
	res.send(`${errorCode} | Internal server Error`);
};
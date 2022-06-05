require('dotenv').config()
const jwt = require('jsonwebtoken')

function generateToken(uname){

    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        username: uname,
    }
	return new Promise((resolve,reject)=>{
		const token = jwt.sign(data, jwtSecretKey);

		resolve(token)
	})
  
}
function decodeToken(token){
	
	let jwtSecretKey = process.env.JWT_SECRET_KEY;

	try {

		const data = jwt.decode(token, jwtSecretKey);
		return data.username
	} catch (error) {
		return false
	}
}
function validateToken(token) {

	let jwtSecretKey = process.env.JWT_SECRET_KEY;

	try {

		const verified = jwt.verify(token, jwtSecretKey);
		return verified
	} catch (error) {
		return false
	}
}

module.exports = {
    generateToken,
    validateToken,
	decodeToken
}
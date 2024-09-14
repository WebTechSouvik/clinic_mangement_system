var jwt = require("jsonwebtoken");
const generateToken = (user) => {
	return jwt.sign({
		userId: user.id,
		userEmail: user.email,
	},process.env.MY_SECRET_KEY,{expiresIn:'1h'});
};

module.exports=generateToken

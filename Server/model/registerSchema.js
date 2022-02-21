const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	confirmPassword: {
		type: String,
		required: true,
	},
	tokens: [
		{
			token: {
				type: String,
				required: true,
			},
		},
	],
});

// Hashing the password and confirmPassword
registerSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 12);
		this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
	}
	next();
});
// generating token
registerSchema.methods.generateAuthToken = async function () {
	try {
		let token = jwt.sign({ _id: this._id }, process.env.SECERET_KEY);
		this.tokens = this.tokens.concat({ token: token });
		await this.save();
		console.log(token);
		return token;
	} catch (err) {
		console.log(err);
	}
};

// collection creation
const UserRegister = mongoose.model("USERREGISTER", registerSchema);

module.exports = UserRegister;
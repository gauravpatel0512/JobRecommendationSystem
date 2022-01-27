const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
   name:{
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   confirmPassword: {
      type: String,
      required: true
   }
})

const UserRegister = mongoose.model('USERREGISTER' , registerSchema);

module.exports = UserRegister;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  confirmed : {
    type : Boolean,
    required : true,
  },
  email : {
    type : String,
    required : true,
  },
  username : {
    type : String,
    required : true,
  },
  password : {
    type : String,
    required : true,
  },
  interests : {
    type : Array,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};